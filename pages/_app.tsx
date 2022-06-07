import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { Global } from "@emotion/react";

import styles from "../public/styles/global.style";
import Layout from "../shared/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            suspense: true,
            staleTime: 5 * 60 * 1000,
          },
        },
      })
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Global styles={styles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
