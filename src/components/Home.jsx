import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Category from "./Category";
import Navbar from "./Navbar";
import { useSelector} from "react-redux";
const Home = () => {
  const theme = useSelector((state) => state.theme);
  
  return (
    <>
      <Navbar  theme={theme}/>
      <Hero theme={theme}/>
      <Category theme={theme}/>
      <Services theme={theme}/>
    </>
  );
};

export default Home;
