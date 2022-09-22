import { useTheme } from 'next-themes';
import Image from 'next/image';
import Logo from '../pages/assets/logo.svg';
import { useState, useEffect } from 'react';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="w-8 h-8 bg-blue-100 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    > <Image src={Logo} width={60} height={60} />
    </button>
  );
};

export default ThemeToggler;