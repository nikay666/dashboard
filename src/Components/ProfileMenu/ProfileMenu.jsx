import React from 'react'
import { Link } from 'react-router-dom'
import './ProfileMenu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { useHandlerPopup } from '../../CustomHooks/CustomHooks'

const ProfileMenu = () => {
    const [ref, show, handlerShow] = useHandlerPopup()
    
    return (
        <div className='profile-menu' ref={ref} >
            <button  
                className='profile-menu__link'
                onClick={handlerShow} 
            >
                <FontAwesomeIcon icon='chevron-down'/>  
            </button>
            <div className={classNames("profile-menu__list", {'show': show})}>
                <Link className='profile-menu__item' to='/settings'  onClick={handlerShow}>
                    <FontAwesomeIcon className='profile-menu__icon' icon='cog'/>
                    Settings
                </Link>
                <Link className='profile-menu__item profile-menu__item--exit' to='/'  onClick={handlerShow}>
                    <FontAwesomeIcon className='profile-menu__icon' icon='sign-out-alt'/>
                    Exit
                </Link>
            </div>
        </div>
    )
}

export default ProfileMenu
