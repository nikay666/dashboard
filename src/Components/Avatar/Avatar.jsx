import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Avatar.scss'

const Avatar = ({type='square', img, icon='smile', color='primary', alt, size='medium'}) => {
    return (
        <div className={classNames('avatar', `avatar--${type}`, `avatar--${size}`, `avatar--${color}`)} >
            {
                img 
                ? <img className='avatar__img' src={img} alt={alt} />
                : <FontAwesomeIcon className='avatar__icon' icon={icon} />

            }
            
        </div>
    )
}

Avatar.propTypes = {
    type: PropTypes.string,
    img: PropTypes.string, 
    icon: PropTypes.string, 
    color: PropTypes.string, 
    alt: PropTypes.string, 
    size: PropTypes.string
}

export default Avatar
