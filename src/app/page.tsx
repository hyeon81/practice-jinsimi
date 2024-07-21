import { Box, Button, Center, Flex } from '@chakra-ui/react';
import Header from '@/components/common/Header';
import '../styles/reset.css';
import Link from 'next/link';

const LetterMenu = ({
  title,
  content,
  herf,
  bgColor,
}: {
  title: string;
  content: string;
  herf: string;
  bgColor?: string;
}) => {
  return (
    <Link href={herf} style={{ textDecoration: 'none' }}>
      <Flex
        bg={bgColor}
        alignItems={'center'}
        direction={'column'}
        justifyContent={'center'}
        h={'70vh'}
        borderRadius={'10%'}
      >
        <Box>{title}</Box>
        <Box>{content}</Box>
      </Flex>
    </Link>
  );
};
export default function Home() {
  return (
    <Flex justifyContent={'space-between'} gap={'1rem'} p={'1rem'}>
      <LetterMenu
        title={'ALL AI'}
        content={'(사용자의 설정 값에 맞춰 여러 개의 편지 예시를 보여줍니다)'}
        bgColor={'orange'}
        herf={'/letter/create/all'}
      />
      <LetterMenu
        title={'Half AI '}
        content={
          '(사용자가 입력한 일부 텍스트에 어울리는 편지 문단을 구성합니다)'
        }
        bgColor={'violet'}
        herf={'/letter/create/half'}
      />
      <LetterMenu
        title={'Check AI'}
        content={
          '(사용자가 입력한 모든 텍스트의 맞춤법, 띄어쓰기 등을 체크하여 편지를 완성합니다)'
        }
        bgColor={'skyblue'}
        herf={'/letter/create/check'}
      />
    </Flex>
  );
}
