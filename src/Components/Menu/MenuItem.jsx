import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useRouteMatch } from 'react-router-dom'
import classNames from 'classnames'

const MenuItem = ({link, text, icon, onClick }) => {
    const match = useRouteMatch({
        path: link
    })
    return (
        <li className={classNames('menu__item', {'active': match})} onClick={onClick}>
                <Link to={link} className="menu__link text text--icon">
                   {
                    icon && <FontAwesomeIcon className='menu__icon' icon={icon}/>
                    }
                    {text}
                </Link>
        </li>
    )
}

MenuItem.propTypes = {
    link:  PropTypes.string,
    text:  PropTypes.string,
    icon:  PropTypes.string,
    onClick: PropTypes.func
}

export default MenuItem
