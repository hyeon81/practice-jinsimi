import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const View = () => {
  const mockUpData = [
    {
      title: '편지1',
      img: 'img1',
    },
    {
      title: '편지2',
      img: 'img2',
    },
    {
      title: '편지3',
      img: 'img3',
    },
    {
      title: '편지4',
      img: 'img4',
    },
    {
      title: '편지5',
      img: 'img5',
    },
    {
      title: '편지6',
      img: 'img6',
    },
    {
      title: '편지7',
      img: 'img7',
    },
    {
      title: '편지8',
      img: 'img8',
    },
    {
      title: '편지9',
      img: 'img9',
    },
    {
      title: '편지10',
      img: 'img10',
    },
  ];

  return (
    <Flex direction={'column'} gap={'1rem'}>
      <Box>편지함</Box>
      <Flex
        direction={'row'}
        bg={'yellow'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box>보관 가능 편지 1/10</Box>
        <Flex flexDirection={'row'} gap={1}>
          <Select w={'10rem'}>
            <option value="option1">제목</option>
            <option value="option2">만든 날짜 순</option>
          </Select>
          <Select w={'10rem'}>
            <option value="option1">테마</option>
            <option value="option2">만든 날짜 순</option>
          </Select>
        </Flex>
      </Flex>
      <Box>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {mockUpData.map((data) => (
            <GridItem
              w="100%"
              h="35vh"
              bg="blue.500"
              border={'1px solid'}
              key={data?.title}
            >
              <Flex direction={'column'} h={'100%'}>
                <Box bg={'white'} flexGrow={1}>
                  {data?.img}
                </Box>
                <Box h={'2rem'}>{data?.title}</Box>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default View;
