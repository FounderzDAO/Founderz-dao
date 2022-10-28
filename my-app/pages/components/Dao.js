import Header from './Header'
import { Contract, providers } from "ethers";
import { formatEther } from "ethers/lib/utils";
// import {
//   DAO_Executor_CONTRACT_ADDRESS,
//   // (abis also)
//   Founderz_DAO_Logic_CONTRACT_ADDRESS,
// } from "../constants";
import { useRouter } from "next/router";
import Footer from './Footer';

function Dao() {

  const router = useRouter();

  return (
    <div className='bg-[#F7F9FC] dark:bg-[#160744]'>
      <Header />
      <div className="mx-36 mt-24">
        <h2 className=' text-[#4965D8] text-xl'>Governance</h2>
        <h1 className='text-5xl my-4 font-bold text-[#160744] dark:text-white'>Founderz DAO</h1>
        <p className='text-[#8094B7] text-xl'>Founderz govern <b>Founderz DAO</b>. 
          Founderz can vote on proposals or delegate 
          their vote to a third party. A minimum of <b>2 
          Founderz</b> is required to submit proposals.
        </p>
        <div className='border border-[#4965D8] rounded-2xl p-7 my-5 flex justify-between'>
          <div className=''>
            <p className='text-2xl font-bold text-[#8094B7]'>Treasury</p>
            <p className='text-4xl'><span className='text-[#4965D8] font-bold'>Ξ 28,597 </span><span className='text-[#8094B7]'>$45,497,892.00</span></p>
          </div>
          <p className='w-2/5'>This treasury exists for Founderz 
            DAO participants to allocate resources 
            for the long-term growth and prosperity of 
            the Nouns project.
          </p>
        </div>
        <div className='rounded-2xl bg-white dark:bg-[#17055E] flex items-center justify-between p-5 mb-11'>
          <div className=''>
            <p className='text-[#160744] dark:text-white font-bold text-2xl'>Lorem ipsum dolor sit amet</p>
            <p className='text-[#8094B7]'>You will be able to discuss all the ideas proposed by users.</p>
          </div>
          <button className='text-[#4965D8] flex items-center gap-1 underline underline-offset-2'>
            Discover our forum <img src="img/icon-arrow-R.svg" className='h-6' />
          </button>
        </div>

        <div className='flex justify-between'>
          <h3 className='text-3xl'>Proposal</h3>
          <div>
            <span className='text-[#8094B7]'>Connect wallet to make a proposal.</span>
            <button className='bordered border-[#8094B7] rounded-xl mx-2 bg-[#8094B766] p-2 text-[#8094B7] mb-8'>Submit proposal</button>
          </div>
        </div>
        <div className='my-20'>
          { [1,2,3,4,5,6].map((i) => (
              // eslint-disable-next-line react/jsx-key
              <button onClick={() => router.push("/components/Proposal", `/Dao/${i}`)} className=' bordered w-full rounded-xl p-3 my-5 flex justify-between items-center border-[#8094B7] bg-[#8094B71A]'>
             {/* <button onClick={() => router.push("/")} className=' bordered w-full rounded-xl p-3 my-5 flex justify-between items-center bg-gray-200'> */}
                <div className='flex'>
                  <p className='text-[#8094B7] mr-2'>141</p>
                  <p className='text-[#160744]'>Nounish Friends - Stage 2</p>
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

      <Footer />
    </div>
  )
}

export default Dao