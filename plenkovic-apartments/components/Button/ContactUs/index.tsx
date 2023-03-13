import { AppContext } from "@c/App/context";
import { EventsEnum } from "@e/events";
import { Button } from "@mui/material";
import { analyticsEvent } from "@u/gtag";
import { useContext } from "react";

export default function ButtonContactUs() {
  const {
    contact: { email },
  } = useContext(AppContext);

  return (
    <Button
      variant="contained"
      component="a"
      href={`mailto:${email}`}
      color="info"
      onClick={() => {
        analyticsEvent(EventsEnum.CONTACT_US);
      }}
    >
      Contact us
    </Button>
  );
}
