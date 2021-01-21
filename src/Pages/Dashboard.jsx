import React from 'react'
import { Tabs } from '../Components/Tabs'


const Dashboard = ({tabs}) => {
    return (
        <div className="dashboard content">
            <div className="content__header">
                <h1 className='h1'>Dashboard</h1>
                <Tabs tabs={tabs}/>
            </div>
        </div>
    )
}



export default Dashboard
