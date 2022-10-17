import Image from 'next/image';
import { useRouter } from "next/router";
import founderzpass from '../assets/founderzpass.png';
import founderzstand from '../assets/founderzstand.png';
import Header from './Header';



const Intro = () => {
  const router = useRouter();

  return (
    <div className='text-white' style={{ background: "linear-gradient(#000024, #0024), linear-gradient(#000024, #0024), radial-gradient(ellipse at bottom, #0000e4, #000024)"}}>
      <Header />
      <div className='flex justify-center items-center gap-9 py-14 w-full'>
        <div className="w-auto h-[500px] p-5">
          <Image src={capsule} width={442} height={442} />
        </div>
        <div>
          <p className='text-[#0000e4]'>October 10, 2022</p>
          <h2 className='font-bold text-5xl'>Founderz #123</h2>
          <div className='p-5' style={{ border: "solid", borderRadius: '2rem' ,borderImage: "linear-gradient(to bottom ,#0000e4, transparent) 1"}}>
            <div className='flex justify-between  my-4 w-[400px]'>
              <div>
                <p className='text-[#0000e4] text-sm'>Current bid</p>
                <p className=' text-4xl'>Ξ 3.45</p>
              </div>
              <div>
                <p className='text-[#0000e4] text-sm'>Action ends in</p>
                <p className=' text-4xl'>22h 44m 21s</p>
              </div>
            </div>
            <div>
              <p className='text-[#0000e4] text-sm'>PLACE BID</p>
              <div className='flex justify-between my-2'>
                <input type='text' placeholder='Insert your bid' className=' text-black rounded-2xl w-8/12' />
                <button className='rounded-2xl w-3/12 bg-green-400'>Place bid</button>
              </div>
            </div>
            <div className='my-8'>
              {['acquisitions.lilnouns.eth','acquisitions.lilnouns.eth','nounishlab.eth'].map((i) => (
                <div>
                  <div className='flex justify-between w-full my-2'>
                    <p className=''>{i}</p>
                    <p className=''>Ξ 3.45</p>
                  </div>
                  <div className='h-[1px] bg-[#0000e4] w-full' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 mx-32 mt-32 gap-10 overflow-hidden">
        <div className="w-[500px] h-[500px] p-5">
          <Image src={founderzpass} width={343.31} height={427.8} />
          <Image src={founderzstand} width={396} height={159} />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-6">
            <div className="flex gap-2">
              <button className="bg-white rounded-full p-2">
                <i className="ri-arrow-left-line bg-inherit"></i>
              </button>
              <button className="bg-white rounded-full p-2">
                <i className="ri-arrow-right-line bg-inherit"></i>
              </button>
            </div>
            <h1 className="text-gray-500 text-2xl">September 23, 2022</h1>
          </div>
          <div className="mt-5">
            <h1 className="text-7xl">Founderz Pass 01</h1>
          </div>
          <div className="flex gap-8 mt-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-gray-700"> Winning bid</h2>
              <h3 className="text-4xl">
                <i className="text-3xl ri-bar-chart-horizontal-line bg-inherit"></i>
                77.40 ETH
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-gray-700">Held by</h2>
              <div className="flex">
                <h3 className="text-3xl">0x42...c7e9</h3>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2>
              <i className="ri-cake-2-fill bg-inherit text-2xl p-2"></i>Born{" "}
              <b>August 23, 2022</b>
            </h2>
            <h3>
              <i className="ri-heart-fill bg-inherit text-2xl p-2"></i>
              🌌 Winner 🌌 <b className="text-red-600">0x47...c7e9</b>{" "}
              <i className="ri-edit-box-line bg-inherit text-gray-700"></i>
            </h3>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="bg-white text-black p-3 border rounded-3xl">
              <i className="ri-folders-fill bg-inherit p-2"></i>Bid history
            </button>
            <button className="bg-white text-black p-3 border rounded-3xl">
              <i className="ri-checkbox-circle-fill bg-inherit p-2"></i>
              Etherscan
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Intro;
