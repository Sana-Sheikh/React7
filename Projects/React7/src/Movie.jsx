import React from 'react'

function Movie(props) {
    const {title,url} = props
  return (
    <div>
        <div className='movie'>
            <img src={url}  alt='movi'/>
          
        </div>
        <h4 className='title'>{title}</h4>
      </div>
  )
}

export default Movie