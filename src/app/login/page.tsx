import { Box, Button, Center, Flex, Input } from '@chakra-ui/react';

const Login = () => {
  return (
    <Flex
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      w={'100%'}
      h={'100vh'}
      gap={'1rem'}
    >
      <Box>진심이 로고</Box>
      <Button colorScheme="blue">카카오톡 로그인</Button>
    </Flex>
  );
};

export default Login;
