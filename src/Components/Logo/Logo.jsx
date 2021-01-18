import React from 'react'
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

export default Logo
