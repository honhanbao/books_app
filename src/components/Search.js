import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function Search() {

	const navigate = useNavigate()
	
	const [query, setQuery] = useState('')

    const handleSearch = () => {
		navigate(`/search/${query}`)
    }

    return(
        <div 
        // style={{ display: 'flex', flexWrap: 'nowrap', margin: 0 }}
            style={{
                // border: '1px dashed red',
                display: 'flex',
                flexWrap: 'nowrap',
                margin: '0 auto', // center horizontally
                width: '30vw', // take up 30% of viewport width
                marginTop: 30,
                marginBottom: 30,
                padding: 20,
                height: '4vh',
            }}
        >
            <input
                id="input_search"
                className="search"
                placeholder="Search"
                value={query} 
                onChange={e=>setQuery(e.target.value)}
                style={{ flex: 1, fontSize: '30px'}}
            />
            <button
                id="btn_search"
                className="search"
                onClick={handleSearch}
                style={{ marginLeft: 10, fontSize: '30px' }}
            >Submit
            </button>
        </div>
    )
  }