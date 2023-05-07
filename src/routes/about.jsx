import Nav from '../components/Nav';
import '../styles/About.css'
import {
  motion,
} from "framer-motion";
import {
  useState
} from 'react';
import { TypeAnimation } from 'react-type-animation';

const Comment = (paragraphState) => {
    switch (paragraphState) {
      case 1:
        return ( "//click anywhere to continue" );
      case 2:
        return ( "//two more times" );
      case 3:
        return ( "//three of four" );
      case 4:
        return ( "//last one" );
      default:
        return ( "//Click anywhere to continue" );
    }
}

const Paragraph = ({ paragraphState, typing, setTyping }) => {

  const renderParagraph = () => {
    switch (paragraphState) {
      case 1:
        return (
          <motion.p className={"Paragraph About-1"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  ` Hi there! My name is Waleed I'm currently a second-year CS student at Eszterházy Károly Catholic University, Hungary.
                  and I'm passionate about using technology to solve real life problem.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : (
              // Hi there! My name is [Your Name], and I'm currently a second-year student at Eszterhazy Karoly Catholic University in Hungary. 
              //I'm pursuing a degree in [Your Major], and I'm passionate about using technology to solve real life problems
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                Hi there! My name is <b>Waleed</b> I'm currently a second-year CS student at Eszterházy Károly Catholic University, Hungary.
                and I'm<b> passionate</b> about using technology to solve real life problem.
              </motion.span>
            )}
          </motion.p>
        );
      case 2:
        return (
          <motion.p className={"Paragraph About-2"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `In high school, I tried developing games by watching tutorials on YouTube,
                  and I fell in love with programming. Despite pursuing a degree in Computer Science in college, I spent most of my time learning programming on my own through
                  online resources.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : (
              //I'm a junior software engineer with a passion for learning and staying up-to-date with the latest technologies. 
              //I'm also adaptable and flexible, able to pivot quickly when requirements change or unexpected challenges arise. I have a strong grasp of the fundamentals of software development and a solid understanding of OOP principles, 
              //I'm able to build scalable, reliable systems using C# and Java. I also have experience working with popular web development frameworks like React and Express.js. I also possess a strong knowledge of databases and database management systems.
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                In high school, I tried developing games by watching tutorials on YouTube,
                and I fell in love with <b>programming</b>. Despite pursuing a degree in Computer Science in college, I spent most of my time <b style={{ color: '#98c379' }}>learning</b> programming on my own through
                online resources.
              </motion.span>
            )}
          </motion.p>
        );
      case 3:
        return (
          <motion.p className={"Paragraph About-3"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `I have a strong grasp of the fundamentals of software development and a solid understanding of OOP principles, 
                  I'm able to build scalable, reliable systems using C# and Java.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : ( 
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                 I have a strong grasp of the <b>fundamentals of software</b> development and a solid understanding of OOP principles, 
                 I'm able to build scalable, reliable <b>systems</b> using C# and Java.
              </motion.span>
            )}
          </motion.p>
        );
      case 4:
        return (
          <motion.p className={"Paragraph About-4"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `I'm excited to share some of my projects with you, and I hope you find them interesting and informative.
                  Thank you for taking the time to visit my portfolio, and please don't hesitate to contact me if you have any questions or feedback.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : ( 
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                I'm excited to share some of my <b>projects</b> with you, and I hope you find them interesting and informative.
                Thank you for taking the time to visit my <b>portfolio</b>, and please don't hesitate to contact me if you have any questions or feedback.
              </motion.span>
            )}
          </motion.p>
        );
      default:
        return null;
    }
  };

  return <>{renderParagraph()}</>
}

function About() {

  const [paragraphState, setParagraphState] = useState(1);
  const [typing, setTyping] = useState(true);



  return(
      <div>
        <Nav color="var(--green)"/>
        <div className="About" onClick={()=>{
          if (paragraphState === 5 && typing === false) {
            setParagraphState(1);
            setTyping(true);
          } else if ( paragraphState < 5 && typing === false){
            setParagraphState(paragraphState + 1);
            setTyping(true);
          }
        }}>
            <p className="Comment">
              {typing ? null : 
              <TypeAnimation 
                sequence={
                  [Comment(paragraphState)]
                }
                speed={80}
                />
                }
              {
                paragraphState === 5 ?
                <TypeAnimation 
                sequence={
                  ["//check these out"]
                }
                speed={80}
                /> : null
              }
            </p>
            <Paragraph paragraphState={paragraphState} typing={typing} setTyping={setTyping}/>
            <motion.div
              className="Hyperlinks"
              initial={{opacity: 0}}
              animate={{
                opacity: paragraphState === 5 ? 1 : 0,
                }}
              transition={{
                duration: 0.75,
              }}>
                <motion.a
                  animation={{
                    y: paragraphState === 5 ? 0 : 250,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  whileHover={{
                    letterSpacing: "0.25rem",
                    color: "var(--red)",
                  }}
                  style={{
                    pointerEvents: paragraphState === 5 ? "all" : "none",
                  }}
                  href="/#/skills">
                    skills
                  </motion.a>
                <motion.a
                  animation={{
                    y: paragraphState === 5 ? 0 : 250,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  whileHover={{
                    letterSpacing: "0.25rem",
                    color: "var(--purple)",
                  }}
                  style={{
                    pointerEvents: paragraphState === 5 ? "all" : "none",
                  }}
                  href="/#/projects">
                    projects
                  </motion.a>
                
                <motion.a
                  animation={{
                    y: paragraphState === 5 ? 0 : 250,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  whileHover={{
                    letterSpacing: "0.25rem",
                    color: "var(--green)",
                  }}
                  style={{
                    pointerEvents: paragraphState === 5 ? "all" : "none",
                  }}
                  onClick={()=>{setParagraphState(1);setTyping(true)}}>
                    <b>read again</b>
                  </motion.a>
            </motion.div>
        </div>
      </div>
    )
}

export default About;