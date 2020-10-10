import React,{Component} from "react";
import { Container, Jumbotron } from 'reactstrap';
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
      return (
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h5 className="display-3">POKEDEX</h5>
            </Container>
          </Jumbotron>
        </div>
      ); 
    }
}


export default Header;