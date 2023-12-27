import React from 'react'

export const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
        <a href="#add-log-modal" className="btn-floating btn-large teal darken-2 modal-trigger">
        <i className='fa fa-plus-circle'/>
        </a>
        <ul>
            <li>
                <a href="#tech-list-modal" className="btn-floating green modal-trigger">
                    <i className='fa fa-user'/>
                </a>
            </li>
            <li>
                <a href="#tech-modal" className="btn-floating red modal-trigger">
                    <i className='fa fa-user-plus'/>
                </a>
            </li>
        </ul>
    </div>
  )
}
