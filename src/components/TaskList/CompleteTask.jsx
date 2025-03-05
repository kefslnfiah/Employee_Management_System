import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-xl'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <h1 className='mt-3 text-xl font-semibold'>UI/UX Team</h1>
            <p className='text-sm mt-2'>
            {data.taskDescription}
            </p>
            <div>
                <button className='bg-green-500 py-1 w-full text-sm mt-4'>Complete</button>
            </div>
        </div>
    )
}

export default CompleteTask