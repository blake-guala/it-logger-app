import React from 'react'
import { searchLogs } from '../../store/logs/logSlice'
import { useDispatch } from 'react-redux'

export const Search = () => {
  const dispatch = useDispatch()
  const onChange = (e) => {
    dispatch(searchLogs(e.target.value))
    console.log(e.target.value);
  }
  return (
    <nav style={{ marginBottom: '1.875rem' , backgroundColor:'teal' }}>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" onChange={onChange} placeholder='Search for logs...' />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}
