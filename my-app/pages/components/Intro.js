import React from 'react';

const Intro = () => {
  return (
    <div className='bg-gray-200'>
      <nav className='flex mt-3 justify-between'>
        <div className='flex m-3 gap-5'>
          <img src={require('../assets/mazze.png')} alt='' className='w-14 h-14'/>
          <button className='border rounded-full p-3'>Treasury <i className="ri-bar-chart-horizontal-line bg-inherit"></i> 42,000</button>
        </div>
        <div className='flex gap-4'>
          <button className='border p-3 rounded-full'><i className="ri-group-fill p-3 bg-inherit"></i>DAO</button>
          <button className='border rounded-full p-3'><i className="ri-book-open-fill p-3 bg-inherit"></i>Docs</button>
          <button className='border rounded-full p-3'><i className="ri-chat-1-fill p-3 bg-inherit"></i>Conversation</button>
          <button className='border rounded-full p-3'><i className="ri-play-fill p-3 bg-inherit"></i>Capsule</button>
          <button className='border rounded-full p-3'><i className="ri-global-line text-3xl bg-inherit"></i></button>
          <button className='border rounded-full p-3'>Connect</button>
        </div>
      </nav>
      <div className='grid grid-cols-2 m-32 gap-10 overflow-hidden'>
        <div className='w-[500px] h-[500px] p-5'>
          <img src={require('../assets/NFTimage.png')} alt='front' />
        </div>
        <div className='flex flex-col'>
          <div className='flex gap-6'>
            <div className='flex gap-2'>
              <button className='bg-white rounded-full p-2'><i className="ri-arrow-left-line bg-inherit"></i></button>
              <button className='bg-white rounded-full p-2'><i className="ri-arrow-right-line bg-inherit"></i></button>
            </div>
            <h1 className='text-gray-500 text-2xl'>August 23, 2022</h1>
          </div>
          <div className='mt-5'>
            <h1 className='text-black text-7xl'>Founder 42</h1>
          </div>
          <div className='flex gap-8 mt-6'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-2xl text-gray-700'>Winning bid</h2>
              <h3 className='text-4xl'><i className="text-3xl ri-bar-chart-horizontal-line bg-inherit"></i>77.40</h3>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-2xl text-gray-700'>Held by</h2>
              <div className='flex'>
                <h3 className='text-black text-3xl'>0x42...c7e9</h3>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <h2 className='text-black'><i className="ri-cake-2-fill bg-inherit text-2xl p-2"></i>Born <b>August 23, 2022</b></h2>
            <h3><i className="ri-heart-fill bg-inherit text-2xl p-2"></i>Winner <b className='text-red-600'>0x47...c7e9</b> <i className="ri-edit-box-line bg-inherit text-gray-700"></i></h3>
          </div>
          <div className='flex gap-2 mt-4'>
            <button className='bg-white p-3 border rounded-3xl'><i className="ri-folders-fill bg-inherit p-2"></i>Bid history</button>
            <button className='bg-white p-3 border rounded-3xl'><i className="ri-checkbox-circle-fill bg-inherit p-2"></i>Etherscan</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;
