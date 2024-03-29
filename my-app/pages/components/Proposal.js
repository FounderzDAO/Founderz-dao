/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import Header from './Header'
import { useRouter } from "next/router";

function Proposal() {
  const router = useRouter();

  return (
    <div className=' bg-[#F7F9FC] dark:bg-[#160744]'>
      <Header />
      <div className="w-10/12 mx-auto mt-20">
        <div className='mb-5'>
          <button className='flex items-center gap-1 mb-4' onClick={ () => router.push("/components/Dao", "/Dao")}>
            <img src="img/icon-arrow-L.svg" className='h-6' />
            <h2 className=' text-[#4965D8] text-sm mr-2'>Proposal 142</h2>
          </button>
          <div className='md:flex gap-3 w-full my-2'>
            <button className="rounded-3xl text-sm w-fit flex items-center py-2 px-3 dark:text-black bg-[#1BEDA4]">
              Active
            </button>
            <h2 className='text-4xl  font-bold'>Mucho Love 4 Month Extension</h2>
          </div>
          <p className=' text-[#8094B7] text-xl'>Proposed by <span className='text-[#4965D8] underline'>test.eth</span> at <span className='text-[#4965D8] underline'>0x00000</span></p>
        </div>
        <div className='lg:flex gap-4 w-full'>
          
          <div className='lg:w-8/12'>

            <div className='border md:flex justify-between border-[#5DD9C1] my-6 rounded-3xl py-6 px-3 sm:px-6  mx-4 bg-[#5DD9C117] dark:bg-[#5DD9C138]'>
              <div className='md:w-5/12 flex flex-col justify-between'>
                <div className='flex justify-between'>
                  <h2 className='font-bold text-[#5DD9C1]'>For</h2>
                  <p>1</p>
                </div>
                <div className="w-full bg-[#BAF2E8] border-[#5DD9C1] rounded-md h-4 mb-4 dark:bg-[#BAF2E8] ">
                  <div className="bg-[#5DD9C1] h-4 rounded-md dark:bg-[#5DD9C1] w-6/12" />
                </div>
              </div>
              <div className='grid grid-cols-6 md:w-6/12 gap-3 mr-1'>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                  <div className='h-8 sm:h-11 w-8 sm:w-11 border border-[#5DD9C1] rounded-full bg-[#FFFFFF]' />
                ))}
              </div>
            </div>
            
            <div className='border md:flex justify-between border-[#EF6F6C] my-6 rounded-3xl py-6 px-3 sm:px-6 mx-4 bg-[#EF6F6C17] dark:bg-[#EF6F6C38]'>
              <div className='md:w-5/12 flex flex-col justify-between'>
                <div className='flex justify-between'>
                  <h2 className='font-bold text-[#EF6F6C]'>For</h2>
                  <p>9</p>
                </div>
                <div className="w-full bg-[#EF6F6C17]  border-[#EF6F6C] rounded-md h-4 mb-4 dark:bg-[#F8B6B5]">
                  <div className="bg-[#EF6F6C] h-4 rounded-md dark:bg-[#EF6F6C] w-3/12" />
                </div>
              </div>
              <div className='grid grid-cols-6 md:w-6/12 gap-3 mr-1'>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                  <div className='h-8 sm:h-11 w-8 sm:w-11 border border-[#EF6F6C] rounded-full bg-[#FFFFFF]' />
                ))}
              </div>
            </div>

            <div className='border md:flex justify-between border-[#C1C1C1] my-6 rounded-3xl py-6 px-3 sm:px-6 mx-4 bg-[#C1C1C117] dark:bg-[#C1C1C159]'>
              <div className='md:w-5/12 flex flex-col justify-between'>
                <div className='flex justify-between'>
                  <h2 className='font-bold text-[#C1C1C1]'>For</h2>
                  <p>1</p>
                </div>
                <div className="w-full bg-[#C1C1C117] border-[#C1C1C1] rounded-md h-4 mb-4 dark:bg-[#E5DEDE]">
                  <div className="bg-[#C1C1C1] h-4 rounded-md dark:bg-[#C1C1C1] w-1/12" />
                </div>
              </div>
              <div className='grid grid-cols-6 md:w-6/12 gap-3 mr-1'>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                  <div className='h-8 sm:h-11 w-8 sm:w-11 border border-[#C1C1C1] rounded-full bg-[#FFFFFF]' />
                ))}
              </div>
            </div>
          </div>





          <div className='h-auto flex flex-col justify-between my-6 mx-4 border lg:w-3/12 rounded-2xl bg-[#FFFFFF] dark:bg-[#17055E] dark:border-[#4965D8]'>

            <div className=' h-4/12 py-6 mx-4 '>
              <div className='flex justify-between w-full'>
                <p className='text-[#8094B7] dark:text-[#4965D8] font-bold'>Threshold</p>
                <p className='text-xs font-[200]'>Quorum</p>
              </div>
              <p className='text-right'>56 votes</p>
            </div>

            <hr className='dark:border-[#4965D8]'/>

            <div className=' h-4/12 py-6 mx-4 '>
              <div className='flex justify-between w-full'>
                <p className='text-[#8094B7] dark:text-[#4965D8] font-bold'>Starts</p>
                <p className='text-xs font-[200]'>7:34 PM GMT+2</p>
              </div>
              <p className='text-right'>November 1, 2022</p>
            </div>

            <hr className='dark:border-[#4965D8]'/>

            <div className=' h-4/12 py-6 mx-4 '>
              <div className='flex justify-between w-full'>
                <p className='text-[#8094B7] dark:text-[#4965D8] font-bold'>Snapshot</p>
                <p className='text-xs font-[200]'>Taken at block</p>
              </div>
              <p className='text-right'>15749103</p>
            </div>
          </div>
        </div>

        <div className='mt-24'>
          <h3 className='text-[#4965D8] font-bold text-3xl my-5'>Description</h3>
          <p className='font-[300]'>
          This is a revised version of the Agora continuation prop based on community feedback. 
          We've clarified our deliverables, increased transparency, reduced the ask by 20%, and implemented a payment stream. 

          <br/>
          <br />
          We’d like to seek funding to keep developing Agora in order to improve the governance efficacy of Nouns through delegation. 
          Our goal is to significantly increase the participation rate of nouns through a combination of software improvements, 
          and delegation drive programs over the next quarter.
          </p>

          <h4 className='my-7'>Progress so far</h4>
          <p className='font-[300]'>
            We got funded on August 31 via Prop House mandates to build an MVP. In less than one month, 
            we’ve built a delegate platform for voters to broadcast what they want to see, 
            and for builders to find voters who might support their proposal. To illustrate the outcome with some numbers, 
            so far we’ve seen:
          </p>
        </div>
      </div>
    </div>
  )
}

export default Proposal