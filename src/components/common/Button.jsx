import React from 'react'

const Button = ({content, link , id , icon}) => {
  return (
    <div>
      <a href={link} key={id}><button className='bg-blue-400 lg:px-8 px-24 lg:py-3 py-4 text-white font-bold rounded-3xl'>{content} <i className={icon}></i></button></a>
    </div>
  )
}

export default Button
