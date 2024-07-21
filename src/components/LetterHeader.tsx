'use client';

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BellIcon, HamburgerIcon } from '@chakra-ui/icons';

export default function LetterHeader() {
  const handleMenu = () => {
    console.log('menu');
  };
  const handleAlert = () => {
    console.log('alert');
  };

  return (
    <Flex
      justifyContent={'space-between'}
      h={'2rem'}
      alignItems={'center'}
      p={'2rem'}
    >
      <Tabs variant="soft-rounded">
        <TabList>
          <Tab>ALL AI</Tab>

          <Tab>HALF AI</Tab>
          <Tab>CHECK AI</Tab>
        </TabList>
      </Tabs>
      <Box>진심이 로고</Box>
      <Box></Box>
    </Flex>
  );
}
