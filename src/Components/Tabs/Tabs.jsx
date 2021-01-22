import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Tabs.scss'
import Tab from './Tab'
import { setIndent } from '../../utilits'

const Tabs = ({tabs, activeID, onClickTabs}) => {
    const refList = useRef()
    const [indicatorPos, setIndicatorPos] = useState()


    const updateWidht = (activeTab, activeID) => {
        onClickTabs(activeID)
        setIndent(activeTab, setIndicatorPos)
    }
    useEffect(() => {
        setTimeout(() => {
            const tabChildren = Array.from(refList.current.children)
            let active = refList.current.firstChild; 
    
            tabChildren.forEach(child => {
                if(child.classList.contains('active')){
                    active = child
                }
            });
    
            setIndent(active, setIndicatorPos)
        }, 10);
    }, [])

  
    return (
        <div  className='tabs'>
            <div ref={refList} className="tabs__list">
                {
                    tabs.map((tab, index) => (
                        <Tab 
                            onClickTab={updateWidht} 
                            id={index} 
                            title={tab.title}
                            key={`index--${index}`}
                            active={activeID === index}
                        />
                    ))
                }
            </div>
            <span style={indicatorPos} className="tabs__indicator"></span>
        </div>
    )
}

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object),
    activeID: PropTypes.number,
    onClickTabs: PropTypes.func
}

export default Tabs
