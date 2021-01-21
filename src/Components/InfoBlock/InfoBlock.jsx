import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './InfoBlock.scss'
import { Avatar } from '../Avatar'
import ProgressBar from '../ProgressBar/ProgressBar'
import { ProfileMenu } from '../ProfileMenu'

const InfoBlock = ({ title, className='', subtitle, img, icon, color, link, utility, profile}) => {
    return (
        <div className={classNames('info-block', className)}>
            <Avatar className="info-block__img" color={color} icon={icon} type='square' img={img} alt={title} />
            <div className={classNames("info-block__content", {'info-block__content--only-title': !subtitle})}>
                <p className={classNames("info-block__title")}>{title}</p>
                {
                   subtitle && <p className="info-block__subtitle">{subtitle}</p>
                }
            </div>
            {
                utility && <div className="info-block__utility">
                   <ProgressBar value={utility} color={color}/>
                </div>
            }
            {
                profile && <ProfileMenu/>
            }

        </div>
    )
}

InfoBlock.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    img: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    link: PropTypes.string,
    utility: PropTypes.number,
    profile: PropTypes.bool

}

export default InfoBlock
