import React from 'react'

const Listen = () => {
  return (
    <>
        <div className='bg-pink-100 flex items-center w-420 h-120 ml-25'>
            <div className='ml-60 w-200'>
                <h1 className='font-bold text-3xl'>Never Stop Listening!</h1>
                <h1 className=''>Every episode is a journey <br />
                you dont wanna miss out on.
                </h1>
                <p className='mt-6'>Get the latest headlines and unique ABR stories, sent every<br />
                weekday
                </p>
                <div className='flex '>
                    <input className='bg-gray-300 w-80 h-10' type="email" placeholder='Enter your email'/>
                    <button className='bg-red-600 w-30'>Get me in</button>
                </div>
            </div>
            <div className='scale-40 ml-20'>
            <img src="Group 1.png" className="scale-150"/>
            </div>
        </div>
    </>
  )
}

export default Listen