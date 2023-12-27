import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAlert } from '../../store/logs/logSlice'

export const Alert = () => {
    const { alert }  = useSelector((state) => state.log)
    const dispatch = useDispatch()

    if (alert !== null) {
        setTimeout(() => {
            dispatch(removeAlert())
        }, 2000);
    }
  return (
    <div className='container'>
            {alert !== null && (<div className={`alert right alert-${alert.type}`}>
                <i className='fas fa-exclamation-circle'></i> {alert.msg}
            </div>)}
    </div>
  )
}
