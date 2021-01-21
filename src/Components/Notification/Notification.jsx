import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoBlock } from '../InfoBlock'
import './Notification.scss'
import { useHandlerPopup } from '../../CustomHooks/CustomHooks'



const Notification = ({list}) => {
    const [ref, show, handlerShow] = useHandlerPopup()
    return (
        <div ref={ref}  className='notification'>
            <button onClick={handlerShow}  className="notification__icon"><FontAwesomeIcon icon='bell' /></button>
            <div className={classNames("notification__panel", {'show': show} )}>
                 {
                    list.map((item, index)  => (
                        <InfoBlock 
                            className="notification__item"
                            key={`index--${index}`}
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            color={item.color}
                        />
                    ))
                 }
            </div>
        </div>
    )
}

export default Notification
