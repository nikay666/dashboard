import React from 'react'
import classNames from 'classnames'
import MenuItem from './MenuItem'
import './Menu.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faColumns, faCommentAlt, faFolder, faThLarge, faUser } from '@fortawesome/free-solid-svg-icons'


const menuList = [
    {link: '/dashboard', text: 'Dashboard', icon: "columns"},
    {link: '/all', text: 'All courses',icon: "th-large" },
    {link: '/resources', text: 'Resources', icon: 'folder'},
    {link: '/friends', text: 'Friends', icon: 'user'},
    {link: '/chats', text: 'Chats', icon: 'comment-alt'},
    {link: '/settings', text: 'Settings', icon: 'cog'}
]
library.add(faColumns, faThLarge, faFolder, faUser, faCommentAlt, faCog)

const Menu = () => {

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
