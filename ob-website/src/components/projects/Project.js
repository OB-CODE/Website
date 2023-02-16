import React from 'react'
import "./Projects.scss"
import tic1 from './assets/tic1.png'
import tic2 from './assets/tic2.png'
import surf1 from './assets/surf1.png'
import surf2 from './assets/surf2.png'
import poke1 from './assets/poke1.png'
import poke2 from './assets/poke2.png'
import HomeH1 from './assets/HomeH1.png'
import HomeH2 from './assets/HomeH2.png'
import { Link } from '@mui/material'


const Projects = () => {

const allProjects = [
      {
      name: 'Final',
      image1: HomeH1,
      image2: HomeH2,
      gitHub: "https://github.com/OB-CODE/Home-Harvest",
      url: 'https://mitchell-home-harvest.surge.sh/',
      description: [`About:`, `Home Harvest is designed to reduce the barriers of entry for the everyday person trying to grow produce.`, `3 API's intergrated and a personal database.`, `Renders 12 months of weather data in table and graph format.`, `Calculates ideal planting times based off growing conditions for each crop.` ]
      },
      {
      name: 'Pokemon EXPRESS game',
      image1: poke1,
      image2: poke2,
      gitHub: "https://github.com/OB-CODE/pokemon-game",
      url: 'https://github.com/OB-CODE/pokemon-game/blob/main',
      description: [`Requirements:`, `Craft thoughtful user stories together, as a team`, `Manage team contributions and collaboration using a standard Git flow on Github`, `Layout and style your front-end with clean & well-formatted CSS`, `Include separate HTML / CSS / JavaScript files`, `GOAL: Work with other classmates to architect, design, and collaboratively build a product.`]
      },
      {
      name: 'Surf Spot - Currently down (Need to change hositng from Fly.io)',
      image1: surf1,
      image2: surf2,
      gitHub: "https://github.com/OB-CODE/Surf-spot-SEI-Project-2",
      url: '',
      description: [`Requirements:`, `Have at least 2 resources(tables) (more if they make sense) – one representing someone using your application, and one that represents the main functional idea for your app`, `Include sign up/log in functionality(if they make sense), with encrypted passwords & an authorization flow`, `Have complete RESTful routes for at least one of your resources with GET, POST, PATCH, and DELETE`, `DESCRIPTION: Surf Spot allows full CRUD features and is a full stack application build using Ruby. It intergrates with a custome backend API and global weather data.` ]
      },
      {
      name: 'Tic-Tac-Toe',
      image1: tic1,
      image2: tic2,
      gitHub: "https://github.com/OB-CODE/Tic-Tac-Toe",
      url: 'https://ob-code.github.io/Tic-Tac-Toe/',
      description: [`Requirements:`, `Render a game in the browser`, `Switch turns between more than one player`, `Design logic for winning & visually display which player won`, `Include separate HTML / CSS / JavaScript files`, `Use Javascript for DOM manipulation`]
      }

]

  return (
  <section id="projects">
    <div className='projectContainer'>
        <h1>GA COURSE PROJECTS</h1>

          {allProjects.map((project, index) =>
          <div key={index}>
            <h1 className='titles'>Project {4 - index}: {project.name}</h1>
            <div className='eachContainer'>
              <div className="leftDetails">
                <div className='name' >Project Name: {project.name}</div>
                <div className='git'><a href={project.gitHub}>Link to project's GITHUB</a></div>
                <div className='url'><a href={project.url}>Link to LIVE URL</a></div>
                <div className='description'>

                  <p>{project.description[0]}</p>
                  <p className='pad'>- {project.description[1]}</p>
                  <p className='pad'>- {project.description[2]}</p>
                  <p className='pad'>- {project.description[3]}</p>
                  <p className='pad'>- {project.description[4]}</p>
                </div>
              </div>

              <div className="rightContent">
                <div className='images'><img src={project.image1} alt="" /></div>
                <div className='images'><img src={project.image2} alt="" /></div>
              </div>
            </div>   
          </div>
          )}
      </div>
    </section>
  )
}

export default Projects
