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

interface FooterSectionProps {
  title: string;
  Items: React.ReactNode[];
}

function FooterSection({ title, Items }: FooterSectionProps) {
  return (
    <Grid item xs={3} md={2}>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="h6" component={"div"}>
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
  } = useContext(AppContext);

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
        mt: 22,
        pt: 15,
        pb: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -80,
        }}
      >
        <CardExploreApartments />
      </Box>
      <FooterSection
        title="Location"
        Items={[
          <ListItem
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
          { Icon: MonetizationOnIcon, href: "/prices", text: "Prices" },
          { Icon: BedIcon, href: "/apartments", text: "Apartments" },
        ].map(({ href, Icon, text }) => (
          <ListItem key={href}>
            <ListItemIcon sx={{ color: "info.contrastText" }}>
              <Icon />
            </ListItemIcon>
            <ListItemText>
              <Link href={href}>
                <a style={{ textDecoration: "none" }}>
                  <Box sx={{ color: "info.contrastText" }}>{text}</Box>
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
