import AppHead from "@c/Head";
import Layout from "@c/Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <AppHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  );
}

export default MyApp;
