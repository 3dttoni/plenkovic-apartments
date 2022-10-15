import { AppProps } from "next/app";
import AppHead from "@c/Head";
import Layout from "@c/Layout";
import { Container } from "@mui/material";
import AppFooter from "@c/Footer";
import AppProvider, { IAppContext } from "@c/App/context";

export default function App({
  Component,
  pageProps,
  contact,
  pathname,
  propertyLocation,
}: AppProps & IAppContext) {
  return (
    <AppProvider
      pathname={pathname}
      contact={contact}
      propertyLocation={propertyLocation}
    >
      <Container
      disableGutters        sx={{
          fontFamily: "Roboto",
          p: { xs: 0 },
        }}
      >
        <AppHead />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <AppFooter />
      </Container>
    </AppProvider>
  );
}
