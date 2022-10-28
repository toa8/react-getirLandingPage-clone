import React from "react";
// COMPONENTS
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Categories from "./components/Categories";
import MobileInfoCard from "./components/MobileInfoCard";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <Categories />
      <MobileInfoCard />
      <CardsSection />
      <Footer />
    </>
  );
};

export default App;
