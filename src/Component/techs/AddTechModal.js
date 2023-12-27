import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setAlert } from '../../store/logs/logSlice'
import { fetchTechsThunk, postTechThunk } from '../../store/techs/techThunk'

export const AddTechModal = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const dispatch = useDispatch()


    const onSubmit = () => {

      if (lastName === '' || firstName === '') {
        dispatch(setAlert({msg: 'Please enter the first and last name', type: 'light'}))

      } else {
        const addTech = {
          firstName,
          lastName
        }

        dispatch(postTechThunk(addTech))
        dispatch(fetchTechsThunk())
        dispatch(setAlert({msg: 'New Technician added', type: 'light'}))

        setFirstName('')
        setLastName('')
      }

    }

  

  return (
    <div id='tech-modal' className='modal'>
      <div className="modal-content">
        <h4 className='center'> <i className="fas fa-hard-hat"/> <span className="material-icons">engineering</span> New Technician</h4>
        <div className="row">
          
          <div className="input-field">
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
            <label htmlFor={firstName} className='active'>First Name</label>
          </div>
          <div className="input-field">
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}  />
            <label htmlFor={lastName} className='active'>last Name</label>
          </div>
        </div>

        <div className="row">
          <div className="modal-footer">
            <a href="#!" onClick={onSubmit}  className='modal-close waves-effect waves-green btn'>Enter</a>
          </div>
        </div>
      </div>
    </div>
  )
}

