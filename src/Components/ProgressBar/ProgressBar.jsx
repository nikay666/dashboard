import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './ProgressBar.scss'

const ProgressBar = ({value, max=100, color='primary',}) => {
    return (
        <progress title={value}  value={value} max={max} className={classNames('progress-bar', `progress-bar--${color}`)}>
            {value}%
        </progress>
    )
}

ProgressBar.propTypes = {

}

export default ProgressBar
