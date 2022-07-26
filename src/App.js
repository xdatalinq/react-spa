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

  const [contactSelected, setContactSelected] = useState("about");

  function displayPage() {
    switch (contactSelected) {
      case "contact":
        return <ContactForm />;
        break;
      case "portfolio":
        return <Portfolio />;
        break;
      case "resume":
        return <Resume />;
        break;

      default:
        return <About />;
        break;
    }
  }


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
      <main>{displayPage()}</main>
      <footer>
        <div class="footer-content">
          <div class="flex-links">
            <address>
              <a href="https://github.com/xdatalinq" target="_blank">
                GitHub
              </a>
            </address>
            <address>
              <a href="https://linkedin.com" target="_blank">
                LinkedIn
              </a>
            </address>
            <address>
              <a href="https://stackoverflow.com">Stack Overflow</a>
            </address>
          </div>
          <p>&copy; 2022 xDatalinq</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
