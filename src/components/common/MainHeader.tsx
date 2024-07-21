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
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import MenuDrawer from '@/components/common/MenuDrawer';
import { BellIcon, HamburgerIcon } from '@chakra-ui/icons';
import HeaderFrame from '@/components/common/HeaderFrame';

const MainHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const alertData = [
    { type: 'alert', content: '새로운 편지가 도착했습니다' },
    { type: 'alert', content: '새로운 댓글이 달렸습니다' },
    { type: 'alert', content: '새로운 공지사항이 있습니다' },
    { type: 'alert', content: '새로운 이벤트가 있습니다' },
    { type: 'alert', content: '새로운 소식이 있습니다' },
  ];

  return (
    <HeaderFrame
      left={
        <>
          <MenuDrawer
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            btnRef={btnRef}
          />
          <IconButton
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            variant="none"
            icon={<HamburgerIcon />}
            fontSize="1.5rem"
          />
        </>
      }
      right={
        <Flex flexDirection={'row'} justifyContent={'flex-end'}>
          <Popover>
            <PopoverTrigger>
              <IconButton icon={<BellIcon />} fontSize="1.5rem" />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                {alertData?.map((alert) => (
                  <Flex flexDirection={'column'} key={alert.content}>
                    <Box>{alert.type}</Box>
                    <Box>{alert.content}</Box>
                  </Flex>
                ))}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      }
    />
  );
};

export default MainHeader;
