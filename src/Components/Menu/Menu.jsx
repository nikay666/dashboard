import React from 'react'
import classNames from 'classnames'
import MenuItem from './MenuItem'
import './Menu.scss'


const Menu = ({menuList}) => {

    return (
        <ul className={classNames('menu')}>
           { 
                menuList.map((item, index) => (
                    <MenuItem 
                        key={`item--${index}`} 
                        icon={item.icon} 
                        link={item.link} 
                        text={item.text} 

                    />
                ))
            }

        </ul>
    )
}

export default Menu
