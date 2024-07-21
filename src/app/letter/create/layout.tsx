import { Box } from '@chakra-ui/react';
import LetterHeader from '@/components/LetterHeader';

export default function Layout({ children }) {
  return (
    <Box>
      <LetterHeader />
      <Box bg={'yellow'}>{children}</Box>
    </Box>
  );
}
