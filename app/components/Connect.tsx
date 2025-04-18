import React from 'react'

const Connect = () => {
  return (
    <div className='bg-black p-10'>
        <div>
            <img src="TopLogo.svg" alt="App Logo" className="mt-5"/>
        </div>

        <div className="flex flex-wrap gap-6 mt-4">
            <div className='flex flex-wrap gap-6 mt-5'>
            <div className="text-center text-white">HOME</div>
            <div className="text-center text-white">|</div>
            <div className="text-center text-white">ABOUT US</div>
            <div className="text-center text-white">|</div>
            <div className="text-center text-white">CONTACT US</div>
            <div className="text-center text-white">|</div>
            <div className="text-center text-white">ALL PODCAST</div>
            <div className="text-center text-white">|</div>
            <div className="text-center text-white">ADVERTISE</div>
            <div className="text-center text-white">|</div>
            <div className="text-center text-white">RESOURCES</div>
            <div className="text-center text-white">|</div>
            <div className="text-center text-white">CONNECT WITH ABR</div>
        </div>
            <div className="flex flex-wrap gap-6">
                <img src="insta.png" alt="App Logo" className="mt-5"/>
                <img src="fb.png" alt="App Logo" className="mt-5"/>
                <img src="twitter.png" alt="App Logo" className="mt-5"/>
                <img src="love.png" alt="App Logo" className="mt-5"/>
                <img src="linkden.png" alt="App Logo" className="mt-5"/>
            </div>
        </div>

        <div className="flex flex-wrap gap-6 mt-3">
            <div className="text-center text-white">@Copyright 2021 All Rights Reserved</div>
            <div className="text-center text-white">Terms $ conditions</div>
            <div className="text-center text-white">Private polic</div>
        </div>

    </div>
  )
}

export default Connect