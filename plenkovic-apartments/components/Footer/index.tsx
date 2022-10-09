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
        mt: 14,
        pt:12,
        pb:6
      }}
    >
      <FooterSection
        title="Location"
        Items={[
          <ListItem
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
          <ListItem>
            <ListItemIcon sx={{ color: "info.contrastText" }}>
              <MonetizationOnIcon sx={{ mr: 0 }} />
            </ListItemIcon>
            <ListItemText>
              <Link href="/prices">
                <a style={{ textDecoration: "none" }}>
                  <Box sx={{ color: "info.contrastText" }}>Prices</Box>
                </a>
              </Link>
            </ListItemText>
          </ListItem>,
          <ListItem>
            <ListItemIcon sx={{ color: "info.contrastText" }}>
              <BedIcon />
            </ListItemIcon>
            <ListItemText>
              <Link href="/apartments">
                <a style={{ textDecoration: "none" }}>
                  <Box sx={{ color: "info.contrastText" }}>Apartments</Box>
                </a>
              </Link>
            </ListItemText>
          </ListItem>,
        ]}
      />
      <FooterSection
        title="Contact"
        Items={[
          <ListItem
            component="a"
            href={`mailto:${email}`}
            sx={{ color: "info.contrastText" }}
          >
            <ListItemIcon sx={{ color: "info.contrastText" }}>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText>{email}</ListItemText>{" "}
          </ListItem>,
          <ListItem
            component="a"
            href={`tel:${phone}`}
            sx={{ color: "info.contrastText" }}
          >
            <ListItemIcon sx={{ color: "info.contrastText" }}>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText>{phone}</ListItemText>{" "}
          </ListItem>,
        ]}
      />
      <script
        async={true}
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
      ></script>
    </Grid>
  );
}
