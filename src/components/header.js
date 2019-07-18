import React from "react";
// import image from './VirtualMirror00007.png'
import { Checkbox } from 'semantic-ui-react'
let base64Icon = 'hello'
//let imageS = ''
const placeHolder= 'Courriel / Email'
class Header extends React.Component {
  state = {
    
    yourImage: './VirtualMirror00007.png',
    isChecked: false,
    goodEmail: false,
    otherAnswer: 'none'
  };
  
  handleNameChange = (event) => {
    this.setState({ input: event.target.value });

  };
  onChange = () => {
    this.setState({isChecked: !this.state.isChecked})
     console.log(this.state.isChecked)
  }
  componentWillMount() {

    console.log('mounted!!!')
    fetch('http://localhost:4500/', {
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
  handleEmail = async () => {

    console.log(this.state.input)
   if (this.state.input !== /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/) {
       this.setState({goodEmail: !this.state.goodEmail})
   }


  const email1 = this.state.input
  let here = this.state.yourImage
  const data = {
    "email": email1 
  }
     const response = fetch('http://localhost:4500/sendmypicture/', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => {
          this.setState({displayTime: 'none', otherAnswer: 'block'})
      })


  }
  render(){
  return(
  <header className="masthead d-flex" style={{display:`${this.state.displayTime}`}}>
    <div className="container text-center my-auto" style={{width: '100%', marginBottom: '20%', display:`${this.state.displayTime}`}}>
    <h1 style={{fontWeight: 50, fontSize: 25, color:'#49166d', textAlign: 'left'}}>
    Entrez votre courriel, afin de recevoir vos photos.</h1>
    <div height="20" style={{borderTop: '3px solid #66cc00', fontSize: '20px', lineHeight: '20px', marginTop: '1rem', marginBottom: '1rem'}}></div>
   
<h3 style={{ fontWeight: 50, marginBottom: '5rem', fontSize: 25, color:'#49166d',textAlign: 'left'}}>

Enter your email address to get your photos.
</h3> 
        <div style={{display: 'flex', flexDirection: 'column'}}>
      <input id='email' placeholder="Courriel / Email" value={this.state.input} onChange={this.handleNameChange} style={{marginTop: '1rem', marginBottom: '1rem'}}></input>
      
      
      <button style={{fontSize: '23px', fontWeight: 100}}className="btn btn-primary btn-xl js-scroll-trigger" disabled={!this.state.isChecked && !this.state.goodEmail} onClick={this.handleEmail} href="#about">
       Envoyer | Send
      </button>
      <div className="overlay" />

    <div style={{textAlign: 'left'}}>
        
    <div style={{fontSize: '12px'}}><input color="black" type="checkbox" onChange={this.onChange}  style={{ backgroundColor: 'initial',
    cursor: 'default',
    color: '#6a2fa2',
    margin: '3px 0.5ex',
    marginTop: '23px',
    padding: 'initial',
    border: 'initial'}}></input><span style={{fontStyle: 'italic', paddingLeft:'4px'}}>«J’autorise TELUS à communiquer avec moi pour d’éventuelles promotions.»</span>
   </div>
   <div style={{fontSize: '12px', marginLeft: '2px'}}><span style={{fontStyle: 'italic', paddingLeft:'20px'}}>«I authorize TELUS to contact me for future promotions.»</span></div>
    </div>
      </div>
    </div>
    <div>
    
    </div>

    <div style={{ marginLeft: '14rem' , marginTop: 0,display: `${this.state.otherAnswer}`, flexDirection: 'row' ,justifyContent: 'center'}}>
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <h3 style={{ fontWeight: 50, marginBottom: '-10px', fontSize: 25, color:'#49166d'}}>
        <h3>Courriel envoyé!</h3>
      </h3></div>
      <div height="20" style={{borderTop: '3px solid #66cc00', fontSize: '20px', lineHeight: '20px', marginTop: '1rem', marginBottom: '1rem'}}></div>
      <div style={{display: 'block'}}><h3 style={{ fontWeight: 50, fontSize: 25, color:'#49166d',textAlign: 'left'}}>
      <h3> Email Sent!</h3>
      <div style={{ display: 'flex'}}>
                                        <div style={{flexDirection: 'column'}}>
                                        <a href="https://nomads.live"  style={{borderStyle: 'none', border: 0 }}><img src="https://i3.createsend1.com/ei/j/F2/B68/AE7/080023/csfinal/mtlals2019-test-9906db06db028a3c.png" style={{display: 'none', width: '50%', border:0}} alt=""></img> </a>
                                         </div>
                                         <div>
                                             <div>
                                         <a href="https://www.nomads.live/" style={{borderStyle: 'none', border: 0 }}><img src="https://i4.createsend1.com/ei/j/F2/B68/AE7/080023/csfinal/telus-test-9906db06db028a3c.png" style={{display: 'none', width: '100%', border: 0, marginRight: '-120px'}} alt=""></img></a>
                                         </div>
                                         </div>
                                         
                                         </div>
  
        
      </h3></div>
    </div>
  </header>
)
}
};
export default Header;
/*
Entrez votre courriel, afin de recevoir vos photos. Enter your email adddress to get your photos. Envoyer | Send«J’autorise TELUS à communiquer avec moi pour d’éventuelles promotions.»«I authorize TELUS to contact
*/