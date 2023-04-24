
import { Link } from 'react-router-dom'
import { Box } from "@mui/material"
export default function Book(props) {
    return(
        <div >
            <Box 
                sx={{ 
                    flex: '1 0 auto', 
                    maxWidth: '90%', 
                    // border: '10px solid violet',
                    borderRadius: '20px',
                    backgroundColor: 'white',
                    position: 'relative', // add position relative to Box
                    fontSize: '30',
                }}                >   

                <img style={{ marginTop: '10px' , maxWidth: '100%', height: '300px', width: '250px'}}
                    src={props.src} 
                    alt="img_poster"
                    />
                <p id="title_text" 
                    style={{ alignItems: 'center', justifyContent: 'center',
                             color: 'blue', fontFamily: 'Times', fontSize: '30'}} >
                    {props.title}</p>

                <div>
                    <p>{props.authors}</p>
                    <p> ${props.price}</p>       
                    <Link to={`/book/${props.id}`} className="action">
                    <button className="material-icons" style = {{fontSize: "20px", marginBottom: "5px"}}>Book Detail</button>
                    </Link>   
                </div>
            </Box>
        </div>
    )
  }