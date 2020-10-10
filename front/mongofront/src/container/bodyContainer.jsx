import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

class BodyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4242/pokemons/")
      .then((response) => response.json())
      .then((alldata) => this.setState({data : alldata}));
  }


  render() {
      console.log(this.state.data)
    return (
      <div>
        <hr className="my-4" />
        {this.state.data.map((allpokemon)=>
        <div key={allpokemon.id}> 
            <Card >
                
            <CardImg
            top
            width="100%"
            src={allpokemon.sprite}
            alt="Card image cap"
            />

            <CardBody>
            <CardTitle>{allpokemon.name}</CardTitle>
            <CardSubtitle>Taille: {allpokemon.height}</CardSubtitle>
            <CardText>
                {allpokemon.description}
            </CardText>
            <a href ={`/${allpokemon.name}`}><Button>Details</Button></a>
            </CardBody>
        </Card>
       </div>
        
        )}
        
      </div>
    );
  }
}

export default BodyContainer;

