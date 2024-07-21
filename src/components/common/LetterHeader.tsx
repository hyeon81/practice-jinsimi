'use client';

import { Tab, TabList, Tabs } from '@chakra-ui/react';
import HeaderFrame from '@/components/common/HeaderFrame';
import { usePathname } from 'next/navigation';

export default function LetterHeader() {
  const pathname = usePathname();
  const defaultTabIndex =
    pathname === '/letter/create/all'
      ? 0
      : pathname === '/letter/create/half'
        ? 1
        : 2;

  return (
    <HeaderFrame
      left={
        <Tabs variant="soft-rounded" defaultIndex={defaultTabIndex}>
          <TabList>
            <Tab>ALL AI</Tab>
            <Tab>HALF AI</Tab>
            <Tab>CHECK AI</Tab>
          </TabList>
        </Tabs>
      }
    />
  );
}
