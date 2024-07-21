import MenuDrawer from '@/components/common/MenuDrawer';
import {
  Box,
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { BellIcon, HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { ReactNode } from 'react';

const HeaderFrame = ({
  left,
  right,
}: {
  left?: ReactNode;
  right?: ReactNode;
}) => {
  return (
    <Flex h={'2rem'} alignItems={'center'} p={'2rem'}>
      <Box flex={1}>{left}</Box>
      <Link href={'/'}>
        <Box flex={1}>진심이 로고</Box>
      </Link>
      <Box flex={1}>{right}</Box>
    </Flex>
  );
};

export default HeaderFrame;
