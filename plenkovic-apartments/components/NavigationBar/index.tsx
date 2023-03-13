import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";
import Link from "next/link";
import { appRoutes } from "@u/routes";
import useIsMobile from "@h/useIsMobile";
import { AppContext } from "@c/App/context";

const pages = Object.keys(appRoutes).map((key) => appRoutes[key]);

export default function NavigationBar() {
  const isMobile = useIsMobile();
  const { pathname } = useContext(AppContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={isMobile ? 5 : 0}
      sx={{
        py: 1,
      }}
      color={
        isMobile || pathname !== appRoutes.home.path
          ? "secondary"
          : "transparent"
      }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <SailingOutlinedIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                cursor: "pointer",
                color: "white",
              }}
            />
          </Link>
          <Typography
            variant="h5"
            noWrap
            color="primary"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            PLENKOVIĆ APARTMENTS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ path, title }) => (
                <MenuItem key={path} onClick={handleCloseNavMenu}>
                  <Link href={path}>
                    <a style={{ textDecoration: "none" }}>
                      <Typography
                        color="primary.contrastText"
                        textAlign="center"
                        fontFamily={"Roboto"}
                      >
                        {title}
                      </Typography>
                    </a>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            color={"primary"}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              py: 1,
            }}
          >
            PLENKOVIĆ <br />
            APARTMENTS
          </Typography>
          <Link href="/">
            <SailingOutlinedIcon
              color="primary"
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              float: "right",
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map(({ path, title }) => (
              <Link href={path} key={path}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "1rem",
                    fontFamily: "Roboto",
                  }}
                  component="a"
                >
                  {title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
