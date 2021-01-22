import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './TabPanel.scss'
import { Card } from '../Card'

const TabPanel = ({courseList, title, active}) => {
    // console.log(courseList)
    return (
        <div className={classNames('tab-panel','course-list', {'active': active})} >
            <h2 className="visually-hidden">{title}</h2>
            {
                courseList.map((course, index) => (
                
                    <Card 
                        classes='card--course'
                        key={index}
                        title={course.title}
                        lessonNumber={course.lessonNumber} 
                        time={course.time} 
                        author={course.author}
                        link={course.link}
                        previewImg={course.previewImg}
                    />
                ))
            }

        </div>
    )
}

TabPanel.propTypes = {
    courseList: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    active: PropTypes.bool
}

export default TabPanel
