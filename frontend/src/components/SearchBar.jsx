import React, { useState } from 'react'
import '../styles/SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SearchBar() {
    const [fullTimeOnly, setFullTimeOnly] = useState(false);

    const handleFullTimeOnlyChange = (event) => {
        setFullTimeOnly(event.target.checked);
    }

    return (
        <form action="" className="searchBar">
            <div className='columns mt-2'>
                <div className='column is-3'>
                    <div className="field">
                        <label className="label">Job Description</label>
                        <p className="control has-icons-left ">
                            <input className="input" type="text" placeholder="Filter by title, benefits, companies, experties" />
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon="fa-regular fa-clipboard" />
                            </span>
                        </p>
                    </div>
                </div>
                <div className='column is-3 '>
                    <div className="field">
                        <label className="label">Location</label>
                        <p className="control has-icons-left">
                            <input className="input" type="text" placeholder="Filter by city, state, zip code or country" />
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon="fa-solid fa-earth-africa" />
                            </span>
                        </p>
                    </div>
                </div>
                <div className='column is-3'>
                    <div className='columns is-centered mt-5'>
                        <div className="field mr-5">
                            <p className="control">
                                <label className="checkbox mt-3">
                                    <input type="checkbox" checked={fullTimeOnly} onChange={handleFullTimeOnlyChange} />
                                    <span className='pl-3'><b>Full Time Only</b></span>
                                </label>
                            </p>
                        </div>
                        <div className="field ml-5">
                            <p className="control">
                                <button className="button is-fullwidth" style={{ backgroundColor: '#407EBE', color: 'white', margin: '2px' }}><b>Search</b></button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SearchBar