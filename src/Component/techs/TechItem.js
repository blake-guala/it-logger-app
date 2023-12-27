import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteTechThunk, fetchTechsThunk } from '../../store/techs/techThunk'

export const TechItem = ({ tech }) => {
  const dispatch = useDispatch()

  const onDelete = () => {
    dispatch(deleteTechThunk(tech.id))
    dispatch(fetchTechsThunk())
  }

  return (
    <li className='collection-item'>
        <div className='collection-item'><i className='	fas fa-hard-hat'/>
            {tech.firstName} {tech.lastName}
            <a href="#!" className='secondary-content' onClick={onDelete}>
                <i className='fa fa-trash'/>
            </a>
        </div>
    </li>
  )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired
}