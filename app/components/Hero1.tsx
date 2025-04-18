import React from 'react'
import Link from 'next/link';


const Hero1 = () => {

  const items = [
    {
      id: 1,
      img: "/Group 1084.png",
      text: "Latest News",
    },
    {
      id: 2,
      img: "/Group 1083.png",
      text: "New Episodes",
      link: "/categorypage"
    },
    {
      id: 3,
      img: "/Group 1469.png",
      text: "Our services",
    },
    {
      id: 4,
      img: "/Group 910.png",
      text: "All Podcasts",
      link: "/categorypage"
    },
  ];

  return (
    <div className='flex'>
        <div className=''>
          <img src="/Group 974.png" alt="App Logo" className="h-20 w-auto"/>
        </div>

        <div className='bg-black w-300 h-20 flex gap-15'>
            {items.map((item, index) => {
              const content = (
              <div key={index} className="text-center flex space-x-3 ml-10">
                <img src={item.img} alt={item.text} className="mt-8 w-5 h-5" />
                <p className="text-sm text-white mt-8">{item.text}</p>
              </div>
              )

              return item.link ? (
                <Link href={item.link} key={item.id}>
                  {content}
                </Link>
              ) : (
                <div key={item.id}>{content}</div>
              );

            })}
        </div>
    </div>
  )
}

export default Hero1