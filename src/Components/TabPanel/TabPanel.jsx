import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './TabPanel.scss'

const TabPanel = ({coursesList, active}) => {

    return (
        <div className={classNames('tab-panel', {'active': active})} >
            <h1 className="">{coursesList.title}</h1>
        </div>
    )
}

TabPanel.propTypes = {

}

export default TabPanel
