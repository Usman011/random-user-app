import React from 'react';
import { Box, Typography } from '@mui/material';
import { useViewports } from 'helpers/viewports';
import { BasicInfoTabProps } from './types';

const BasicInfoTab: React.FC<BasicInfoTabProps> = ({ heading, info }) => {
  const { isMobile } = useViewports();
  return (
    <Box mt={3}>
      <Typography variant="subtitle1" textAlign="center" color="grey" mb={2}>
        {`My ${heading} is`}
      </Typography>
      <Typography
        variant={isMobile ? "h6" : "h4"}
        fontWeight="bold"
        textAlign="center"
      >
        {info}
      </Typography>
    </Box>
  );
};

export default BasicInfoTab;
