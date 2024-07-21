'use client';

import { usePathname } from 'next/navigation';
import LetterHeader from '@/components/common/LetterHeader';
import HeaderFrame from '@/components/common/HeaderFrame';
import MainHeader from '@/components/common/MainHeader';

export default function Header() {
  const pathname = usePathname();

  if (pathname.startsWith('/letter/create')) {
    return <LetterHeader />;
  } else if (pathname === '/') {
    return <MainHeader />;
  }
  return <HeaderFrame />;
}
