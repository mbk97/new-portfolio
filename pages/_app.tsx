import "./styles.global.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Suspense, useEffect, useState } from "react";
import PageLoader from "../components/loading/PageLoader";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-02SQXWRNSH"
      />
      <Script strategy="lazyOnload" id="gtm-script">
        {`
         window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-02SQXWRNSH')
        `}
      </Script>
      {isLoading ? <PageLoader /> : <Component {...pageProps} />}
    </>
  );
}
