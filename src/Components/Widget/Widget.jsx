import React from 'react'
import PropTypes from 'prop-types'
import { InfoBlock } from '../InfoBlock'
import  './Widget.scss'

const Widget = ({title, data}) => {
    return (
        <div className='widget'>
            <p className="widget__title">{title}</p>
            <div className="widget__content">
                {
                    data.map((item, index) => (
                        <InfoBlock  
                            key={index}
                            title={item.title} 
                            subtitle={item.subtitle} 
                            color={item.color}
                            link={item.link} 
                            icon={item.icon}
                            utility={item.value}
                        />
                    ))
                }
            </div>
        </div>
    )
}

Widget.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object)
}

export default Widget
