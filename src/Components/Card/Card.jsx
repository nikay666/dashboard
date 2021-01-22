import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Card.scss'
import { Avatar } from '../Avatar'
import { Link } from 'react-router-dom'

const Card = ({title, previewImg, lessonNumber, time,  author, link, classes }) => {
    return (
        <div className={classNames('card', classes)}>
            <img src={previewImg} alt="" className='card__bg-img' />
            <div className="card__top">
                <div className="card__wrap">
                    <p className="card__title">{title}</p>
                    <p className="card__subtitle">{lessonNumber} lessons</p>
                </div>
                <p className="card__time">{time}</p>
            </div>
            <div className="card__bottom">
                <Link className='card__play' to={link}>
                    <Avatar icon='play' color='light'/>
                </Link>
                <Link className='card__author' to={author.link}>
                    <Avatar border type='circle' img={author.img} alt={author.name} />
                </Link>
            </div>

        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    previewImg: PropTypes.string,
    lessonNumber: PropTypes.number,
    time: PropTypes.string,
    author: PropTypes.objectOf(PropTypes.string),
    link: PropTypes.string,
    classes: PropTypes.string
}

export default Card
