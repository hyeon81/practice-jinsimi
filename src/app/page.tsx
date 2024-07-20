import { Box, Flex } from '@chakra-ui/react';
import Header from '@/components/Header';
import '../styles/reset.css';

export default function Home() {
  return (
    <Flex direction={'column'} h={'100vh'} bg={'yellow'}>
      <Header />
      <Box bg={'blue'}>메인 페이지</Box>
    </Flex>
  );
}
