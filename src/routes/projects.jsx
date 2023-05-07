import '../styles/Projects.css';
import Nav from '../components/Nav';
import VanillaTilt from 'vanilla-tilt';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { RandomReveal } from 'react-random-reveal'

import React, { useState, useRef, useEffect } from 'react';

import ScholarshipFinder from '../assets/project_img/ScholarshipFinder.jpg';
import bookshop from '../assets/project_img/bookshop.jpg';
import chatbot from '../assets/project_img/chatbot.jpg';

const projects = [
  {
    title: 'CURRENT',
    projects: [
      {
        img: ScholarshipFinder,
        title: 'ScholarshipFinder',
        subtitle: '',
        link: "https://github.com/Yslamguly/ScholarshipFinder",
        description: "ScholarshipFinder is a website that helps students search and find scholarships that match their eligibility criteria. The website aims to simplify the scholarship search process and provide comprehensive information about available scholarships to support students in pursuing their educational goal. The website is built using a combination of React.js for the frontend and Express.js for the backend"
      },
      {
        img: bookshop,
        title: 'Book Shop',
        subtitle: '',
        link: "https://github.com/WaleedMuslem/BookShop",
        description: "Book Shop project is a web application developed using PHP programming language. It aims to provide an online platform for users to browse, search, and purchase books. The project incorporates various features and functionalities to enhance the user experience and facilitate efficient book transactions."
      },
      {
        img: chatbot,
        title: 'Chat Bot',
        subtitle: '',
        link: "https://github.com/WaleedMuslem/ChatBot",
        description: "This is a simple website that showcases the capabilities of the GPT-3.5-Turbo model API. The website is built with a backend using Express.js and a frontend using React."
      },
    ]
  },
]

function Projects() {
  const [projectsReady, setProjectsReady] = useState(false);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".Project-Card"), {
      max: 7,
      speed: 400
    });
  }, []);

  const randomRevealCharacters = ["█","░",'`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?'];

  const circleVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  return (
    <div>
      <Nav color="var(--purple)"/>
      <div className="Projects">


          <motion.div
            initial={{height: 0}}
            animate={{height: 'auto'}}
            transition={{delay: 1.25, duration: 0.5}}
            className="Contact-Line"
            >
              <motion.div
                variants={circleVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 1.5, duration: 0.5 }}
                className="Contact-Line-Circle"
                >
              </motion.div>
          </motion.div>

          <motion.div className="Projects-Header">
            <div className="Projects-Title">
              <TypeAnimation sequence={["",1500,"Projects />", ()=>{setProjectsReady(true)}]} cursor={false} speed={80} />
            </div>
            {
              projectsReady ?
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                className="Projects-Subtitle">
                <RandomReveal
                  isPlaying duration={1.5}
                  characters=""
                  revealEasing='easeInQuad'
                  characterSet={randomRevealCharacters}/>
              </motion.div> :
              null
            }
            
          </motion.div>
          
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: projectsReady ? 1 : 0}}
            transition={{duration: 0.75}}
            className="Projects-Section"
            >
            {/* Project Mapping */}

            {
            projects.map((project, index) => {
              return (
                <>
                  <div className="Projects-List">
                    <div key={index} className={`Projects-${ (index + 1) % 2 === 1 ? "Right" : "Left" } Projects-Section-Title`}>
                      {project.title}
                    </div>
                    {
                      project.projects.map((proj, projindex) => {
                        return (
                          <motion.div
                            className={`Project-Wrapper Card-${ (projindex + index + 1) % 2 === 1 ? "Left" : "Right" }`}
                            >
                            <div 
                              className={`Project-Card `} 
                              key={projindex}
                              onClick={
                                () => {
                                  window.open(proj.link, '__blank');
                                }
                              }>
                              <motion.div
                                className="Project-Image"
                                >
                                <div className="Image-Gradient"></div>
                                <LazyLoadImage
                                  className="Project-Image"
                                  src={proj.img}
                                  alt={proj.title}
                                  />
                                <motion.div className={`Project-Texts Project-Text-${ (projindex + index + 1) % 2 === 1 ? "Left" : "Right" }`}>
                                  <div className={`Project-Name ${proj.title.length > 9 ? "Name-Long" : "Name-Short"}`}>
                                    {proj.title}
                                  </div>
                                  <div className="Project-Subtitle">
                                    {proj.subtitle}
                                  </div>
                                </motion.div>
                              </motion.div>
                              <motion.div
                                className={`Project-Description Desc-${ (projindex + index + 1) % 2 === 1 ? "Left" : "Right" }`}>
                                {proj.description}
                              </motion.div>
                            </div>
                          </motion.div>
                        )
                    })
                    }
                  </div>
                  </>
                )
              })
            }
        </motion.div>
        <div className="Projects-Footer">
          <motion.a
            href="#/contact"
            className="Projects-Contact"
            animate={{color: 'var(--light)'}}
            whileHover={{color: 'var(--blue)', letterSpacing: '0.2rem', scale: 1.1}}>
            get in touch
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Projects;