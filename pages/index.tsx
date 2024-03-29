import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import Head from "next/head";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import {
  GeneralWrapper,
  GlobalStyle,
  Layout,
} from "../globalStyle/GlobalStyle";
import LeftStickyBar from "../components/stickySocials/LeftStickyBar";
import RightStickyBar from "../components/stickySocials/RightStickyBar";
import Projects from "../components/projects/Projects";
import PageLoader from "../components/loading/PageLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Mubarak | Web developer</title>
        <meta name="description" content="Full-stack web developer" />
        <meta
          name="keyword"
          content="portfolio, javascript, web developer, full-stack web developer, React js, Next Js, Styled-components, web development, front-end developer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mubarak | full-stack Web developer"
        />
        <meta
          name="twitter:description"
          content="portfolio, javascript, web developer, full-stack web developer, React js, Next Js, Styled-components, web development, front-end developer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="blob:https://vercel.com/e1235895-eeff-40ed-88cd-ed324b3630d4"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <Navbar />
          <GeneralWrapper>
            <Header />
            <About />
            <Projects />
            <Contact />
          </GeneralWrapper>
          <RightStickyBar />
          <LeftStickyBar />
          <Footer />
        </>
      )}
    </div>
  );
}
