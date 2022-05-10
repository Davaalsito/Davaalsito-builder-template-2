import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Description } from "../components/description";
import { Product } from "../components/product";
import { Footer } from "../components/footer";
import { Footer1 } from "../components/footer-1";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="flex flex-col">
        <Navbar />
        <Hero />
        <Description />
        <Product />
        <Footer />
        <Footer1 />
      </main>
    </div>
  );
};

export default Home;
