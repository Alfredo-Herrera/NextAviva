/* eslint-disable @next/next/no-img-element */
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { default as Link, default as NextLink } from 'next/link';
import { MouseEvent, useState } from 'react';
import {
  AppBarStyles,
  DesktopContainer,
  MenuStyles,
  MobileContainer,
  ToolBarStyles,
} from './styles';

const pages = [
  { name: 'Lista de Contactos', url: '/employees' },
  { name: 'Cargar Imagenes', url: '/upload' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBarStyles position="static">
      <Container maxWidth="xl">
        <ToolBarStyles disableGutters>
          <Link href="/contact">
            <img src="/logo.svg" alt="logoDesktop" width={174} height={35} />
          </Link>
          <MobileContainer
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <MenuStyles
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <NextLink href={`${page.url}`} passHref key={page.name}>
                  <Button
                    variant="text"
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'black',
                      display: 'block',
                      textDecoration: 'none',
                    }}
                  >
                    {page.name}
                  </Button>
                </NextLink>
              ))}
            </MenuStyles>
          </MobileContainer>
          <DesktopContainer
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {pages.map((page) => (
              <NextLink href={`${page.url}`} passHref key={page.name}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </NextLink>
            ))}
          </DesktopContainer>
        </ToolBarStyles>
      </Container>
    </AppBarStyles>
  );
}
export default Navbar;
