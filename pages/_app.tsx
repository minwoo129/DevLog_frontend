import Layout from "@/components/Layout";
import ContextProvider from "@/contexts";
import { MenuContextProvider } from "@/contexts/MenuContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider contexts={[MenuContextProvider]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
