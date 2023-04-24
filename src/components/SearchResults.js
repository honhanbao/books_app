import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Search from './Search'
import BookStore from './BookStore'
import {books} from '../Data/Books'


const book_data = books

export default function SearchResults(props) {

    const params = useParams()
    const NUMBER = 40
    const [booksData, setBooksData] = useState(book_data)

	useEffect(() => {

		fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.queryText}&maxResults=${NUMBER}`
		)
			.then((res) => res.json())
			.then((data) => {
				setBooksData(data)
			})
			.catch((error) => console.error(error))
	}, [params.queryText])


    return(
        <div>
            <div className="home_title">
                <h1>Explore your potential with us!</h1>
            </div>

            <div className="home_search">
                <Search/>
            </div>

            <div className="home_content">
                <h2>{params.queryText} books</h2>
                <BookStore
                    books = {booksData}
                />
            </div>


            <div className="home_footer">
                <p>@ 2023 Bao Ho. All rights reserved.</p>
            </div>
        </div>
    )
  }