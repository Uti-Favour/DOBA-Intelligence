import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({content, link , id , icon}) => {
  return (
    <div>
      <Link to={link} key={id}><button className='bg-blue-800 lg:px-8 px-24 lg:py-3 py-4 text-white font-bold rounded-3xl'>{content} <i className={icon}></i></button></Link>
    </div>
  )
}

export default Button
