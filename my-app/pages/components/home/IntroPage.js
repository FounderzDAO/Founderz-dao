/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import Image from "next/image";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import {
  useAccount,
  useProvider,
  useSigner,
  useContract
} from "wagmi";
import React, { useEffect, useRef, useState } from "react";
import {
  Founderz_NFT_CONTRACT_ADDRESS,
  Founderz_NFT_ABI,
  Auction_House_ABI,
  Auction_House_CONTRACT_ADDRESS,
} from "../../constants/index.js";
import moment from "moment";
import Carousel from "react-material-ui-carousel";
import Header from "../Header";
import { parse } from "@ethersproject/transactions";

const IntroPage = () => {
  const router = useRouter();

  const nfts = [
    {
      id: 1,
      name: "card1",
      img: "img/founderzpass.png",
    },
    {
      id: 2,
      name: "card2",
      img: "img/founderzpass.png",
    },
  ];

  // Current Date for auction // 
  const currentAuctionDate = moment().format("MMMM Do YYYY");
  // Wallet and contract interaction //
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();
  const [founderzId, setFounderzId] = useState(0);
  const [auctionBids, setAuctionBids] = useState();
  const [currentBid, setCurrentBid] = useState();
  const [auctionTimer, setAuctionTimer] = useState(null);
  // Error handling //
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();

  // Contract interaction //
  const AuctionHouseContract = useContract({
    address: Auction_House_CONTRACT_ADDRESS,
    abi: Auction_House_ABI,
    signerOrProvider: signer || provider,
  });

  const FounderzNft = useContract({
    address: Founderz_NFT_CONTRACT_ADDRESS,
    abi: Founderz_NFT_ABI,
    signerOrProvider: signer || provider,
  });

  // Auction Interaction //

  // Create Bid //
  // const CreateBid = async () => {
  //   const bid = await AuctionHouseContract.createBid();
  //   // useContractWrite({});
  //   if (bid) {
  //     console.log("Bid created");
  //   }
  // };

  // Check auction status of bids from auctionhousecontract and display //
  const AuctionStatusBids = async (id) => {
    const auctionStatusBids = await AuctionHouseContract.getBiddersList(id);
    console.log(auctionStatusBids);
    setAuctionBids(auctionStatusBids);
  };

  // Fetch Auction status of Nft Id, And Id of bid status, and current bid //
  const FetchAuctionBids = async () => {
    const auction = await AuctionHouseContract.auction();
    console.log(auction.founderId);
    console.log(auction);
    setFounderzId(parseInt(auction.founderId._hex));
    AuctionStatusBids(auction.founderId);
    setCurrentBid(auction);
  };

  useEffect(() => {
    FetchAuctionBids();
  }, []);

  // Test // 
// useEffect(() => {
//   const interval = setInterval(async () => {
//     // Get the current auction end time from the contract
//     const auctionEndTime = await AuctionHouseContract.auction();

//     // Convert the Unix timestamp to a Date object
//     const auctionEndDate = new Date(auctionEndTime * 1000);

//     // Update the state with the current time
//     setAuctionTimer(auctionEndDate.endTime.toString());
//   }, 1000);

//   return () => clearInterval(interval);
// }, []);
  // Test // 

  // 24h Timer to be displayed on UI //
  const AuctionStatusCountdownTimer = async () => {
  };

  // Error handling- potential fixes for Type Error //
  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <>
      <div
        className="dark:text-white bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#4966d85c] via-[#4965D833] to-[#F7F9FC]                dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] dark:from-[#2c1b5e] dark:via-[#160744] dark:to-[#160744]"

        // style={{ background: "linear-gradient(#000024, #0024), linear-gradient(#000024, #0024), radial-gradient(ellipse at bottom, #0000e4, #000024)"}}
      >
        <Header />
        <div className="flex flex-col lg:flex-row  justify-center  items-center gap-9 py-14 w-full">
          <div className="flex items-center justify-center w-full sm:w-[420px]">
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
            <div className=" w-7/12 sm:w-full flex flex-col items-center">
              <img src="img/founderzpass.png" />
              <img src="img/founderzstand.png" />
            </div>
            <img src="img/icon-arrow-R.svg" />
          </div>
          <div className="hidden lg:block max-w-[430px]">
            <p className="text-[#4965D8]"> {currentAuctionDate} </p>
            <h2
              className="font-bold my-2 text-5xl font-[all-round-gothic]"
              style={{ fontFamily: "" }}
            >
              Founderz #{currentBid ? parseInt(currentBid.founderId._hex) : 0}
            </h2>

            <div className=" bg-gradient-to-b from-[#4965D8] rounded-2xl p-px">
              <div className="p-5 rounded-2xl bg-gradient-to-bl  from-[#e0e6f9] via-[#e0e6f9] to-[#c0caf1]                       dark:from-[#160744] dark:via-[#160744] dark:to-[#2c1b5e]">
                <div className="flex justify-between  my-4 w-[400px]">
                  <div>
                    <p className="text-[#4965D8] text-sm">Current bid</p>
                    <p className=" text-4xl">
                      Ξ
                      {currentBid
                        ? ethers.utils.formatEther(
                            parseInt(currentBid.amount._hex)
                          )
                        : 0}
                    </p>
                  </div>
                  {/* Format time from Unix to current countdown time  */}
                  <div>
                    <p className="text-[#4965D8] text-sm">Action ends in</p>
                    <p className=" text-4xl">
                      {/* Change this... */}
                      {currentBid ? currentBid.endTime._hex : 0}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#4965D8] text-sm">PLACE BID</p>
                  <div className="flex justify-between my-2">
                    <input
                      type="text"
                      placeholder="Insert your bid"
                      className=" text-black rounded-2xl w-8/12"
                    />
                    <button className="rounded-2xl w-fit flex items-center px-3 bg-[#1BEDA4]">
                      Place bid{" "}
                      <img
                        className="h-5 ml-1"
                        src="img/icon-arrow.svg"
                        // onClick={CreateBid}
                      />
                    </button>
                  </div>
                </div>
                <div className="mt-8 mb-1 flex flex-col items-center">
                  {auctionBids &&
                    auctionBids.map((i) => (
                      <div className="w-full">
                        <div className="flex justify-between w-full my-2">
                          <p className="flex items-center">
                            <span className="h-4 w-4 mr-2 rounded-full bg-[#4965D8]" />
                            {i}
                          </p>
                          <p className="">
                            Ξ{" "}
                            {currentBid
                              ? ethers.utils.formatEther(currentBid.amount)
                              : 0}
                          </p>
                        </div>
                        <div className="h-[1px] bg-[#4965D8] w-full" />
                      </div>
                    ))}
                  <p className="text-[#4965D8] underline underline-offset-2 mt-5">
                    View all bids
                    {/* Add link here to a pop up card with all bids for the current NFT ID/URI being displayed*/}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-px bg-gradient-to-r from-[#16074402] via-[#4966d8] to-[#16074401] dark:from-[#160744] dark:via-[#4965D8] dark:to-[#160744]" />
      </div>

      <div className=" lg:hidden bg-[#F7F9FC] dark:bg-[#160744] w-full flex justify-center pt-10">
        <div className="w-11/12 max-w-[430px]">
          <p className="text-[#4965D8]"> {currentAuctionDate} </p>
          <h2
            className="font-bold my-2 text-3xl sm:text-5xl"
            style={{ fontFamily: "" }}
          >
            Founderz #{currentBid ? parseInt(currentBid.founderId._hex) : 0}
          </h2>
          {/* Tools */}
          {/* {currentBid ? parseInt(currentBid.endTime._hex) : 0}
          {currentBid ? parseInt(currentBid.startTime._hex) : 0} */}
          <div className=" bg-gradient-to-b from-[#4965D8] rounded-2xl p-px">
            <div className="p-3 sm:p-5 rounded-2xl bg-[#F7F9FC] dark:bg-[#160744]">
              <div className="flex justify-between  my-4 w-full">
                <div>
                  <p className="text-[#4965D8] text-sm">Current bid</p>
                  <p className=" text-2xl sm:text-4xl">
                    Ξ{" "}
                    {currentBid
                      ? ethers.utils.formatEther(currentBid.amount)
                      : 0}
                  </p>
                </div>
                <div>
                  <p className="text-[#4965D8] text-sm">Action ends in</p>
                  <p className=" text-2xl sm:text-4xl">22h 44m 21s</p>
                </div>
              </div>
              <div>
                <p className="text-[#4965D8] text-sm">PLACE BID</p>
                <div className="flex justify-between my-2">
                  <input
                    type="text"
                    placeholder="Insert your bid"
                    className=" text-black rounded-2xl w-7/12 sm:w-8/12"
                  />
                  <button className="rounded-2xl w-fit text-sm flex text-black items-center px-3 bg-[#1BEDA4]">
                    Place bid{" "}
                    <img
                      className="h-5 ml-1"
                      src="img/icon-arrow.svg"
                      // onClick={CreateBid}
                    />
                  </button>
                </div>
              </div>
              <div className="my-8 flex flex-col items-center">
                {auctionBids &&
                  auctionBids.map((i) => (
                    <div className="w-full">
                      <div className="flex justify-between w-full my-2">
                        <p className="flex items-center">
                          <span className="h-4 w-4 mr-2 rounded-full bg-[#4965D8]" />
                          {i}
                        </p>
                        <p className="">
                          Ξ{" "}
                          {currentBid
                            ? ethers.utils.formatEther(currentBid.amount)
                            : 0}
                        </p>
                      </div>
                      <div className="h-[1px] bg-[#4965D8] w-full" />
                    </div>
                  ))}
                <p className="text-[#4965D8] underline underline-offset-2 mt-5">
                  View all bids
                  {/* Add link here to a pop up card with all bids for the current NFT ID/URI being displayed*/}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
