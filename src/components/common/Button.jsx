import React from 'react'

const Button = ({content, link , id}) => {
  return (
    <div>
      <a href={link} key={id}><button className='bg-white px-8 py-3 text-black font-bold rounded-3xl'>{content}</button></a>
    </div>
  )
}

export default Button
