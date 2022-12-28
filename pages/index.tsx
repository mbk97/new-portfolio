import React, { useEffect } from "react";
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

export default function Home() {
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
        <meta
          name="twitter:title"
          content="Mubarak | full-stack Web developer"
        />
        <meta
          name="twitter:description"
          content="portfolio, javascript, web developer, full-stack web developer, React js, Next Js, Styled-components, web development, front-end developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </div>
  );
}
