import React from 'react'
import DataCard from './DataCard';
import HuffmanCard from './HuffmanCard';
function Algorithm() {
  return (
    <div>
      <div className='flex bg-zinc-200 justify-between'>
        <div className='w-[55%] h-auto rounded-sm bg-zinc-50 px-5 py-5 m-5 shadow-2xl'>
          <h2 className='text-3xl'>Algorithm Performance</h2>
          <h3 className='text-zinc-400 text-md mt-2 font-thin'>Comparing compression efficiency & speed</h3>
          <div className='grid grid-cols-2 space-x-4'>
            <DataCard/>
            <DataCard/>
          </div>
          <HuffmanCard/>
          <HuffmanCard/>
        </div>
        <div className='w-[45%] h-auto rounded-sm bg-zinc-50 px-5 py-5  m-5 shadow-2xl'>
          <h2 className='text-2xl font-medium'><span className='text-sky-400 font-extrabold text-3xl mr-2'>{"< > "}</span> Custom Data Compression</h2>
          <h3 className='text-zinc-400 mt-2 '>Enter your own data to see how different compression algorithm perform</h3>
          <textarea cols={'45'} rows={'10'} className='bg-zinc-100 resize-none rounded-sm px-3 py-4 mt-5 outline-green-400' placeholder='Enter data to compress (text, pattern, etc.)'></textarea>
          <button className='bg-blue-300 text-white w-full py-2 rounded-sm hover:bg-blue-400 active:bg-green-600 mt-5'>Compress Data</button>
        </div>
      </div>
    </div>
  )
}

export default Algorithm;