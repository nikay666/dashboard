import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { logoSVG } from '../../utilits'
import './Logo.scss'

const Logo = props => {
    return (
        <Link to='/' className='logo'>
            {logoSVG}
        </Link>
    )
}

Logo.propTypes = {

}

export default Logo
