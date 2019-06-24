import React, {Component} from 'react'
import MyProfile from "../Images/mypicture.jpeg";
import '../App.css';
import { FaGithub, FaBluetooth } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { whileStatement } from '@babel/types';
import { FaAngular } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'
import { DiMongodb } from 'react-icons/di'
import { DiNodejs } from 'react-icons/di'
import { DiRuby } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiPostgresql } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'


const angularStyle = {
  color: 'red'
}
const reactStyle = {
  color: 'lightblue'
}
const htmlStyle = {
  color: 'orange'
}
const cssStyle = {
  color: 'blue'
}
const jqueryStyle ={
  color: 'blue'
}
const mongoStyle = {
  color: 'green'
}
const nodeStyle = {
  color: 'green'
}
const jsStyle ={
  color: 'white',
  backgroundColor: 'yellow'
}

class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
        aboutME: false,
    };
  }
  showAboutMe = () => {
    let nowTrue = !this.state.aboutMe;
    this.setState({
      aboutMe: nowTrue,
    })
  } 
  
  render(){
    return(
      <div className="profile">
          <h1 className ='name'>Owen Orrison</h1>
          <div className = 'description'>Web Developer</div>
          <img src ={MyProfile}  alt='me in a park' className = 'profilePicture'></img>
          <div className = 'links'>
              <a className='gitHub' href='https://github.com/OwenOrrison' target= '_blank'><FaGithub size={25}/></a>
              <a className = "linkedIn" href= 'https://www.linkedin.com/in/owenorrison/' target= '_blank'><FaLinkedin size={25}/></a>
          </div>
          <div className= "technologies">
            <h3 className = "aboutMe" >Technologies:</h3>
            <div className = 'frontEnd'>
              <p>Front-End:</p>
              <FaReact style={reactStyle} size={30}/>
              <FaHtml5 style={htmlStyle} size={30}/>
              <FaCss3 style={cssStyle} size={30}/>
              <FaAngular style={angularStyle} size={30}/>
              <DiJqueryLogo style={jqueryStyle} size={30}/>
            </div>
            <div className = 'frontEnd'>
            <p>Back-End:</p>
            <DiNodejs style={nodeStyle} size={30} />
            <DiPostgresql style = {cssStyle} size={30} />
            <DiMongodb style={mongoStyle} size={30} />
            <DiMysql style = {cssStyle} size ={30} />
            </div>
            <div className = 'frontEnd'>
            <p>Languages:</p>
            <DiJavascript1 style = {jsStyle} size={30} />
            <DiRuby style = {angularStyle} size={30} />
            </div>
          </div>
          <div>
            <h4 className="aboutMe" onClick= {this.showAboutMe}>About Me</h4>
          </div>
          { this.state.aboutMe ?
          <div className= "brandStatement">
            <p>
              I am a full-stack developer with a passion for solving problems. I relish opportunities to dive into the details to fix what needs to be and perfect what can be.
            </p>
          </div>: null}
      </div>
    )
  }
}

export default Profile