import React from 'react'
import { Button } from '../Components/Button'

const AllCourses = () => {
    return (
        <div className='content'>
            <div className="content__header">
                <h1 className='h1'>All Courses</h1>
                <button className='filter__btn btn btn--text'>Filters</button>
            </div>
            <div className="content__main">
                <div className="course-list">

                </div>
            </div>
        </div>
    )
}

export default AllCourses
