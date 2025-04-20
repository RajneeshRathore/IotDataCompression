import React from 'react'

function InfoCard() {
  return (
   <div className='bg-zinc-50 rounded-md px-4 py-5'>
    <div className='flex justify-between'>
       <h3 className='text-zinc-400'>Total Data Processed</h3>
       <div>img</div>
    </div>
    <h2 className='text-2xl font-bold mt-2'>1.17MB</h2>
   </div>
  )
}

export default InfoCard