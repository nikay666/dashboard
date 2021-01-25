import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './CardCover.scss'
import { Avatar } from '../Avatar'
import { Link } from 'react-router-dom'

const CardCover = ({title, previewImg, lessonNumber, time,  author, link, classes }) => {
    return (
        <div className={classNames('card-cover', `card-cover--${classes}`)}>
            <img src={previewImg} alt="" className='card-cover__bg-img' />
            <div className="card-cover__top">
                <div className="card-cover__wrap">
                    <p className="card-cover__title">{title}</p>
                    <p className="card-cover__subtitle">{lessonNumber} lessons</p>
                </div>
                <p className="card-cover__time">{time}</p>
            </div>
            <div className="card-cover__bottom">
                <Link className='card-cover__play' to={link}>
                    <Avatar icon='play' color='light'/>
                </Link>
                <Link className='card-cover__author' to={author.link}>
                    <Avatar border type='circle' img={author.img} alt={author.name} />
                </Link>
            </div>

        </div>
    )
}

CardCover.propTypes = {
    title: PropTypes.string,
    previewImg: PropTypes.string,
    lessonNumber: PropTypes.number,
    time: PropTypes.string,
    author: PropTypes.objectOf(PropTypes.string),
    link: PropTypes.string,
    classes: PropTypes.string
}

export default CardCover
