/* eslint-disable react/jsx-key */
import Header from './Header'

function Proposal() {
  return (
    <>
      <Header />
      <div className="mx-32 my-20">
        <div className='mb-5'>
          <div className='flex'>
            <h2 className=' text-gray-500 text-2xl mr-2'>Proposal 148</h2>
            <p className='rounded-lg bg-green-500 flex items-center content-center px-3 text-white'>Pending</p>
          </div>
          <div className='flex justify-between w-full my-2'>
            <h2 className='text-4xl w-2/5 font-bold'>FouderZ Community Compensation</h2>
          </div>
          <p className=' text-gray-500 text-xl'>Proposed by <span className='text-red-600'>test.eth</span> at <span className='text-red-600'>0x00000</span></p>
        </div>
        <div>
          <button className='text-gray-400'>Switch to delegate view</button>
          <div className='flex justify-between'>

            <div className='border rounded-lg p-6 w-4/12 mx-4 bg-gray-100'>
              <div className='flex justify-between'>
                <h2 className='font-bold text-green-400'>For</h2>
                <p>0</p>
              </div>
              <div className="w-full bg-green-100 rounded-md h-4 mb-4 dark:bg-green-100">
                <div className="bg-green-400 h-4 rounded-md dark:bg-green-400 w-1/12" />
              </div>
              <div className='grid grid-cols-5 gap-2'>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i) => (
                  <div className='p-5 rounded-full bg-gray-200' />
                ))}
              </div>
            </div>
            
            <div className='border rounded-lg p-6 w-4/12 mx-4 bg-gray-100'>
              <div className='flex justify-between'>
                <h2 className='font-bold text-red-400'>Against</h2>
                <p>0</p>
              </div>
              <div className="w-full bg-red-100 rounded-md h-4 mb-4 dark:bg-red-100">
                <div className="bg-red-400 h-4 rounded-md dark:bg-red-400 w-2/12" />
              </div>
              <div className='grid grid-cols-5 gap-2'>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i) => (
                  <div className='p-5 rounded-full bg-gray-200' />
                ))}
              </div>
            </div>

            <div className='border rounded-lg p-6 w-4/12 mx-4 bg-gray-100'>
              <div className='flex justify-between'>
                <h2 className='font-bold text-grey-400'>Abstain</h2>
                <p>0</p>
              </div>
              <div className="w-full bg-gray-200 rounded-md h-4 mb-4 dark:bg-gray-200">
                <div className="bg-gray-400 h-4 rounded-md dark:bg-gray-400 w-2/12" />
              </div>
              <div className='grid grid-cols-5 gap-2'>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i) => (
                  <div className='p-5 rounded-full bg-gray-200' />
                ))}
              </div>
            </div>

          </div>
          <div className='flex justify-between mt-5 mb-9'>
            <div className='flex justify-between border rounded-lg p-6 w-4/12 mx-4 '>
              <h3>Threshold</h3>
              <div className='text-right'>
                <p>Quorum</p>
                <p>34 votes</p>
              </div>
            </div>

            <div className='flex justify-between border rounded-lg p-6 w-4/12 mx-4 '>
              <h3>Threshold</h3>
              <div className='text-right'>
                <p>Quorum</p>
                <p>34 votes</p>
              </div>
            </div>

            <div className='flex justify-between border rounded-lg p-6 w-4/12 mx-4 '>
              <h3>Threshold</h3>
              <div className='text-right'>
                <p>Quorum</p>
                <p>34 votes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Proposal