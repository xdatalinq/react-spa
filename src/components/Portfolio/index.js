import React from 'react';
import runbuddy from '../../assets/images/runbuddy.png';
import secbox1 from '../../assets/images/secondarybox1.jpg';
import secbox2 from '../../assets/images/secondarybox2.jpg';
import secbox3 from '../../assets/images/secondarybox3.jpg';
import secbox4 from '../../assets/images/secondarybox4.jpg';
import secbox5 from '../../assets/images/secondarybox5.jpg';

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section data-testid="work">
      <div className="flex-container">
        <h2 className="section-title">
          Work
        </h2>
        <div className="section-border">
          <article className="box-wrapper">
            <div className="secondary-box">
              <div>
                <a href="https://xdatalinq.github.io/run-buddy/" target="_blank">
                <img src={runbuddy} alt="Run Buddy website preview"/>
                </a>
              </div>
              <div className="secondary-title">
                <h3>Run Buddy</h3>
                <p>HTML/CSS</p>
              </div>
           </div>
         </article>
          <article className="box-wrapper">
            <div className="secondary-box">
             <div>
                <a href="https://residential-matchmaker.herokuapp.com/" target="_blank">
                <img src={secbox5} alt="Residential Matchmaker website preview"></img>
                </a>
              </div>
              <div className="secondary-title">
                <h3>Residential Matchmaker</h3>
               <p>Javascript/Express/Handlebars</p>
              </div>
           </div>
          </article>
          <article className="box-wrapper">
            <div className="secondary-box">
              <div>
                <a href="https://damp-hamlet-71190.herokuapp.com/" target="_blank">
                <img src={secbox3} alt="Calculator website preview"></img>
                </a>
              </div>
              <div className="secondary-title">
                <h3>Budget Tracker</h3>
                <p>Progressive Web App</p>
              </div>
            </div>
          </article>
          <article className="box-wrapper">
            <div className="secondary-box">
              <div>
                <a href="https://damp-hamlet-71190.herokuapp.com/" target="_blank">
                <img src={secbox4} alt="Pastel puzzles website preview"></img>
                </a>
              </div>
              <div className="secondary-title">
                <h3>Social Media Network API</h3>
                <p>Express</p>
              </div>
            </div>
          </article>
          <article className="box-wrapper">
            <div className="secondary-box">
              <div>
                <img src={secbox2} alt="Calculator website preview"></img>
              </div>
              <div className="secondary-title">
                <h3>Calculator</h3>
                <p>React/JavaScript/CSS</p>
              </div>
            </div>
          </article>
          <article className="box-wrapper">
            <div className="secondary-box">
              <div>
                <a href="https://github.com/xdatalinq/react-spa" target="_blank">
                <img src={secbox1} alt="Pastel puzzles website preview"></img>
                </a>
              </div>
              <div className="secondary-title">
                <h3>Single Page Application</h3>
                <p>React/JSX</p>
              </div>
            </div>
          </article>
          </div>
        </div> 
    </section>
  );
}

export default Portfolio;
