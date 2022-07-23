import React from 'react';

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section id="work">
      <div class="flex-container">
        <h2 class="section-title">
          Work
        </h2>
        <div class="section-border">
          <article class="box-wrapper">
            <div class="secondary-box">
              <div>
                <a href="https://xdatalinq.github.io/run-buddy/" target="_blank">
                <img src="./assets/images/runbuddy.png" alt="Run Buddy website preview"></img>
                </a>
              </div>
              <div class="secondary-title">
                <h3>Run Buddy</h3>
                <p>HTML/CSS</p>
              </div>
           </div>
         </article>
          <article class="box-wrapper">
            <div class="secondary-box">
             <div>
                <a href="https://residential-matchmaker.herokuapp.com/" target="_blank">
                <img src="./assets/images/secondarybox5.jpg" alt="Residential Matchmaker website preview"></img>
                </a>
              </div>
              <div class="secondary-title">
                <h3>Residential Matchmaker</h3>
               <p>Javascript/Express/Handlebars</p>
              </div>
           </div>
          </article>
          <article class="box-wrapper">
            <div class="secondary-box">
              <div>
                <img src="./assets/images/secondarybox3.jpg" alt="Calculator website preview"></img>
              </div>
              <div class="secondary-title">
                <h3>Calculator</h3>
                <p>React/JavaScript/CSS</p>
              </div>
            </div>
          </article>
          <article class="box-wrapper">
            <div class="secondary-box">
              <div>
                <img src="./assets/images/secondarybox4.jpg" alt="Pastel puzzles website preview"></img>
              </div>
              <div class="secondary-title">
                <h3>Pastel Puzzles</h3>
                <p>MERN Stack</p>
              </div>
            </div>
          </article>
          </div>
        </div> 
    </section>
  );
}

export default Portfolio;
