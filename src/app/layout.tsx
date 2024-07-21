import type { Metadata } from 'next';
import {
  Box,
  Center,
  ChakraProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react';

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
          <Center>
            <Box h={'100%'} w={'100%'} maxWidth={'1280px'}>
              {children}
            </Box>
          </Center>
        </ChakraProvider>
      </body>
    </html>
  );
}
