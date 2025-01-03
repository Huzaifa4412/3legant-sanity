import React from "react";
import NotificationBar from "./NotificationBar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";
import BannerGrid from "./BannerGrid";
import OurFeatures from "./OurFeatures";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import Footer from "../Footer";
import Article from "./Article";

const Home = () => {
  return (
    <div>
      <NotificationBar />
      <Navbar />
      <Hero />
      <BannerGrid />
      <FeaturesSection />
      <OurFeatures />
      <Banner />
      <Article />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
