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
                  ` Hi, I'm Waleed, a Full-Stack Developer passionate about AI and LLMs, with experience in Python, JavaScript, GoLang and OOP principles.`,
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
                Hi, I'm <b>Waleed</b>, a Full-Stack Developer <b>passionate</b> about AI and LLMs, with experience in Python, JavaScript, GoLang and OOP principles.
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
                  `My journey began in high school building games from YouTube tutorials, and since then, I've developed scalable apps like a food delivery platform and an e-learning system.`,
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
                My journey began in high school <b>building</b> games from YouTube tutorials, and since then, I've <b style={{ color: '#98c379' }}>developed</b> scalable apps like a food delivery platform and an e-learning system.
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
                  `When I'm not coding, you'll find me playing football, hitting the gym, or diving into a good book.`,
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
                 When I'm not <b>coding</b>, you'll find me playing football, hitting the gym, or diving into a good <b>book</b>.
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
                  `Let's build something amazing together — reach out via email or LinkedIn.`,
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
                Let's build something <b>amazing</b> together — reach out via email or LinkedIn
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