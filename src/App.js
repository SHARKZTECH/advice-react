import './App.css';
import React from "react"
import {Container,Card,Button} from "react-bootstrap"

class App extends React.Component{
  state={advice:''}
  componentDidMount(){
     this.getAdvice()
  }
  getAdvice=()=>{
    fetch("https://api.adviceslip.com/advice")
    .then((res)=>res.json())
    .then(({slip})=>this.setState({advice:slip.advice}))
    .catch(error=>console.error(error))
  }
  render(){
    const {advice}=this.state;
    return(
      <Container>
          <Card className="text-center m-5">
            <Card.Header>EAGLEYE ADVICE</Card.Header>
            <Card.Body>
              <Card.Title>{advice}</Card.Title>
              
              <Button variant="primary" onClick={()=>this.getAdvice()}>GIVE ME ADVICE</Button>
            </Card.Body>
          </Card>
      </Container>
    )
  }
}

export default App;
