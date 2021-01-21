import React from 'react'
import { Notification } from '../../Components/Notification'
import PropTypes  from 'prop-types'
import { Search } from '../../Components/Search'
import './TopPanel.scss'

const TopPanel = ({list}) => {
    return (
        <div className='top-panel'>
            <Search/>
            <Notification list={list}/>
        </div>
    )
}

TopPanel.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
}

export default TopPanel
