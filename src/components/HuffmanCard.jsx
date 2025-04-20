import React from 'react'

function HuffmanCard() {
  return (
    <div>
        <div className='bg-zinc-50 rounded-xl shadow-2xl mt-5 px-4 py-5 border-2 border-zinc-200'>
        <div className='flex justify-between gap-6'>
            <div>
                <h2 className='text-2xl mb-2'>Huffman Coding</h2>
                <p className='text-zinc-500'>Variable-length prefix encoding based on frequency</p>
            </div>
            <div>
                <h3 className='text-zinc-500'>Compression</h3>
                <h3 className='text-zinc-950 text-xl'>80.0%</h3>
            </div>
            <div>
                <h3 className='text-zinc-500'>Processing Time</h3>
                <h3 className='text-zinc-950 text-xl'>2.37ms</h3>
            </div>
            <div>
                <h3 className='text-zinc-500'>Best For</h3>
                <h3 className='text-zinc-950 text-xl'>Text data with repetitive patterns</h3>
            </div>
        </div>
        <input type="range" className='w-full'/>
        </div>
    </div>
  )
}

export default HuffmanCard;