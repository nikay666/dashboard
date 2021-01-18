import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProfileMenu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

const ProfileMenu = () => {
    const [show, setShow] = useState(false)
    const menuRef = useRef()
    

    const handlerShow = (e) => {
        setShow(!show)
    }
    const handleroutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if(!path.includes(menuRef.current)){
            setShow(false)
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', handleroutsideClick)
    }, [])

    
    return (
        <div className='profile-menu' ref={menuRef} >
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