import React from 'react'
import './UserMenu.scss'
import { Button } from '../../Components/Button'
import { Menu } from '../../Components/Menu'
import { Logo } from '../../Components/Logo'


const UserMenu = ({menuList}) => {
    return (
        <header className='user-menu aside'>
            <div className="user-menu__logo">
                <Logo/>
            </div>
            <Button value='Join a course' color='primary'  type='contained' />
            <nav className="user-menu__navigation">
                <Menu menuList={menuList}/>
            </nav>
            <div className="user-menu__upgrade">
                <Button value='Upgrade' color='primary' type='contained' />
            </div>

        </header>
    )
}


export default UserMenu
