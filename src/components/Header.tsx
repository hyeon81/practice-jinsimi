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
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BellIcon, HamburgerIcon } from '@chakra-ui/icons';

export default function Header() {
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
      <IconButton
        variant="none"
        icon={<HamburgerIcon />}
        onClick={handleMenu}
        fontSize="1.5rem"
      />
      <Box>진심이 로고</Box>
      <IconButton icon={<BellIcon />} onClick={handleAlert} fontSize="1.5rem" />
    </Flex>
  );
}
