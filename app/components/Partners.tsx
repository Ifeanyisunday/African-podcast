import React from 'react'

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-2xl font-bold text-center mb-12">Our Global Partners</h2>
      
    <div className="flex flex-wrap justify-center gap-12 px-4">
        <img src="/worldbank.png" alt="World Bank" className="w-40 h-20 object-contain" />
        <img src="/nieman.png" alt="Nieman" className="w-40 h-20 object-contain" />
        <img src="/nedbank.png" alt="Nedbank" className="w-40 h-20 object-contain" />
        <img src="/fledge.png" alt="Fledge" className="w-40 h-20 object-contain" />
    </div>
    
    <div className="flex flex-wrap justify-center gap-12 px-4 mt-10">
        <img src="/pan-african.png" alt="Pan African" className="w-40 h-20 object-contain" />
        <img src="/business.png" alt="Business" className="w-40 h-20 object-contain" />
        <img src="/lagos.png" alt="Lagos" className="w-40 h-20 object-contain" />
        <img src="/africa.png" alt="Africa" className="w-40 h-20 object-contain" />
        <img src="/mic.png" alt="Mic" className="w-40 h-20 object-contain" />
      </div>

      <div className="flex flex-wrap justify-center gap-12 px-4 mt-10">
        <img src="/embassy.png" alt="Pan African" className="w-40 h-20 object-contain" />
        <img src="/workspace.png" alt="Business" className="w-40 h-20 object-contain" />
        <img src="/circle.png" alt="Lagos" className="w-40 h-20 object-contain" />
        <img src="/south.png" alt="Africa" className="w-40 h-20 object-contain" />
        <img src="/absa.png" alt="Mic" className="w-40 h-20 object-contain" />
        <img src="/sapna.png" alt="Mic" className="w-40 h-20 object-contain" />
      </div>
    </section>
  )
}

export default Partners