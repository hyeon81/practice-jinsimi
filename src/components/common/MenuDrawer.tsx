import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import Link from 'next/link';

const MenuDrawer = ({
  isOpen,
  onOpen,
  onClose,
  btnRef,
}: {
  isOpen: boolean;
  onOpen: any;
  onClose: any;
  btnRef: any;
}) => {
  const menuInfo = [
    {
      title: '편지함',
      href: '/letter/view',
    },
    {
      title: '캘린더',
      href: '/calender',
    },
    {
      title: '커뮤니티',
      href: '/community',
    },
    {
      title: '구독요금제',
      href: '/subscription',
    },
    {
      title: '공지',
      href: 'notice',
    },
    {
      title: '문의/제휴',
      href: '/',
    },
  ];

  const gradeInfo = [
    '하트 씨앗: 이번 달 0개 편지 작성',
    '하트 새싹: 이번 달 5개 편지 작성',
    '하트 줄기: 이번 달 10개 편지 작성 & 커뮤니티 하트 누적 10개',
    '하트 나무: 이번 달 15개 편지 작성 & 커뮤니티 하트 누적 30개',
    '하트 열매: 이번 달 20개 이상 편지 작성 & 커뮤니티 하트 누적 50개 이상',
  ];

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader></DrawerHeader>
        <DrawerBody>
          <Flex gap={'1rem'} flexDirection={'column'}>
            <Popover>
              <PopoverTrigger>
                <Center
                  w={'4rem'}
                  h={'4rem'}
                  bg={'skyblue'}
                  borderRadius={'50%'}
                  flexDirection={'column'}
                >
                  <Box>편지등급</Box>
                  <Box>1Lv</Box>
                </Center>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  {gradeInfo?.map((grade) => <Box key={grade}>{grade}</Box>)}
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Box>
              <Box>권호정님</Box>
              <Box>편지 안쓴지 ooo일째</Box>
            </Box>
            <Flex flexDirection={'column'} gap={'0.25rem'}>
              {menuInfo?.map((menu) => (
                <Link href={menu.href} key={menu.title}>
                  <Button w={'100%'}>{menu.title}</Button>
                </Link>
              ))}
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
