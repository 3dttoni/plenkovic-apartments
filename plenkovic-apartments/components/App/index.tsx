import { AppProps } from "next/app";
import AppHead from "@c/Head";
import Layout from "@c/Layout";
import { Container } from "@mui/material";
import AppFooter from "@c/Footer";
import AppProvider, { IAppContext } from "@c/App/context";
import { ThemeProvider } from "@emotion/react";
import { useMemo } from "react";
import { getTheme } from "@u/theme";
import Background from "@c/Background";

export default function App({
  Component,
  pageProps,
  contact,
  pathname,
  propertyLocation,
}: AppProps & IAppContext) {
  const theme = useMemo(() => getTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <AppProvider
        pathname={pathname}
        contact={contact}
        propertyLocation={propertyLocation}
      >
        <Background />
        <Container
          sx={{
            fontFamily: "Roboto",
            p: { xs: 1 },
          }}
        >
          <AppHead />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <AppFooter />
        </Container>
      </AppProvider>
    </ThemeProvider>
  );
}
