import '../styles/Skills.css'
import Nav from '../components/Nav'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

import Skill from '../components/Skill'

// SKILLS DATABASE
import reactimg from '../assets/images/reactjs.png';
import express from '../assets/images/express.png';
import nodeimg from '../assets/images/node.png';
import phpimg from '../assets/images/php.png';
import csharpimg from '../assets/images/csharp.png';
import postman from '../assets/images/postman.png';
import java from '../assets/images/java.png';
import pandas from '../assets/images/pandas_white.svg';
import matplotlib from '../assets/images/matplotlibsmall.svg';
import numpy from '../assets/images/numpy.svg';
import golang from '../assets/images/Go-Logo.png';


const skills = [
  { 
    command: 'webdev',
    comment: 'click anywhere to continue',
    data: [
      {
        image: reactimg,
        name: 'ReactJS',
        level: 7,
        description: 'quite good',
      },
      {
        image: express,
        name: 'ExpressJS',
        level: 7,
        description: 'working on it'
      },
      {
        image: nodeimg,
        name: 'NodeJS',
        level: 8,
        description: 'quite good'
      },
    ]
  },
  { 
    command: 'webdev2',
    comment: 'click anywhere to continue',
    data: [
      {
        image: golang,
        name: 'Golang',
        level: 7,
        description: 'quite good',
      },
      {
        image: postman,
        name: 'POSTMAN',
        level: 8,
        description: 'quite good',
      },
      {
        image: phpimg,
        name: 'PHP',
        level: 4,
        description: 'getting the hang of it'
      },
    ]
  },
  { 
    command: 'OOP',
    comment: 'click anywhere to continue',
    data: [
      {
        image: java,
        name: 'JAVA',
        level: 7,
        description: 'quite good',
      },
      {
        image: csharpimg,
        name: 'C#',
        level: 8,
        description: 'really good'
      },
    ]
  },
  { 
    command: 'data Science',
    comment: "wait, there's more?",
    data: [
      {
        image: pandas,
        name: 'PANDAS',
        level: 6,
        description: 'good',
      },
      {
        image: matplotlib,
        name: 'MATPLOTLIB',
        level: 6,
        description: 'good'
      },
      {
        image: numpy,
        name: 'NUMPY',
        level: 6,
        description: 'good'
      },
    ]
  }
]

function SkillsMap(skills) {
  return(
    skills.map((skill, index) => {
      return(
        <motion.div
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{delay: 0 + (index*0.125), duration: 0.5,}}>
          <Skill
            image={skill.image}
            name={skill.name}
            level={skill.level}
            date={skill.date}
            description={skill.description}
            key={"skill-"+index}
          />
        </motion.div>
      )
    })
  )
}

function Skills() {

  const [typing, setTyping] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [skillsState, setSkillsState] = useState(0);
  const [isReadyForComment, setIsReadyForComment] = useState(false);

  return(
    <div>
      <Nav color="var(--red)"/>
      <div className="Skills">
        <motion.div
          className="Terminal"
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{delay: 1.25, duration: 0.5}}
          onAnimationComplete={() => {
            setIsReady(true)
          }}
          onClick={
            () => {
              if(typing){
                return
              }
              if(skillsState < skills.length-1) {
                setSkillsState(skillsState+1)
                setTyping(true)
              } else
              {
                setSkillsState(0)
                setTyping(true)
              }
            }
          }>
          <motion.div className="Window">
            <div className="TitleBar">
              <div className="Icons">
                <div className="Icon"></div>
                <div className="Icon"></div>
                <div className="Icon"></div>
              </div>
              <div className="Title">SKILLS</div>
            </div>
              <div className="Content">
                <div className="Line">
                  <div className="Prompt">Waleed@dev:~$</div>
                  {
                    isReady ? 
                    <div className="Command">
                      {
                        typing ?
                        <TypeAnimation sequence={[`skills ${skills[skillsState].command}`,750,()=>{setTyping(false);setIsReadyForComment(true)}]} /> :
                        <>skills {skills[skillsState].command}</> 
                      }
                    </div> :
                  null
                  }
                </div>

                <div className={`Showcase Grid-${skills[skillsState].data.length > 3 ? 3 : skills[skillsState].data.length}`} >
                  { typing ? null : SkillsMap(skills[skillsState].data) }
                </div>

                <div className="Line">
                  {
                    typing ?
                    null : 
                    <div className="Command">
                      {
                        isReadyForComment ?
                        <TypeAnimation sequence={["",1000,`>> page ${skillsState + 1}/${skills.length} (${skills[skillsState].comment})`]} speed={80}/>
                        : <></>
                      }
                    </div> 
                  }
                    
                </div>

              </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills