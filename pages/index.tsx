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
        <meta name="description" content="Generated by create next app" />
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
