import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import { useEffect } from "react";
import App from "@c/App";
import { IAppSettings } from "@m/appSettings";
import { getAppSettings } from "@u/contentful";
import { IAppContext } from "@c/App/context";

function MyApp(props: AppProps & IAppContext) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <App {...props} />;
}

export default MyApp;

// TODO: Remove getInitialProps
MyApp.getInitialProps = async function ({ctx}: any): Promise<IAppContext> {
  const data: IAppSettings = await getAppSettings();
  const settings = data.appSettingsCollection.items[0];

  return {
    contact: {
      phone: settings.contactPhone,
      email: settings.email,
    },
    propertyLocation: settings.propertyLocation,
    pathname: ctx.pathname,
  };
};
