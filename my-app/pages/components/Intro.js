/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Contract, providers, utils } from "ethers";
import { formatEther } from "ethers/lib/utils";
import {
  Founderz_NFT_CONTRACT_ADDRESS,
  Founderz_NFT_ABI,
  Auction_House_ABI,
  Auction_House_CONTRACT_ADDRESS,
} from "/my-app/constants.js";
import Carousel from 'react-material-ui-carousel';
import founderzpass from '../assets/founderzpass.png';
import founderzstand from '../assets/founderzstand.png';
import Header from './Header';


const Intro = () => {
  // To be used list //
  // const FounderzNftContract = new Contract(Founderz_NFT_CONTRACT_ADDRESS, Founderz_NFT_ABI);
  const router = useRouter();

  const nfts = [
    {
      id: 1,
      name: "card1",
      img: 'img/founderzpass.png',
    },
    {
      id: 2,
      name: "card2",
      img: 'img/founderzpass.png',
    },
  ]

 // CreateAuction // 
const CreateAuction = async () => {
    const AuctionHouseContract = new Contract(Auction_House_CONTRACT_ADDRESS, Auction_House_ABI);
    // call from the contract to create auction
    const tx = await AuctionHouseContract._createAuction();
    const auctionCreated = await AuctionHouseContract.AuctionCreated();
    auctionCreated.on("data", (event) => {
      console.log(event);
    });
  };

// const CreateBid = async () => {
//   try {
//     // We need a Signer here since this is a 'write' transaction.
//     const signer = await getProviderOrSigner(true);
//     // Create a new instance of the Contract with a Signer, which allows
//     // update methods
//     const AuctionHouseContract = new Contract(
//       Auction_House_CONTRACT_ADDRESS,
//       Auction_House_ABI,
//       signer
//     );
//     // call from the contract to create bid
//     const tx = await AuctionHouseContract.createBid({
//       // Mint Price in ETH mininum to create bid, but this instance needs AuctionCreated: This is 3rd step //
//       value: utils.parseEther("1"),
//     });
//     setLoading(false);
//     // wait for the transaction to get mined
//     await tx.wait();
//     setLoading(false);
//     window.alert("You successfully won the auction");
//   } catch (err) {
//     console.error(err);
//   }
// };
  

  return (
    <div 
      className='dark:text-white bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#4966d85c] via-[#4965D833] to-[#F7F9FC]                dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] dark:from-[#2c1b5e] dark:via-[#160744] dark:to-[#160744]' 
      
      // style={{ background: "linear-gradient(#000024, #0024), linear-gradient(#000024, #0024), radial-gradient(ellipse at bottom, #0000e4, #000024)"}}
      >
      <Header />
      <div className='flex justify-center items-center gap-9 py-14 w-full'>
        <div className="flex items-center w-[420px]">
          <div>
          {/* <Carousel
            id="nft_carousel"
            // className={}
            navButtonsAlwaysVisible
            swipe
            autoPlay={false}
            animation="fade"
            indicators={false}
            navButtonsProps={{
              style: {
                backgroundColor: '#4965D8',
                opacity: 0.4,
                margin: "0",
              },
            }}
          >
            {nfts.map((nft) => {
              return(
              <div className='' key={nft.id}>
                  <Image src={nft.img} />
              </div>
            )})}
          </Carousel> */}
          </div>
          <img src="img/icon-arrow-L.svg" />
          <div className=" flex flex-col items-center">         
            <img src="img/founderzpass.png" />
            <img src="img/founderzstand.png" />
          </div>
          <img src="img/icon-arrow-R.svg" />
        </div>
        {/* Add event listeners, n Onclick for listening and calling funcs from AuctionHouse contract:
        Call =   */}
        <div>
          <p className='text-[#4965D8]'>October 10, 2022</p>
          <h2 className='font-bold my-2 text-5xl' style={{fontFamily: ''}}>Founderz #42</h2>
          <div className='p-5' style={{ border: "solid", borderRadius: '2rem' ,borderImage: "linear-gradient(to bottom ,#4965D8, transparent) 1"}}>
            <div className='flex justify-between  my-4 w-[400px]'>
              <div>
                <p className='text-[#4965D8] text-sm'>Current bid</p>
                <p className=' text-4xl'>Ξ 3.45</p>
              </div>
              <div>
                <p className='text-[#4965D8] text-sm'>Action ends in</p>
                <p className=' text-4xl'>22h 44m 21s</p>
              </div>
            </div>
            <div>
              <p className='text-[#4965D8] text-sm'>PLACE BID</p>
              <div className='flex justify-between my-2'>
                <input type='text' placeholder='Insert your bid' className=' text-black rounded-2xl w-8/12' />
                <button className='rounded-2xl w-fit flex items-center px-3 bg-[#1BEDA4]'>Place bid <img className='h-5 ml-1' src='img/icon-arrow.svg' /></button>
              </div>
            </div>
            <div className='my-8'>
              {['acquisitions.lilnouns.eth','acquisitions.lilnouns.eth','nounishlab.eth'].map((i) => (
                <div>
                  <div className='flex justify-between w-full my-2'>
                    <p className=''>{i}</p>
                    <p className=''>Ξ 3.45</p>
                  </div>
                  <div className='h-[1px] bg-[#4965D8] w-full' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-px bg-gradient-to-r from-[#16074402] via-[#4966d8] to-[#16074401] dark:from-[#160744] dark:via-[#4965D8] dark:to-[#160744]' />
    </div>
  );
}

export default Intro;
