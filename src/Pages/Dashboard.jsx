import React, {  useState } from 'react'
import { TabPanel } from '../Components/TabPanel'
import { Tabs } from '../Components/Tabs'

const dashboardList = [
    {title: 'Ongoing'},
    {title: 'Favorite'},
    {title: 'Complete'}
]

const Dashboard = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0)


    const handlerActiveTab = (activeID) => {
        setActiveTab(activeID)
    }


    return (
        <div className="dashboard content">
            <div className="content__header">
                <h1 className='h1'>Dashboard</h1>
                <Tabs tabs={tabs} activeID={activeTab} onClickTabs={handlerActiveTab} />
            </div>
            <div className="content__main">
                {
                    dashboardList.map((item, index) => (
                        <TabPanel 
                            coursesList={item} 
                            id={index}
                            key={index}
                            active={activeTab === index}
                        /> 
                    ))
                } 
            </div>
        </div>
    )
}



export default Dashboard
