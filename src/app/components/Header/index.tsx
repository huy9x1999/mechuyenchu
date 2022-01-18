import { Box } from '@mui/system';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Btn, GroupButtonHeader, LogoHeaderMobile } from './styled';
import LogoMobile from './assets/logo-domain.webp';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Input, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';

import { MenuMobile } from './components/MenuMobile';

interface Props {}

const Index = (props: Props) => {
  const [isStatusSearch, setIsStatusSearch] = React.useState(false);
  const [isStatusMenu, setIsStatusMenu] = React.useState(false);

  const openStatusSearch = () => {
    if (isStatusMenu === true) {
      setIsStatusMenu(false);
    }
    setIsStatusSearch(true);
  };

  const openStatusMenu = () => {
    if (isStatusSearch === true) {
      setIsStatusSearch(false);
    }
    setIsStatusMenu(true);
  };

  return (
    <>
      <BrowserView>12312312312</BrowserView>
      <MobileView>
        <Box
          sx={{
            padding: '8px 12px',
            height: '58px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LogoHeaderMobile>
            <img src={LogoMobile} alt="" />
          </LogoHeaderMobile>
          <GroupButtonHeader>
            {isStatusSearch ? (
              <Btn
                sx={{ color: '#000' }}
                onClick={() => setIsStatusSearch(false)}
              >
                <CloseTwoToneIcon />
              </Btn>
            ) : (
              <Btn onClick={openStatusSearch}>
                <SearchIcon />
              </Btn>
            )}
            {isStatusMenu ? (
              <Btn
                sx={{ color: '#000' }}
                onClick={() => setIsStatusSearch(false)}
              >
                <CloseTwoToneIcon />
              </Btn>
            ) : (
              <Btn onClick={openStatusMenu}>
                <MenuIcon />
              </Btn>
            )}
          </GroupButtonHeader>
        </Box>
        {isStatusSearch ? (
          <Box sx={{ padding: '0px 12px 8px 12px' }}>
            <Input
              sx={{
                width: '100%',
                fontSize: '16px',
                lineHeight: '24px',
                backgroundColor: '#f7f7f7',
                height: '40px',
                borderRadius: '20px',
                fontFamily: 'Source Sans Pro',
                'input, .MuiOutlinedInput-root': {
                  height: '100%',
                  padding: '6px 0px 6px 16px',
                },
              }}
              placeholder="Tìm kiếm tên truyện hoặc tác giả"
              disableUnderline={true}
              endAdornment={
                <InputAdornment
                  position="end"
                  sx={{
                    padding: '0 16px 0 10px',
                    a: {
                      color: 'inherit',
                    },
                  }}
                >
                  <Link to="/test">
                    <SearchIcon />
                  </Link>
                </InputAdornment>
              }
            />
          </Box>
        ) : null}
        <MenuMobile isMenu={isStatusMenu} />
      </MobileView>
    </>
  );
};

export default Index;
