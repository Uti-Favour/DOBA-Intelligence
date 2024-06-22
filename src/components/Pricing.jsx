import React from 'react'
import { useState } from 'react'
import { pricinglists } from '../constant'



const PriceCard = ({category , pricing , description , lists}) =>{
return (
    <div className='border border-gray-400 rounded-3xl p-10 space-y-6 mt-20'>
<span className='text-xl font-semibold'>{category}</span>
<p className='text-gray-700'>{description}</p>
<h1 className='text-3xl font-bold'>{pricing}<span className='text-base text-gray-700 font-normal'>/month</span></h1>
<a href="#"><button>Buy Plan</button></a>
<ul>
    <li>{[lists]}</li>
</ul>

</div>
)
}


const Pricing = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mx-20'>
      {pricinglists.map (price => (
        <PriceCard
        category={price.category}
        description={price.description}
        pricing={price.pricing}
        lists={price.lists}
        
        />
      ))}
    </div>
  )
}

export default Pricing
