import React from 'react'
import PropTypes from 'prop-types'
import './Profile.scss'
import { InfoBlock } from '../../../Components/InfoBlock'

const Profile = ({user}) => {
    return (
        <aside className='profile aside'>
            <InfoBlock name={user.name} avatar={user.avatar} link={user.link}/>
        </aside>
    )
}

Profile.propTypes = {

}

export default Profile
