import React from "react";
import { Banner } from "@components/banner";
import { Characters } from "@components/characters";
import { ContactUs } from "@components/contact-us";
import { CtaBanner } from "@components/cta-banner";
import { Footer } from "@components/footer";
import { NewsList } from "@components/news";
import { Gameplay } from "@components/gameplay";

const Home: React.FC = () => {
  return (
    <>
      <Banner/>
      <main>
        <CtaBanner/>
        <Gameplay />
        <Characters/>
        <NewsList/>
        <ContactUs/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
