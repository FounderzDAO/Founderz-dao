
function Footer() {

  return (
   <>
    <div className='w-full h-px bg-gradient-to-r from-[#16074402] via-[#4966d8] to-[#16074401] dark:from-[#160744] dark:via-[#4965D8] dark:to-[#160744]' />
      
    <div className="flex justify-center w-full">
      <div className="flex justify-between items-center w-10/12 sm:w-8/12 my-6">
        <img className="h-[35px] dark:hidden" src="img/fd_footerlogo.png"/>
        <img className="h-[35px] hidden dark:block" src="img/logo2.svg"/>

        <div className="flex gap-6">
          <a href="https://twitter.com/FounderzDAO" target="blank"> <img className="h-[20px]" src="img/twitter_logo.png" /> </a>
          <a href="https://discord.gg/X2WbXYNb" target="blank"> <img className="h-[20px]" src="img/discord_logo.png" /></a>
          <a href=""> <img className="h-[20px]" src="img/icon-etherscan.png" /></a>
        </div>
      </div>
    </div>
   </>
  );
}

export default Footer;
