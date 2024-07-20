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
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex bg={'red'} h={'3rem'}>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Box h={'100%'}>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
}
