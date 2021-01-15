import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.scss'

const Button = ({value, color}) => {
    return (
        <button className={classNames('btn', [`btn--${color}`])}>
            {value}
        </button>
    )
}

Button.propTypes = {

}

export default Button