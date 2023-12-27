import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAlert } from '../../store/logs/logSlice'
import { fetchLogsThunk, postLogsThunk } from '../../store/logs/logThunks'

export const AddLogsModal = () => {
  const { techs } = useSelector((state) => state.tech)
    const [tech, setTech] = useState('')
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)

    const dispatch = useDispatch()


    const onSubmit = () => {

      if (tech === '' || message === '') {
        dispatch(setAlert({msg: 'Please enter tech and message', type: 'danger'}))

      } else {
        const newLog = {
          message,
          tech,
          attention,
          date: new Date()
        }
        dispatch(postLogsThunk(newLog))
        dispatch(fetchLogsThunk())
        dispatch(setAlert({msg:'new Log added', type:'green'}))

        setMessage('')
        setAttention(false)
        setTech('')
      }

    }

  

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className="modal-content">
        <h4 className='center'> <i className="fa fa-suitcase"/> Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <label htmlFor={message} className='active'>Enter a log message</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select name="tech" value={tech} className='browser-default' onChange={(e) => setTech(e.target.value)} >
              <option value="">select technician</option>
              {techs.map(tech => (
                <option key={tech.id} value={tech.value}>{tech.firstName} {tech.lastName}</option>
              ))}
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