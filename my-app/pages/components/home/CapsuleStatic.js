/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import founderzpass from '../../assets/founderzpass.png';

export default function CapsuleStatic() {
  return (
    <div className="bg-[#F7F9FC] dark:bg-[#160744]">

      <div className="flex flex-col lg:flex-row justify-center  lg:gap-24 items-center w-full py-32">
        <div className="flex justify-center w-8/12 lg:w-4/12 lg:order-2"  >
          {/* <Image className="rotate-[-90deg]" src={founderzpass} /> */}
          <img className="z-20 h-[370px] lg:h-[430px] rotate-[-90deg]" src='/img/founderzpass.png' />
          <img className="z-10 h-[370px] lg:h-[430px] mt-[-33px] ml-[-250px] lg:ml-[-300px] rotate-[-83deg]" src='/img/founderzpass.png' />
          <img className=" h-[370px] lg:h-[430px] mt-[-60px] ml-[-250px] lg:ml-[-300px] rotate-[-78deg]" src='/img/founderzpass.png' />
        </div>
        <div className="w-8/12 lg:w-4/12 lg:order-1">
          <p className="text-4xl"><span className="text-[#4965D8] font-bold ">Customize your Founderz Pass in the <i>Capsule</i></span>  and join the first decentralized Web3 Startup Studio </p>
          <button className='rounded-xl my-10 text-black text-xs flex items-center w-fit px-3 py-2 bg-[#1BEDA4]'>ENTER THE CAPSULE <img className='h-5 ml-1' src='img/icon-arrow.svg' /></button>
        </div>
      </div>


      <div className='w-full h-px bg-gradient-to-r from-[#16074401]  via-[#4966d860] to-[#16074401] dark:from-[#160744]  dark:via-[#4965D8] dark:to-[#160744]' />

      <div className="flex flex-col items-center relative overflow-hidden">
        <img src="img/shape-background-7.png" className=" hidden lg:block absolute -left-4 top-7 animate-bounce" />
        <img src="img/shape-background-6.png" className=" hidden lg:block absolute right-24 top-36 animate-bounce" />
        <img src="img/shape-background-3.png" className=" hidden lg:block absolute -right-4 top-2/4 animate-bounce" />
        <img src="img/shape-background-4.png" className=" hidden lg:block absolute left-36 top-2/3 animate-bounce" />
        <img src="img/shape-background-2.png" className=" hidden lg:block absolute left-16 bottom-16 animate-bounce" />
        <img src="img/shape-background-1.png" className=" hidden lg:block absolute right-16 -bottom-14 animate-bounce" />


        <div className="w-5/12 text-center my-6">
          <h2 className="text-[#160744] dark:text-white text-3xl my-2">WTF is <i className="font-bold">FounderzDAO?</i></h2>
          <p className="text-[#8094B7] text-xs">Founderz are an adjacent creation inspired by Nouns DAO, with a focus on creating a community of web3 builders, creators and doers.</p>
        </div>
        <div className="flex flex-col items-center my-7 w-10/12 lg:w-7/12 gap-y-24">
          <div className="flex flex-col lg:flex-row lg:justify-between w-full  items-center ">
            <img className="lg:order-2 w-[300px]" src='/img/1-Cyberpunk.png' />
            <div className=" lg:w-6/12 w-10/12">
              <h3 className="text-[#4965D8] text-xl font-bold">Daily Mint</h3>
              <p className="text-[#8094B7]">Funds generated from the daily auctions flow into the treasury pool managed by the Founderz Members.</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between w-full items-center ">
            <img className="order-1  w-[300px]" src='/img/22-High-Tech.png' />
            <div className="order-2 lg:w-6/12 w-10/12">
              <h3 className="text-[#4965D8] text-xl font-bold">Web3 Startups</h3>
              <p className="text-[#8094B7]">Treasury pool funds are used to finance the creation of web3 startups through Founderz proposals.</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between w-full items-center ">
            <img className="lg:order-2  w-[300px]" src='/img/21-Cyberspace.png' />
            <div className=" lg:w-6/12 w-10/12">
              <h3 className="text-[#4965D8] text-xl font-bold">Community Bounties</h3>
              <p className="text-[#8094B7]">Founderz web3 Startups can be developed by our community using web3 bounties.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
