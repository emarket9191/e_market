import React from 'react';
import Box from '@material-ui/core/Box';
import CenteredGrid from './grid'

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '5rem', height: '5rem' },
};

export default function BorderRadius() {
  return (
    <Box borderRadius={100} {...defaultProps}>
      <CenteredGrid/>
    </Box>
  );
}