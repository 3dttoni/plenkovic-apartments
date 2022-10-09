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
  propertyLocation,
}: AppProps & IAppContext) {
  return (
    <AppProvider contact={contact} propertyLocation={propertyLocation}>
      <Container
        sx={{
          fontFamily: "Roboto",
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
