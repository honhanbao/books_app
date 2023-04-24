
import Book from './Book'               // export default
import { Box } from '@mui/material'


// https://www.googleapis.com/books/v1/volumes?q=Mathematics&maxResults=20
// https://www.googleapis.com/books/v1/volumes/Ulz-LR6Y2gAC

export default function BookStore(props) {
    return(
        <div >  
            <Box 
                sx={{ 
                    // border: '1px dashed red', 
                    display: 'flex',                
                    flexWrap: 'wrap',               // new line if full
                    gap: '1.5%',
                    marginBottom: '20px',
                    alignItems: 'flex-start',       
                    alignContent: 'flex-start',
                    }}>
                {(props.books).items.map(
                    (book) => 
                    {
                        let thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
                        let amount=book.saleInfo.listPrice && book.saleInfo.listPrice.amount;
                        if(thumbnail!== undefined && amount !==undefined){
                            return (
                                <Box sx={{ flex: '0 0 calc(25% - 1.5%*3)', margin: '1% 1% 1% 2%', 
                                           width: '100%', fontSize: '20px', paddingBottom: '40px'}}>
                                    <Book  
                                        id={book.id}
                                        src={book.volumeInfo.imageLinks.thumbnail}
                                        title={book.volumeInfo.title}
                                        authors={book.volumeInfo.authors}
                                        price = {String(book.saleInfo.retailPrice.amount)}        
                                    />
                                </Box>
                            )}
                    }
                )}
            </Box>
        </div>
    )
}