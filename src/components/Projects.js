import React, {Component} from 'react'
import Inclined from "../Images/InclinedPlane/InclinedPlane3.png";
import Climbr from '../Images/Climbr/ClimbrPicture.png';
import LittleLibrary from "../Images/LittleLibrary/LittleLibrary.png"
import { FaGithub } from 'react-icons/fa'
import { DiHeroku } from 'react-icons/di'

const herokuStyle = {
    fill: 'white',
    backgroundColor: 'purple'
}

class Projects extends Component{
  
    render(){
      // console.log(`this is displayPlanes ${this.state.displayPlanes}`);
      return(
        <div className="projects">
            <h1 className="title">Projects</h1>
            <div className='inclinedPlane'>
                <img className='projectPicture' src = {Inclined} alt='First project' />
                <h3>Inclined Plane </h3>
                <a className='gitHub' href='https://github.com/OwenOrrison/plane-react' target= '_blank'><FaGithub size={25}/></a>
                <a className='heroku' href='https://mighty-stream-87461.herokuapp.com/' target= '_blank'><DiHeroku size={25} style={herokuStyle}/></a>
                <h5>Technology Used</h5>
                  <div>React</div>
                  <div>PostgresQl</div>
                  <div>Ruby on Rails</div>
            </div>
            <div className='Climbr'>
                <img className='projectPicture' src = {Climbr} alt='Last project' />
                <h3>Climbr</h3>
                <a className='gitHub' href='https://github.com/OwenOrrison/Climbr' target= '_blank'><FaGithub size={25}/></a>
                <h5>Technology Used</h5>
                  <div>React-native</div>
                  <div>PostgresQl</div>
                  <div>Express</div>
                  <div>Node.js</div>
            </div>
            <div className='littleLibrary'>
                <img className='projectPicture' src = {LittleLibrary} alt='Group project' />
                <h3>LittleLibrary</h3>
                <a className='gitHub' href='https://github.com/clarkej91/littlelibrary' target= '_blank'><FaGithub size={25}/></a>
                <a className='heroku' href='https://littlelibraryga.herokuapp.com//' target= '_blank'><DiHeroku size={25} style={herokuStyle}/></a>
                <h5>Technology Used</h5>
                  <div>Angular.js</div>
                  <div>MongoDB</div>
                  <div>Express</div>
                  <div>Node.js</div>
            </div>
        </div>
      )
    }
  }
  
  export default Projects