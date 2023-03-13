import ButtonContactUs from "@c/Button/ContactUs";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";

interface CardContactUsProps {
  outlined?: boolean;
}
export default function CardContactUs({
  outlined = false,
}: CardContactUsProps) {
  return (
    <Card
      sx={{ p: 1, minWidth: { md: 220 } }}
      elevation={outlined ? 0 : 5}
      {...(outlined && { variant: "outlined" })}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          Do not wait
        </Typography>
        <Grid container>
          <Grid item mr={1}>
            <BookmarkAddedOutlinedIcon />
          </Grid>
          <Grid>
            <Typography variant="subtitle1" mb={3}>
              Book now
            </Typography>
          </Grid>
        </Grid>
        <ButtonContactUs />
      </CardContent>
    </Card>
  );
}
