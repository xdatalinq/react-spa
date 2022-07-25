import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <div className="h1-background">
        <h1>
          <a data-testid="link" href="/">
            Tommy Otis
          </a>
        </h1>
      </div>
      <nav>
        <ul className="flex-row">
          <li className="navItem">
            <a
              onClick={() => setContactSelected('about')}
            >
              About me
            </a>
          </li>
          <li className={`navItem ${contactSelected && "navActive"}`}>
            <a onClick={() => setContactSelected('contact')}>Contact</a>
          </li>
          <li className={`navItem ${contactSelected && "navActive"}`}>
            <a onClick={() => setContactSelected('portfolio')}>Portfolio</a>
          </li>
          <li className={`navItem ${contactSelected && "navActive"}`}>
            <a onClick={() => setContactSelected('resume')}>Resume</a>
          </li>

          {/* {categories.map((category) => (
            <li
              className={`navItem ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <a
                onClick={() => {
                  
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </a>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
    
  );
}

export default Nav;
