import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { useDispatch } from 'react-redux'
import { deleteLogsThunk, fetchLogsThunk } from '../../store/logs/logThunks'
import { setAlert, setCurrent } from '../../store/logs/logSlice'

export const LogItems = ({log}) => {
    // const date = moment().format('MMMM Do YYYY, h:mm:ss a');
    const dispatch = useDispatch()
    const onDelete = (e) => {
        dispatch(deleteLogsThunk(log.id))
        dispatch(fetchLogsThunk())
        dispatch(setAlert({msg: 'logs deleted', type:'red'}))
    }

    // const onEdith = () => {
    //     dispatch(setCurrent(log))
    // }
  return (
    <li className='collection-item'>
        <div>
            {/* {log.attention ? (<a href="#edit-log-modal" className={`modal-trigger`} style={{color: 'red'}}>{log.message}</a>) : 
            (<a href="#edit-log-modal" style={{color: 'blue'}}>{log.message}</a>)} */}
            <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} onClick={ () => dispatch(setCurrent(log))} >{log.message}</a> {''}
            <br />
            <span className='grey-text'>
                <span className='grey-text'>ID #{log.id} Last updated by </span><span className="black-text">{log.tech}</span> on {''}
                <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
            </span>
            <a href="#!" className="secondary-content" onClick={onDelete}>
            <i className='fa fa-trash'/></a>
        </div>
    </li>
  )
}

LogItems.propTypes = {
    log: PropTypes.object.isRequired
}