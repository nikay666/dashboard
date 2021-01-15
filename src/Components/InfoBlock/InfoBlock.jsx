import React from 'react'
import PropTypes from 'prop-types'
import './InfoBlock.scss'
import { Avatar } from '../Avatar'

const InfoBlock = ({avatar, name, link}) => {
    return (
        <div className='info-block'>
            <Avatar type='square' img={avatar} alt={name} />
        </div>
    )
}

InfoBlock.propTypes = {

}

export default InfoBlock
