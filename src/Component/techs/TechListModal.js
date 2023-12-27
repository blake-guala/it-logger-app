import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Loader from '../loader.gif'
import { TechItem } from './TechItem'
import { fetchTechsThunk } from '../../store/techs/techThunk'

export const TechListModal = () => {
    const {loading, techs} = useSelector((state) => state.tech)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTechsThunk())
         // eslint-disable-next-line
    },[])

    // if (loading) {
    //     return <img src={Loader} alt='loading...' style={{ width: '30rem' , margin: 'auto', display: 'block', backgroundColor: 'black'}}/>
    // }


  return (
    <div id='tech-list-modal' className='modal'>
        <div className='modal-content'>
                <h4 className='center'><span className="material-icons">engineering</span>Technician List </h4>
                <ul className='collection'>
                  {!loading && techs.map(tech => (
                    <TechItem tech={tech} key={tech.id}/>
                  ))}
                </ul>

        </div>
      </div>
  )
}
