import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';


export function useHandlerPopup(){
    const [show, setShow] = useState(false)
    const ref = useRef()

    const handleroutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if(!path.includes(ref.current)){
            setShow(false)
        }
    }
    const handlerShow = () => {
        setShow(!show)
    }
    useEffect(() => {
        document.body.addEventListener('click', handleroutsideClick)
        return function cleanup(){
            document.body.removeEventListener('click', handleroutsideClick)
        }
    }, [])

    return [ref, show, handlerShow]
}

export function useMatchHash( {hash}){
    const location = useLocation();
        if(location.hash === hash){
            return true
        }else{
            return false
        }

}