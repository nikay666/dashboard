import React from 'react'
// import PropTypes from 'prop-types'
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
    return (
        <div className="search">
            <FontAwesomeIcon className="search__icon" icon='search'/>
            <input className="search__input" type="search" name="search" id="search" placeholder="Search"/> 
            <FontAwesomeIcon className="search__close" icon='times'/>
        </div>
    )
}

// Search.propTypes = {

// }

export default Search
