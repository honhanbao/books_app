
import Search from './Search'
import BookStore from './BookStore'
import {books} from '../Data/Books'

const book_data = books
export default function Home() {
    return(
        <div style = {{ padding: "100px", fontSize: "20px" }}>
            <div className="home_title">
                <h1>Explore your potential with us!</h1>
            </div>

            <div className="home_search">
                <Search/>
            </div>

            <div className="home_content">
                <h2 >Recommended items for you</h2>
                <BookStore
                    books = {book_data}
                />
            </div>

            <div className="home_footer">
                <p>@ 2023 Bao Ho. All rights reserved.</p>
            </div> 
        </div>
    )
  }