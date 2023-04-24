import Search from './Search'
import { Link } from 'react-router-dom'
import {books} from '../Data/Books'     // export 
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

// https://www.googleapis.com/books/v1/volumes/SuqsCAAAQBAJ

const initial_detail = books.items[0]

export default function Book() {

    // use useEffect to load data of the chosen book and display book data
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes/"

    let params = useParams()

    // console.log(BASE_URL+`${params.bookID}`)
    // const [currentDetail, setDetail] = useState({});   // this instantiation will has error before the first render
    const [currentDetail, setDetail] = useState(initial_detail);

    useEffect(() => {
        console.log("Before fetching data:", currentDetail);
      const url = BASE_URL+`${params.bookID}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setDetail({...data});
          console.log("After useEffect:", currentDetail);
        })
        .catch((error) => console.log(error));
    }, [params.bookID]);


    return(

        <div style = {{
                // border: '1px solid black', 
                padding: "100px", 
                fontSize: "20px" }}>
            <div className="home_title"
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1>Explore your potential with us!</h1>
            </div>

            <div className="home_search">
                <Search/>
            </div>
        
            <div className="bookDetail_content"
                style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', paddingBottom: '40px',}}>
                <div className="bookDetail_container"
                    style = {{padding: '30px',
                            // border: '10px solid violet',
                            borderRadius: '20px',
                            backgroundColor: 'white',
                            width: "80%",
                            margin: 'auto',

                        }}>

                    {/* <h2>Book details:</h2> */}
                    <img 
                        src={currentDetail.volumeInfo.imageLinks.thumbnail} 
                        alt="img_detail"
                        style={{ height: '300px', width: '250px', paddingTop: '40px'}}
                        />
                    <p><strong>Title: </strong> {currentDetail.volumeInfo.title} </p>
                    <p><strong>Author: </strong> {currentDetail.volumeInfo.authors} </p>
                    <p><strong>Description: </strong> {<div dangerouslySetInnerHTML=
                            {{__html: currentDetail.volumeInfo.description && 
                            currentDetail.volumeInfo.description.replace(/(http\S+)/g, 
                            "<a href='$1'>$1</a>").replace(/<b>/g, "<strong>").
                            replace(/<\/b>/g, "</strong>").replace(/<i>/g, "<em>").
                            replace(/<\/i>/g, "</em>").replace(/<br>/g, "<br />")}}></div>} </p>
                    <p><strong>Publisher: </strong>{currentDetail.volumeInfo.publisher}</p>
                    <p><strong>Published Date: </strong> {currentDetail.volumeInfo.publishedDate}</p>
                    <p><strong>Price: </strong>{currentDetail.saleInfo.retailPrice.amount}</p>
                    <Link to={`/book/${params.bookID}`} className="action">
                        <button className="material-icons" style = {{fontSize: "20px" }}>Add to Cart</button>
                    </Link> 
                </div>
            </div>

 
            <div className="home_footer">
                <p>@ 2023 Bao Ho. All rights reserved.</p>
            </div> 
        </div>
    )
  }