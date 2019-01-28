import React from "react";
import image from './VirtualMirror00007.png'
import { Checkbox } from 'semantic-ui-react'
let base64Icon = 'hello'
let imageS = ''
class Header extends React.Component {
  state = {
    input: 'enter your email here',
    yourImage: './VirtualMirror00007.png'
  };
  
  handleNameChange = (event) => {
    this.setState({ input: event.target.value });
  };
  componentWillMount() {

    console.log('mounted!!!')
    fetch('http://localhost:5000/', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then( async response => {
       // const bing = JSON.parse(response)
        this.setState({yourImage: response.body})
       
        })
    
  }

  componentDidUpdate() {
  console.log(this.state, 'this is the state!')
  base64Icon = this.state.yourImage
  console.log(base64Icon)
  }
  handleEmail = () => {

    console.log(this.state.input)


  const email1 = this.state.input
  let here = this.state.yourImage
  const data = {
    "email": email1 
  }
      fetch('http://localhost:5000/sendmypicture/', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
  }
  render(){
  return(
  <header className="masthead d-flex">
    <div className="container text-center my-auto" style={{width: '50%', marginBottom: '20%'}}>
    <h1 style={{fontWeight: 50, fontSize: 25, color:'#49166d', textAlign: 'left'}}>
Vous êtes superbe!</h1>
<h1 style={{fontWeight: 50, fontSize: 25, color:'#49166d', textAlign: 'left'}}>
Looks great!</h1>
<div height="20" style={{borderTop: '3px solid #66cc00', fontSize: '20px', lineHeight: '20px', marginTop: '1rem', marginBottom: '1rem'}}></div>
    <img style={{width:'100%', height:'60%'}} src={require('./VirtualMirror00007.png')} />
      
      <h3 style={{ fontWeight: 50, fontSize: 25, color:'#49166d',textAlign: 'left'}}>

         enter email to send yourself this picture
      </h3>
        <div style={{display: 'flex', flexDirection: 'column'}}>
      <input value={this.state.input} onChange={this.handleNameChange} style={{marginTop: '1rem', marginBottom: '1rem'}}></input>
      <a className="btn btn-primary btn-xl js-scroll-trigger" onClick={this.handleEmail} href="#about">
        Send Me My Picture!
      </a>
      <div className="overlay" />

    <div style={{textAlign: 'left'}}>
        
    <div style={{fontSize: '12px'}}><input type="checkbox" style={{ backgroundColor: 'initial',
    cursor: 'default',
    color: '#6a2fa2',
    margin: '3px 0.5ex',
    marginTop: '23px',
    padding: 'initial',
    border: 'initial'}}></input>En cliquant sur envoyer, je conscent à recevoir des courriels de la part de Telus. 
   </div>
   <div style={{fontSize: '12px', marginLeft: '18px'}}> By clicking on send, I agree to receive email from Telus.</div>
    </div>
      </div>
    </div>
    <div>
    
    </div>
  </header>
)
}
};
export default Header;
