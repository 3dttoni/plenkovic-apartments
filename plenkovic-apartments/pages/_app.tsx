import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppHead from "@c/Head";
import Layout from "@c/Layout";
import { Container } from "@mui/material";
import type { AppProps } from "next/app";
import AOS from "aos";
import { useEffect } from "react";
import AppFooter from "@c/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
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
  );
}

export default MyApp;
