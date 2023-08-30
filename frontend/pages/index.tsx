import { Banner } from "@components/banner";
import { Characters } from "@components/characters";
import { ContactUs } from "@components/contact-us";
import { CtaBanner } from "@components/cta-banner";
import { Footer } from "@components/footer";
import { News } from "@components/news";
import { PhotoBlock } from "@components/photo-block";
import { VideoBlock } from "@components/video-block";
import React from "react";

const Home: React.FC = () => {
  return (
    <main>
      <Banner/>
      <CtaBanner/>
      <VideoBlock/>
      <PhotoBlock/>
      <Characters/>
      <News/>
      <ContactUs/>
      <Footer/>
    </main>
  );
};

export default Home;
