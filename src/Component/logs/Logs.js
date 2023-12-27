import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogsThunk } from '../../store/logs/logThunks'
import Loader from '../loader.gif'
import { LogItems } from './LogItems'

export const Logs = () => {
    const {loading, logs} = useSelector((state) => state.log)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchLogsThunk())
         // eslint-disable-next-line
    },[])

    if (loading) {
        return <img src={Loader} alt='loading...' style={{ width: '30rem' , margin: 'auto', display: 'block', backgroundColor: 'black'}}/>
    }


  return (
        <ul className='collection with-header container'>
            <li className='collection-header'>
                <h4 className='center'><i className='fas fa-tools'/> <i className='fa fa-cogs'/> <i className='fas fa-hammer'></i> System logs </h4>
            </li>
            {logs.length === 0 ? (<p className='center'>No logs available, you can add a log.</p>) : logs.map(log => (
                <LogItems log={log} key={log.id}/>
            ))}
        </ul>
  )
}
