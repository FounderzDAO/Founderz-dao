/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

function Footer() {

  return (
   <>
    <div className='w-full h-px bg-gradient-to-r from-[#16074402] via-[#4966d8] to-[#16074401] dark:from-[#160744] dark:via-[#4965D8] dark:to-[#160744]' />
      
    <div className="flex justify-center w-full">
      <div className="flex justify-between items-center sm:w-8/12 my-6">
        <img className="h-[35px] dark:hidden" src="img/fd_footerlogo.png"/>
        <img className="h-[35px] hidden dark:block" src="img/logo2.svg"/>

        <div className="flex gap-6">
          <img className="h-[20px]" src="img/twitter_logo.png" />
          <img className="h-[20px]" src="img/discord_logo.png" />
          <img className="h-[20px]" src="img/icon-etherscan.png" />
        </div>
      </div>
    </div>
   </>
  );
}

export default Footer;
