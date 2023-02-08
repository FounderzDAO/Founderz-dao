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
  useContract,
  useSendTransaction,
  usePrepareSendTransaction,
  useContractWrite,
} from "wagmi";
import React, { useEffect, useRef, useState } from "react";
import truncateEthAddress from "truncate-eth-address";
import {
  Founderz_NFT_CONTRACT_ADDRESS,
  Founderz_NFT_ABI,
  Auction_House_ABI,
  Auction_House_CONTRACT_ADDRESS,
} from "../../../constants/index.js";
import moment from "moment";
import Carousel from "react-material-ui-carousel";
import Header from "../Header";
import { parse } from "@ethersproject/transactions";
import disableScroll from "disable-scroll";

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
  const [auctionBidder, setAuctionBidder] = useState();
  const [currentAuction, setCurrentAuction] = useState();
  const [showAllBids, setShowAllBids] = useState(false);
  const [previousBids, setPreviousBids] = useState([]);
  const [startNewAuction, setStartNewAuction] = useState(true);
  const [bidAmount, setBidAmount] = useState();
  const [auctionEndTime, setAuctionEndTime] = useState();
  const [isFirst10NFT, setIsFirst10NFT] = useState(false);
  const [isPreviousNFT, setIsPreviousNFT] = useState(false);
  // Timer //
  const [auctionTimer, setAuctionTimer] = useState(24 * 60 * 60);
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
  const CreateBid = async () => {
    const amountInWei = ethers.utils.parseEther(bidAmount);
    const bid = await AuctionHouseContract.createBid({value: amountInWei});
    await bid.wait();
   };

   const CreatePreAuctionBid = async () => {
    const amountInWei = ethers.utils.parseEther(bidAmount);
    const preBid = await AuctionHouseContract.settleCurrentAndCreateNewAuction({value: amountInWei});
    await preBid.wait();
   };

  // Check Auction status of bids from AuctionHouseContract and display //
  const AuctionStatusBids = async (auctionId) => {
    const auctionStatusBids = await AuctionHouseContract.getBidHIstory(auctionId);
    // console.log(auctionStatusBids);
    setAuctionBidder(auctionStatusBids);
  };

  const AuctionPastBids = async () => {
    const auctionPastBidder = await AuctionHouseContract.getBidderHIsotry();
    setPreviousBids(auctionPastBidder);
    console.log(setPreviousBids);
  };

  // Fetch current Auction status of Nft Id, And Id of bid status, and current bid //
  const FetchAuctionBids = async () => {
    const auction = await AuctionHouseContract.auction();
    console.log(auction.founderId);
    setFounderzId(parseInt(auction.founderId._hex));
    AuctionStatusBids(auction.founderId);
    setCurrentAuction(auction);
    setAuctionEndTime(parseInt(auction.endTime._hex));
  };

  // Past Auction status //
  // const previousAuction = async () => {
  //  const prevAuction = await AuctionHouseContract.bidders();
  //  setPreviousAuctions(prevAuction); 
  //  console.log(prevAuction);
  // };

  useEffect(() => {
    FetchAuctionBids();
  }, []);

  // To display Winning Bid // 
  // const winningBid = async () => {
  //   const winningBid = await AuctionHouseContract.AuctionSettled();
  //   console.log(winningBid);
  // };

  // 24h Timer to be displayed on UI //
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleAuctionTime();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [auctionEndTime]);

  // Format time to display on UI //
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours} : ${minutes} : ${seconds}`;
  };

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  const handleAuctionTime = () => {
   const currentTime = getTimestampInSeconds();
   const remainingTime = auctionEndTime - currentTime;
   setAuctionTimer(remainingTime); 
   if (remainingTime <= 0) {
      setStartNewAuction(false);
   }
   else {
     setStartNewAuction(true);
   }
  };

  // Auction reset logic //

  // const settleAuction = async () => {};

  // const createNewAuction = async () => {
  //   const createNewAuction = await AuctionHouseContract.();
  // };

  return (
    <>
      <div
        className="dark:text-white bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#4966d85c] via-[#4965D833] to-[#F7F9FC]                dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] dark:from-[#2c1b5e] dark:via-[#160744] dark:to-[#160744]"

        // style={{ background: "linear-gradient(#000024, #0024), linear-gradient(#000024, #0024), radial-gradient(ellipse at bottom, #0000e4, #000024)"}}
      >
        <Header />
        <div className="flex flex-col lg:flex-row  justify-center  items-center gap-9 py-14 w-full">
          <div className="flex items-center justify-center w-full sm:w-[420px]">
            <div></div>
            <img
              className="cursor-pointer"
              src="img/icon-arrow-L.svg"
              onClick={() => {
                setIsPreviousNFT(true);
              }}
            />
            {/* Map this arrow to display past ids and other data (auction call) */}
            <div className=" w-7/12 sm:w-full flex flex-col items-center">
              <img src="img/founderzpass.png" />
              <img src="img/founderzstand.png" />
            </div>
            <img
              className="cursor-pointer"
              src="img/icon-arrow-R.svg"
              onClick={() => {
                setIsPreviousNFT(false);
              }}
            />
          </div>
          <div className="hidden lg:block max-w-[430px]">
            {isFirst10NFT ? (
              <p
                className="text-[#4965D8] text-sm"
                onClick={() => {
                  setIsFirst10NFT(false);
                }}
              >
                {" "}
                1/10 LIMITED EDITION{" "}
              </p>
            ) : (
              <p
                className="text-[#4965D8]"
                onClick={() => {
                  setIsFirst10NFT(true);
                }}
              >
                {" "}
                {currentAuctionDate}{" "}
              </p>
            )}
            <h2
              className="font-bold my-2 text-5xl font-[all-round-gothic]"
              style={{ fontFamily: "" }}
            >
              Founderz #
              {currentAuction ? parseInt(currentAuction.founderId._hex) : 0}
            </h2>

            <div className=" bg-gradient-to-b from-[#4965D8] rounded-2xl p-px">
              <div className="p-5 rounded-2xl min-h-[350px] bg-gradient-to-bl  from-[#e0e6f9] via-[#e0e6f9] to-[#c0caf1]                       dark:from-[#160744] dark:via-[#160744] dark:to-[#2c1b5e]">
                {isFirst10NFT ? (
                  <div>
                    <div className="flex justify-between  my-4 w-[400px]">
                      <div>
                        <p className="text-[#4965D8] text-sm">Amount</p>
                        <p className=" text-4xl">Ξ 4.76</p>
                      </div>
                      <button className="rounded-2xl w-fit flex items-center px-3 bg-[#1BEDA4] font-[all-round-gothic]">
                        PURCHASE NOW
                        <img
                          className="h-5 ml-1"
                          src="img/icon-arrow.svg"
                          // onClick={CreateBid(auctionBid)}
                        />
                      </button>
                    </div>
                    <div className="mt-10 mb-5">
                      <p className="text-[#4965D8] text-sm">Benefits</p>
                      <ul className="list-decimal px-5 text-[14px]">
                        <li>
                          Possibility of losing only 10% of your investment
                        </li>
                        <li>Possibility to become part of the "co-founders"</li>
                        <li>
                          Badge as early backer in the form of SBT (soulbound
                          token)
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between  my-4 w-[400px]">
                      <div>
                        <p className="text-[#4965D8] text-sm">
                          {isPreviousNFT ? "Winning bid" : "Current bid"}
                        </p>
                        {isPreviousNFT ? (
                          <p className=" text-4xl">Ξ 10.89</p>
                        ) : (
                          <p className=" text-4xl">
                            Ξ
                            {currentAuction
                              ? ethers.utils
                                  .formatEther(currentAuction.amount._hex)
                                  .slice(0, 7)
                              : 0}
                          </p>
                        )}
                      </div>
                      {isPreviousNFT ? (
                        <div>
                          <p className="text-[#4965D8] text-sm">Held by</p>
                          <p className="flex text-4xl items-center">
                            <span className="h-6 w-6 mr-2 rounded-full bg-[#4965D8]" />
                            {"0x2d654654r54689d642144d685654"
                              .substring(0, 6)
                              .concat("...")}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-[#4965D8] text-sm">
                            Action ends in
                          </p>
                          <p className=" text-4xl">
                            {formatTime(auctionTimer)}
                          </p>
                        </div>
                      )}
                    </div>
                    {isPreviousNFT ? (
                      <div className="mt-6">
                        <p className="text-[#4965D8] text-sm">Winner</p>
                        <div className="flex justify-between">
                          <button className="rounded-3xl my-2  text-black text-[12px] flex items-center w-fit px-7 py-3 bg-[#1BEDA4] font-[all-round-gothic]">
                            BID HISTORY
                            <img
                              className="h-5 ml-1"
                              src="img/icon-arrow.svg"
                            />
                          </button>
                          <button className="rounded-3xl my-2 text-black text-[12px] flex items-center w-fit px-7 py-3 bg-[#1BEDA4] font-[all-round-gothic]">
                            ETHERSCAN
                            <img
                              className="h-5 ml-1"
                              src="img/icon-arrow.svg"
                            />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div>
                          <p className="text-[#4965D8] text-sm">Place bid</p>
                          <div className="flex justify-between my-2">
                            <input
                              onChange={(e) => setBidAmount(e.target.value)}
                              type="text"
                              placeholder="Insert your bid"
                              className=" text-black rounded-2xl w-8/12"
                            />
                            { startNewAuction ? 
                            <button className="rounded-2xl w-fit text-sm flex items-center px-3 font-[all-round-gothic] bg-[#1BEDA4]">
                              PLACE BID{" "}
                              <img
                                className="h-5 ml-1"
                                src="img/icon-arrow.svg"
                                onClick={() => CreateBid()}
                              />
                            </button>
                            :
                            <button className="rounded-2xl w-fit flex items-center px-3 bg-[#1BEDA4]">
                              Help the Dao{" "}
                              <img
                                className="h-5 ml-1"
                                src="img/icon-arrow.svg"
                                onClick={() => CreatePreAuctionBid()}
                              />
                            </button>
}
                          </div>
                        </div>
                        <div className="mt-8 mb-1 flex flex-col items-center">
                          {auctionBidder &&
                            auctionBidder.map((i) => (
                              <div className="w-full">
                                <div className="flex justify-between w-full my-2">
                                  <p className="flex items-center">
                                    <span className="h-4 w-4 mr-2 rounded-full bg-[#4965D8]" />
                                    {i.bidder.substring(0, 6).concat("...")}
                                  </p>
                                  <p className="">
                                    Ξ{" "}
                                    {currentAuction
                                      ? ethers.utils
                                          .formatEther(
                                            currentAuction.amount._hex
                                          )
                                          .slice(0, 7)
                                      : 0}
                                  </p>
                                </div>
                                <div className="h-[1px] bg-[#4965D8] w-full" />
                              </div>
                            ))}
                          <a
                            className="text-[#4965D8] underline underline-offset-2 mt-5 cursor-pointer"
                            onClick={() => {
                              setShowAllBids(true);
                            }}
                          >
                            View all bids
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
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
            Founderz #
            {currentAuction ? parseInt(currentAuction.founderId._hex) : 0}
          </h2>
          {/* Tools */}
          {/* {currentAuction ? parseInt(currentAuction.endTime._hex) : 0}
          {currentAuction ? parseInt(currentAuction.startTime._hex) : 0} */}
          <div className=" bg-gradient-to-b from-[#4965D8] rounded-2xl p-px">
            <div className="p-3 sm:p-5 rounded-2xl bg-[#F7F9FC] dark:bg-[#160744]">
              <div className="flex justify-between  my-4 w-full">
                <div>
                  <p className="text-[#4965D8] text-sm">Current bid</p>
                  <p className=" text-2xl sm:text-4xl">
                    Ξ
                    {currentAuction
                      ? ethers.utils
                          .formatEther(currentAuction.amount._hex)
                          .slice(0, 7)
                      : 0}
                  </p>
                </div>
                <div>
                  <p className="text-[#4965D8] text-sm">Action ends in</p>
                  <p className=" text-2xl sm:text-4xl">
                    {formatTime(auctionTimer)}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#4965D8] text-sm">Place bid</p>
                <div className="flex justify-between my-2">
                  <input
                    type="text"
                    placeholder="Insert your bid"
                    className=" text-black rounded-2xl w-7/12 sm:w-8/12"
                  />
                  <button className="rounded-2xl w-fit text-sm flex text-black items-center  px-3 font-[all-round-gothic] bg-[#1BEDA4]">
                    PLACE BID{" "}
                    <img
                      className="h-5 ml-1"
                      src="img/icon-arrow.svg"
                      // onClick={CreateBid}
                    />
                  </button>
                </div>
              </div>
              <div className="my-8 flex flex-col items-center">
                {auctionBidder &&
                  auctionBidder.map((i) => (
                    <div className="w-full">
                      <div className="flex justify-between w-full my-2">
                        <p className="flex items-center">
                          <span className="h-4 w-4 mr-2 rounded-full bg-[#4965D8]" />
                          {(i && i.bidder).substring(0, 6).concat("...")}
                        </p>
                        <p className="">
                          Ξ
                          {currentAuction
                            ? ethers.utils
                                .formatEther(currentAuction.amount._hex)
                                .slice(0, 7)
                            : 0}
                        </p>
                      </div>
                      <div className="h-[1px] bg-[#4965D8] w-full" />
                    </div>
                  ))}
                <p className="text-[#4965D8] underline underline-offset-2 mt-5">
                  <a
                    className="text-[#4965D8] underline underline-offset-2 mt-5 cursor-pointer"
                    onClick={() => {
                      setShowAllBids(true);
                    }}
                  >
                    View all bids
                    {/* Add link here to a pop up card with all bids for the current NFT ID/URI being displayed*/}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAllBids && (
        <div className="fixed top-0 overflow-hidden z-[1000]  h-[100vh] w-[100vw] bg-[#00000020] flex items-center justify-center">
          <div className="bg-[#F7F9FC] border border-[#8094B7] rounded-2xl p-5 w-[340px] md:w-[450px]">
            <div className="flex  justify-between">
              <div>
                <p className="text-[#4965D8] text-[10px]">
                  {" "}
                  {currentAuctionDate}{" "}
                </p>
                <h2 className="font-bold  text-xl text-[#160744] font-[all-round-gothic]">
                  Founderz #
                  {currentAuction ? parseInt(currentAuction.founderId._hex) : 0}
                </h2>
              </div>
              <img
                src="img/icon-close.svg"
                className="h-3 mt-2 cursor-pointer"
                onClick={() => {
                  setShowAllBids(false);
                }}
              />
            </div>
            <div className="w-[100%] p-2 bg-[#E0E5ED] rounded-xl h-[180px] overflow-auto">
              {auctionBidder &&
                auctionBidder.map((i) => (
                  <div className="w-full bg-white text-[#160744] rounded-lg mb-2 p-1">
                    <div className="flex justify-between w-full my-2 text-[14px]">
                      <p className="flex items-center">
                        <span className="h-4 w-4 mr-2 rounded-full bg-[#4965D8]" />
                        {(i && i.bidder).substring(0, 6).concat("...")}
                      </p>
                      <p className="">
                        Ξ{" "}
                        {currentAuction
                          ? parseFloat(
                              ethers.utils.formatEther(currentAuction.amount)
                            )
                          : 0}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IntroPage;
