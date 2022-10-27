import { useTheme } from 'next-themes';
import Image from 'next/image';
import Logo from '../pages/assets/main-logo.svg';
import { useState, useEffect } from 'react';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="w-35 h-35 bg-blue-100 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    > 
    {/* <Image src={Logo} width={70} height={70} /> */}
    <img src="img/icon-night.svg " className='dark:hidden h-5'/>
    <img src="img/icon-sun.svg" className='hidden dark:block h-5'/>
    </button>
  );
};

export default ThemeToggler;