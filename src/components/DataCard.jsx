import React from 'react'

function DataCard() {
    return (
        <div>
            <div className='bg-indigo-100  rounded-xl mt-5 px-5 py-5 '>
                <div className='flex gap-2 '>
                    <div>img</div>
                    <div><h3 className='text-blue-400'>Most Efficient</h3>
                    <h2 className='text-xl font-bold'>Delta Encoding</h2>
                    <h4>89.6% reduction</h4></div>
                </div>
            </div>
        </div>
    )
}

export default DataCard;