import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useMatchHash } from '../../CustomHooks/CustomHooks'

const Tab = ({title, onClick}) => {
    const match = useMatchHash({
        hash: `#${title}` 
    })
    const handlerClick = (e) => {
        onClick(e.target)
    }

    return (
        <Link 
            className={classNames("tab", {'active': match})}
            to={{hash:`${title}`}}
            onClick={handlerClick}
        >{title}</Link>
        
    )
}

Tab.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

export default Tab
