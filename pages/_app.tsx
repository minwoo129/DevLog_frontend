import type { AppProps } from "next/app";
import ContextProvider from "../contexts";
import Layout from "../components/Layout";
import { MenuContextProvider } from "../contexts/MenuContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider contexts={[MenuContextProvider]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
