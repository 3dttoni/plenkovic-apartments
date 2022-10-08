import ButtonContactUs from "@c/Button/ContactUs";
import { Card, CardContent, Typography } from "@mui/material";

export default function HomeContactUsCard() {
  return (
    <Card sx={{ p: 1, minWidth: 220 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Don not wait
        </Typography>
        <Typography variant="subtitle1" mb={2}>
          We might get booked
        </Typography>
        <ButtonContactUs />
      </CardContent>
    </Card>
  );
}
