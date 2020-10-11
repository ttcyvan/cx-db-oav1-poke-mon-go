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

class Datapokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

   deletePokemon(name:any){
    fetch(`http://localhost:4242/pokemons/${name}`)
    .then(response => response.json())
    .then(result => {
      console.log('result:', result)
    }).catch(e => console.error(e));
}

  componentDidMount() {
    let tab = []
    let result = window.location.pathname.split("/");
    fetch(`http://localhost:4242/pokemons/${result[1]}`)
      .then((response) => response.json())
      .then((alldata) =>{
        tab.push(alldata);
        this.setState({data : tab})
      });

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
            <a href ={`/`} onClick={()=>this.deletePokemon(allpokemon.name)}><Button>Supprimer</Button></a>
            </CardBody>
        </Card>
       </div>
        
        )}
        
      </div>
    );
  }
}

export default Datapokemon;


