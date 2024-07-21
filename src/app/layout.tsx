import type { Metadata } from 'next';
import {
  Box,
  Center,
  ChakraProvider,
  extendBaseTheme,
  Flex,
  theme as chakraTheme,
} from '@chakra-ui/react';
import Header from '@/components/common/Header';

export const metadata: Metadata = {
  title: '진심이',
  description: '진심이는 편지를 생성해주는 AI입니다',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Flex flexDirection={'column'}>
            <Header />
            <Center>
              <Box h={'100%'} w={'100%'} maxWidth={'1280px'} p={1}>
                {children}
              </Box>
            </Center>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
