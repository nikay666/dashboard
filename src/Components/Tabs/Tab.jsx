import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button } from '../Button'

const Tab = ({title, id, active, onClickTab}) => {

    const handlerClick = (e) => {
        onClickTab(e.target, parseInt(e.target.id, 10))
    }


    return (
        <button
            className={classNames("tab", {'active': active}, 'btn btn--text')}
            id={id}
            onClick={handlerClick}
    
        >{title}</button>
    )
}

Tab.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
    active: PropTypes.bool,
    onClickTab: PropTypes.func,

}

export default Tab
