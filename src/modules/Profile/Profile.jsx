import React from 'react'
import PropTypes from 'prop-types'
import './Profile.scss'
import { InfoBlock } from '../../Components/InfoBlock'
import { Widget } from '../../Components/Widget'

const Profile = ({user}) => {
    return (
        <aside className='profile aside'>
            <InfoBlock 
                title={user.name} 
                img={user.avatar} 
                link={user.link}
                profile
            />

            <Widget title='progress' data={user.progress}/>
            <Widget title='Upcoming Task' data={user.tasks}/>


        </aside>
    )
}

Profile.propTypess = {
    user: PropTypes.object
}

export default Profile
