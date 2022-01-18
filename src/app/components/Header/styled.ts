import { Button, TextField } from '@mui/material';
import { Box, styled } from '@mui/system';

export const LogoHeaderMobile = styled(Box)({
  height: '24px',
  img: {
    height: '100%',
  },
});

export const GroupButtonHeader = styled(Box)({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const Btn = styled('button')({
  width: '42px',
  height: '42px',
  background: 'transparent',
  border: 'none',
  color: '#999',
  fontSize: '',
});

export const InputSearch = styled(TextField)({});
