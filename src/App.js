import "./App.css";
import React, { Fragment } from "react";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import Work from "./Pages/Work";
import About from "./Pages/About";
import { ScrollingProvider, Section } from "react-scroll-section";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="app">
      <ScrollingProvider offset={-145}>
        <Nav />
        <Section id="home">
          <Home />
        </Section>

        <Section id="work">
          <Work />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </ScrollingProvider>
    </div>
  );
}

export default App;
