import React, {  useState } from 'react'
import { TabPanel } from '../Components/TabPanel'
import { Tabs } from '../Components/Tabs'

const dashboardList = [
    {
        title: 'Ongoing',
        courseList: [
            {
                title: 'UI/UX Design',
                lessonNumber: 20,
                time: '2h 20min',
                link: '/courses/ui-ux-designer',
                previewImg: 'https://i.pinimg.com/564x/41/cf/c8/41cfc8ba70a4b9d956843878c3180812.jpg',
                author: {
                    name: 'Anna',
                    link: '/anna',
                    img: 'https://yt3.ggpht.com/ytc/AAUvwnhvbGx90LI0HiIffwoxKQWwFoSN1WQc4YYjK9xPrA=s176-c-k-c0x00ffffff-no-rj'
                }
            },
            {
                title: 'Photography',
                lessonNumber: 12,
                time: '1h 30min',
                link: '/courses/photography',
                previewImg: 'https://i.pinimg.com/564x/a3/bf/76/a3bf76cae2d851ccac5856015a7c27ad.jpg',
                author: {
                    name: 'Anna',
                    link: '/anna',
                    img: 'https://yt3.ggpht.com/ytc/AAUvwnhvbGx90LI0HiIffwoxKQWwFoSN1WQc4YYjK9xPrA=s176-c-k-c0x00ffffff-no-rj'
                }
            },
            {
                title: 'Animation',
                lessonNumber: 12,
                time: '2h 30min',
                link: '/courses/animation',
                previewImg: 'https://i.pinimg.com/564x/b9/f8/9b/b9f89b1b052bea1375cdcc92d8eb292c.jpg',
                author: {
                    name: 'Anna',
                    link: '/anna',
                    img: 'https://yt3.ggpht.com/ytc/AAUvwnhvbGx90LI0HiIffwoxKQWwFoSN1WQc4YYjK9xPrA=s176-c-k-c0x00ffffff-no-rj'
                }
            },
            {
                title: 'Animation',
                lessonNumber: 12,
                time: '2h 30min',
                link: '/courses/animation',
                previewImg: 'https://i.pinimg.com/564x/3a/fc/f7/3afcf71c0d834a28f266f626f88c2c2c.jpg',
                author: {
                    name: 'Anna',
                    link: '/anna',
                    img: 'https://yt3.ggpht.com/ytc/AAUvwnhvbGx90LI0HiIffwoxKQWwFoSN1WQc4YYjK9xPrA=s176-c-k-c0x00ffffff-no-rj'
                }
            },
            
        ]
    },
    {   
        title: 'Favorite',
        courseList: [
            {
                title: 'UI/UX Design',
                lessonNumber: 20,
                time: '2h 20min',
                link: '/ui-ux-designer',
                previewImg: 'https://i.pinimg.com/564x/f1/2e/16/f12e16965f870c1d2ca94675ee2c195d.jpg',
                author: {
                    name: 'Anna',
                    link: '/anna',
                    img: 'https://yt3.ggpht.com/ytc/AAUvwnhvbGx90LI0HiIffwoxKQWwFoSN1WQc4YYjK9xPrA=s176-c-k-c0x00ffffff-no-rj'
                }
            }
        ]
    },
    {
        title: 'Complete',
        courseList: [
            {
                title: 'Frontend',
                lessonNumber: 50,
                time: '10h 20min',
                link: '/frontend',
                previewImg: 'https://i.pinimg.com/564x/fa/b6/c6/fab6c6f3dd24712d61371e2be2c2ee70.jpg',
                author: {
                    name: 'Anna',
                    link: '/anna',
                    img: 'https://yt3.ggpht.com/ytc/AAUvwnhvbGx90LI0HiIffwoxKQWwFoSN1WQc4YYjK9xPrA=s176-c-k-c0x00ffffff-no-rj'
                }
            }
        ]
    }
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
                            courseList={item.courseList} 
                            title={item.title}
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
