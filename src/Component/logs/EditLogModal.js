import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAlert } from '../../store/logs/logSlice'
import { editLogsThunk, fetchLogsThunk } from '../../store/logs/logThunks'

export const EdiLogModal = () => {
    const [message, setMessage] = useState('')
    const [tech, setTech] = useState('')
    const [attention, setAttention] = useState(false)

    const {current} = useSelector((state) => state.log)
    const {techs} = useSelector((state) => state.tech)

    const dispatch = useDispatch()

    useEffect(() => {
      if (current) {
        setAttention(current.attention)
        setMessage(current.message)
        setTech(current.tech)
      }
    },[current])


    const onSubmit = () => {

      if (tech === '' || message === '') {
        dispatch(setAlert({msg: 'Please enter tech and message', type: 'light'}))

      } else {
        console.log(message, attention, tech);
        const updateLog = {
          id: current.id,
          message,
          tech,
          attention
        }
        dispatch(editLogsThunk(updateLog))
        dispatch(fetchLogsThunk())

        setMessage('')
        setAttention(false)
        setTech('')
      }

    }

  

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className="modal-content">
        <h4 className='center'> <i className="fa fa-suitcase"/> Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <label htmlFor={message} className='active'>Log message</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select name="tech" value={tech}  className='browser-default' onChange={(e) => setTech(e.target.value)} >
              <option value="">select technician</option>
              {techs.map(tech => <option value={tech.value} key={tech.id} > {tech.firstName} {tech.lastName} </option>)}
              
            </select>
          </div>

          <div className="row">
            <div className="input-field">
              <p>
                <label>
                  <input type='checkbox' className='filled-in' checked={attention} value={attention} onChange={() => setAttention(!attention)}/>
                  <span>Needs attention</span>
                </label>
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" onClick={onSubmit}  className='modal-close waves-effect waves-green btn'>Enter</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '65%',
  height: '60%'
}