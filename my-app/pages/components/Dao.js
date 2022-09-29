import Header from './Header'

function Dao() {
  return (
    <>
      <Header />
      <div className="m-32">
        <h2>Governance</h2>
        <h1>Founderz DAO</h1>
        <p>Founderz govern Founderz DAO. 
          Founderz can vote on proposals or delegate 
          their vote to a third party. A minimum of 2 
          Nouns is required to submit proposals.
        </p>
        <div className='border rounded-lg p-7 my-5 flex justify-between'>
          <div className=''>
            <p>Treasury</p>
            <p>Ξ 28,597 <span>$45,497,892.00</span></p>
          </div>
          <p>This treasury exists for Founderz 
            DAO participants to allocate resources 
            for the long-term growth and prosperity of 
            the Nouns project.
          </p>
        </div>
        <div className='flex justify-between'>
          <h3>Proposal</h3>
          <div>
            <span>Connect wallet to make a proposal.</span>
            <button className='bordered rounded-xl mx-2 bg-gray-300 p-2 text-gray-500 mb-8'>Submit proposal</button>
          </div>
        </div>
        <div>
          { [1,2,3,4,5,6].map((i) => (
              // eslint-disable-next-line react/jsx-key
              <div className=' bordered rounded-xl p-3 my-5 flex justify-between items-center bg-gray-200'>
                <div className='flex'>
                  <p className='text-gray-600 mr-2'>141</p>
                  <p className='text-black'>Nounish Friends - Stage 2</p>
                </div>
                <div className='flex'>
                  <button className='bordered rounded-xl mx-2 bg-gray-300 p-2 text-gray-500'>Start in a day</button>
                  <p className='rounded-xl bg-green-500 flex items-center content-center px-2 text-white'>Pending</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Dao