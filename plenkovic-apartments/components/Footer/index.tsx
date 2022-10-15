import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import { useContext } from "react";
import { AppContext } from "@c/App/context";
import Link from "next/link";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BedIcon from "@mui/icons-material/Bed";
import CardExploreApartments from "@c/Card/ExploreApartments";
import { appRoutes } from "@u/routes";
import useIsMobile from "@h/useIsMobile";

interface FooterSectionProps {
  title: string;
  Items: React.ReactNode[];
}

function FooterSection({ title, Items }: FooterSectionProps) {
  return (
    <Grid item xs={12} md={2}>
      <List>
        <ListItem>
          <ListItemText>
            <Typography
              variant={"overline"}
              component={"div"}
              textAlign={{ xs: "center" }}
              fontSize={"1rem"}
            >
              {title}
            </Typography>
          </ListItemText>
        </ListItem>
        {Items.map((Item) => Item)}
      </List>
    </Grid>
  );
}

export default function AppFooter() {
  const {
    contact: { email, phone },
    propertyLocation: { lat, lon },
    pathname,
  } = useContext(AppContext);
  const isMobile = useIsMobile();

  return (
    <Grid
      component={"footer"}
      container
      justifyContent={"center"}
      sx={{
        bgcolor: "info.dark",
        color: "info.contrastText",
        left: 0,
        right: 0,
        position: "absolute",
        ...(pathname !== appRoutes.apartments.path
          ? {
              mt: { md: 22, xs: 4 },
              pt: { md: 15, xs: 4 },
              pb: 2,
            }
          : {
              mt: { md: 16, xs: 2 },
              pt: { md: 4, xs: 2 },
              pb: 2,
            }),
      }}
    >
      <Box
        data-aos="flip-left"
        sx={{
          position: { md: "absolute" },
          top: { md: -80 },
          mb: { xs: 4 },
        }}
      >
        <CardExploreApartments />
      </Box>
      <FooterSection
        title="Location"
        Items={[
          <ListItem
            dense={isMobile}
            key="0"
            component="a"
            target={"_blank"}
            href={`https://maps.google.com/?q=${lat},${lon}`}
            sx={{ color: "info.contrastText" }}
          >
            <ListItemIcon sx={{ color: "info.contrastText" }}>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText>Dubrovnik, Lapad</ListItemText>{" "}
          </ListItem>,
        ]}
      />
      <FooterSection
        title="Direct links"
        Items={[
          { Icon: MonetizationOnIcon, appRoute: appRoutes.prices },
          { Icon: BedIcon, appRoute: appRoutes.apartments },
        ].map(({ Icon, appRoute: { title, path } }) => (
          <ListItem dense={isMobile} key={path}>
            <ListItemIcon sx={{ color: "info.contrastText" }}>
              <Icon />
            </ListItemIcon>
            <ListItemText>
              <Link href={path}>
                <a style={{ textDecoration: "none" }}>
                  <Box sx={{ color: "info.contrastText" }}>{title}</Box>
                </a>
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      />
      <FooterSection
        title="Contact"
        Items={[
          { text: email, href: `mailto:${email}`, Icon: EmailIcon },
          { text: phone, href: `tel:${phone}`, Icon: PhoneIcon },
        ].map(({ text, href, Icon }) => (
          <ListItem
            dense={isMobile}
            key={href}
            component="a"
            href={href}
            sx={{ color: "info.contrastText" }}
          >
            <ListItemIcon sx={{ color: "info.contrastText" }}>
              <Icon />
            </ListItemIcon>
            <ListItemText>{text}</ListItemText>{" "}
          </ListItem>
        ))}
      />
      <script
        async={true}
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
      ></script>
    </Grid>
  );
}
