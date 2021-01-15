import React from 'react'
import PropTypes from 'prop-types'
import './UserMenu.scss'
import { Button } from '../../Components/Button'
import { Menu } from '../../Components/Menu'
import { Logo } from '../../Components/Logo'


const UserMenu = props => {
    return (
        <aside className='user-menu aside'>
            <div className="user-menu__logo">
                <Logo/>
            </div>
            <Button value='Join a course' color='primary' />
            <nav className="user-menu__navigation">
                <Menu/>
            </nav>
            <div className="user-menu__upgrade">
                <Button value='Upgrade' color='primary' />
            </div>

        </aside>
    )
}

UserMenu.propTypes = {

}

export default UserMenu
