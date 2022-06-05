import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { Global, css } from "@emotion/react";
import styles from "../public/styles/global.style";

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
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
