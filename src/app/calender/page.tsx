'use client';
import { Box, Flex } from '@chakra-ui/react';
import { Value } from 'react-calendar/src/shared/types';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <Flex direction={'column'}>
      <Box>캘린더</Box>
      <Box>
        <Calendar onChange={onChange} value={value} />
      </Box>
    </Flex>
  );
};

export default Calender;
