import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    {
      name: "portfolio",
      description: "Portfolio of applications and class work",
    },
    { name: "resume", description: "My resume and professional information" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <section class="hero">
        <div class="hero-h2">
          <h2>Building my future portfolio!</h2>
        </div>
      </section>
      <main>
        {!contactSelected ? (
          <>
            <About currentCategory={currentCategory}></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
