import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Tabs.scss'
import Tab from './Tab'
import { setIndent } from '../../utilits'

const Tabs = ({tabs}) => {
    const refList = useRef()
    const [indicatorPos, setIndicatorPos] = useState()

    const updateWidht = (activeTab) => {
        setIndent(activeTab, setIndicatorPos)
    }
    useEffect(() => {
        setIndent(refList.current.firstChild, setIndicatorPos)
    }, [])

    return (
        <div  className='tabs'>
            <div ref={refList} className="tabs__list">
                {
                    tabs.map((tab, index) => (
                        <Tab onClick={updateWidht} id={index} title={tab.title} key={`index--${index}`}/>
                    ))
                }
 
            </div>
            <span style={indicatorPos} className="tabs__indicator"></span>
        </div>
    )
}

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object)
}

export default Tabs
