import Header from './Header'
import { useRouter } from "next/router";

function Dao() {

  const router = useRouter();

  return (
    <div className='bg-[#F7F9FC] dark:bg-[#160744]'>
      <Header />
      <div className="m-32">
        <h2 className=' text-[#4965D8] text-2xl'>Governance</h2>
        <h1 className='text-4xl font-bold text-[#160744] dark:text-white'>Founderz DAO</h1>
        <p className='text-[#8094B7]'>Founderz govern Founderz DAO. 
          Founderz can vote on proposals or delegate 
          their vote to a third party. A minimum of 2 
          Nouns is required to submit proposals.
        </p>
        <div className='border rounded-lg p-7 my-5 flex justify-between'>
          <div className=''>
            <p className='text-2xl'>Treasury</p>
            <p className='text-3xl'>Ξ 28,597 <span>$45,497,892.00</span></p>
          </div>
          <p className='w-2/5'>This treasury exists for Founderz 
            DAO participants to allocate resources 
            for the long-term growth and prosperity of 
            the Nouns project.
          </p>
        </div>
        <div className='flex justify-between'>
          <h3 className='text-3xl'>Proposal</h3>
          <div>
            <span>Connect wallet to make a proposal.</span>
            <button className='bordered rounded-xl mx-2 bg-gray-300 p-2 text-gray-500 mb-8'>Submit proposal</button>
          </div>
        </div>
        <div>
          { [1,2,3,4,5,6].map((i) => (
              // eslint-disable-next-line react/jsx-key
              <button onClick={() => router.push("/components/Proposal", `/Dao/${i}`)} className=' bordered w-full rounded-xl p-3 my-5 flex justify-between items-center bg-gray-200'>
             {/* <button onClick={() => router.push("/")} className=' bordered w-full rounded-xl p-3 my-5 flex justify-between items-center bg-gray-200'> */}
                <div className='flex'>
                  <p className='text-gray-600 mr-2'>141</p>
                  <p className='text-black'>Nounish Friends - Stage 2</p>
                </div>
                <div className='flex'>
                  <button className='bordered rounded-xl mx-2 bg-gray-300 p-2 text-gray-500'>Start in a day</button>
                  <p className='rounded-xl bg-green-500 flex items-center content-center px-2 text-white'>Pending</p>
                </div>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Dao