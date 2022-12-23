/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  useAccount,
  useProvider,
  useSigner,
  useContract,
  useContractRead,
  useContractReads,
  useContactWrite,
  useToken,
} from "wagmi";
import {
  Founderz_NFT_CONTRACT_ADDRESS,
  Founderz_NFT_ABI,
  Auction_House_ABI,
  Auction_House_CONTRACT_ADDRESS,
} from "../constants/index.js";
import Carousel from "react-material-ui-carousel";
import founderzpass from "../assets/founderzpass.png";
import founderzstand from "../assets/founderzstand.png";
import Header from "./Header";

const Intro = () => {

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
  // Wallet interaction //

  // Display this code in proper intro file //
  // Now successfully displaying currentBid and all auctionBids as well as founderzId //

  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();
  const [founderzId, setFounderzId] = useState(0);
  const [auctionBids, setAuctionBids] = useState();
  const [currentBid, setCurrentBid] = useState();
  const [auctionTimer, setAuctionTimer] = useState();

  const AuctionHouseContract = useContract({
    address: Auction_House_CONTRACT_ADDRESS,
    abi: Auction_House_ABI,
    signerOrProvider: signer || provider,
  });

  // const FounderzNft = useContract({
  //   address: Founderz_NFT_CONTRACT_ADDRESS,
  //   abi: Founderz_NFT_ABI,
  //   signerOrProvider: signer || provider,
  // });

  // Tools //
  // const contract = new Contract(address, abi, provider);
  // const wallet = new Wallet(priv_key, provider);
  // const contractwithWallet = new contract.connect(wallet);
  // const data  = await Contract.get() ;
  // Place bid on private auction for only 10 people //
  // Add this... //

  // Auction Interaction //

  // Create Bid //
  const CreateBid = async () => {
    const bid = await AuctionHouseContract.createBid();
    // useContractWrite({});
    if (bid) {
      console.log("Bid created");
    }
  };

  // Use auction counter to get the founderzId //

  const FetchAuctionBids = async () => {
    const auction = await AuctionHouseContract.auction();
    console.log(auction.founderId);
    setFounderzId(auction.founderId);
    AuctionStatusBids(auction.founderId);
    setCurrentBid(auction);
  };

  useEffect(() => {
    FetchAuctionBids();
  }, []);

  // Check auction status of bids from auctionhousecontract and display //
  const AuctionStatusBids = async (id) => {
     const auctionStatusBids = await AuctionHouseContract.getBiddersList(id);
     console.log(auctionStatusBids);
     setAuctionBids(auctionStatusBids);
  };

  
  // 24h Timer to be displayed on UI //
  const AuctionStatusTimer = async () => {};

  // Display NFTS in carousel by reading token uri with useContractRead and by getting the IFPS hashes //
  // const { data: founderzNFT } = useContractRead({
  //   ...FounderzNft,
  //   functionName: "",
  //   args: [],
  // });

  // End Auction Interaction //

  return (
    <div
      className="dark:text-white bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#4966d85c] via-[#4965D833] to-[#F7F9FC]                dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] dark:from-[#2c1b5e] dark:via-[#160744] dark:to-[#160744]"

      // style={{ background: "linear-gradient(#000024, #0024), linear-gradient(#000024, #0024), radial-gradient(ellipse at bottom, #0000e4, #000024)"}}
    >
      <Header />
      <div className="flex justify-center items-center gap-9 py-14 w-full">
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
          <p className="text-[#4965D8]">October 10, 2022</p>
          <h2 className="font-bold my-2 text-5xl" style={{ fontFamily: "" }}>
            Founderz #{currentBid ? currentBid.founderId : 0}
          </h2>
          <div
            className="p-5"
            style={{
              border: "solid",
              borderRadius: "2rem",
              borderImage: "linear-gradient(to bottom ,#4965D8, transparent) 1",
            }}
          >
            <div className="flex justify-between  my-4 w-[400px]">
              <div>
                <p className="text-[#4965D8] text-sm">Current bid</p>
                <p className=" text-4xl">
                  Ξ
                  {currentBid ? ethers.utils.formatEther(currentBid.amount) : 0}
                </p>
              </div>
              <div>
                <p className="text-[#4965D8] text-sm">Action ends in</p>
                {/* // Add a way here for Unix endTime to display time in 24h format // */}
                <p className=" text-4xl">
                  {currentBid ? currentBid.endTime : 0}
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
                    onClick={CreateBid}
                  />
                </button>
              </div>
            </div>
            <div className="my-8">
              {auctionBids &&
                auctionBids.map((i) => (
                  <div>
                    <div className="flex justify-between w-full my-2">
                      <p className="">{i}</p>
                      <p className="">Ξ {pastBids ? pastBids : 0}</p>
                    </div>
                    <div className="h-[1px] bg-[#4965D8] w-full" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-[#16074402] via-[#4966d8] to-[#16074401] dark:from-[#160744] dark:via-[#4965D8] dark:to-[#160744]" />
    </div>
  );
};

export default Intro;
