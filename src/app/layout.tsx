import type { Metadata } from 'next';
import { Box } from '@chakra-ui/react';

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
        <Box>{children}</Box>
      </body>
    </html>
  );
}
