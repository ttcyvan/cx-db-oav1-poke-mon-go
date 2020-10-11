import React,{Component} from "react";
import { Container, Jumbotron,CardHeader } from 'reactstrap';
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
      return (
        <div>
          <Jumbotron fluid>
            <Container fluid>
            <CardHeader tag="h3">POKEDEX</CardHeader>
            </Container>
          </Jumbotron>
        </div>
      ); 
    }
}


export default Header;