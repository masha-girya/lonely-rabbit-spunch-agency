import React from "react";
import { Banner } from "@components/banner";
import { Characters } from "@components/characters";
import { ContactUs } from "@components/contact-us";
import { CtaBanner } from "@components/cta-banner";
import { Footer } from "@components/footer";
import { NewsList } from "@components/news";
import { PhotoBlock } from "@components/photo-block";
import { VideoBlock } from "@components/video-block";

const Home: React.FC = () => {
  return (
    <>
      <Banner/>
      <main>
        <CtaBanner/>
        <VideoBlock/>
        <PhotoBlock/>
        <Characters/>
        <NewsList/>
        <ContactUs/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
