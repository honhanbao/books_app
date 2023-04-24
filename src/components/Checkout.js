import Search from './Search'
export default function Checkout() {
    return (
        <div style = {{padding: "100px", fontSize: "20px" }}>
            <div className="home_title">
                <h1>Explore your potential with us!</h1>
            </div>

            <div className="home_search">
                <Search/>
            </div>
            
            <div className="home_content"
                // style = {{border: '1px dashed red', padding: '30px'}}
                >
                <h2>Check out: </h2>

            </div>
 

 
            <div className="home_footer">
                <p>@ 2023 Bao Ho. All rights reserved.</p>
            </div> 
        </div>
    );
  }