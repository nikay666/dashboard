import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.scss'

const Button = ({value, color='primary', type}) => {
    return (
        <button className={classNames('btn', [`btn--${color}`], [`btn--${type}`])}>
            {value}
        </button>
    )
}

Button.propTypes = {
    value: PropTypes.string,
    color: PropTypes.string,
}

export default Button
