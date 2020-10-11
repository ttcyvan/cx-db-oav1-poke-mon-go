import React, { Component } from "react";
import '../allstyle.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,FormGroup,Label,Input,
  Form} from "reactstrap";

class Datapokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputdata : "",
    };
    
  }

  handleTitle = (event) => {
    this.setState({
      inputdata: event.target.value
    })
    console.log( "1", this.state.inputdata)
}

  updatePokemon(){
    console.log("2", this.state.inputdata)
    var data = document.getElementById('exampleEmail').value;
    console.log('data:', data);
    let result = window.location.pathname.split("/");
    fetch(`http://localhost:4242/pokemons/${result[1]}`, {
    method:"put",
    headers:{"Content-type": "application/json"},
    body: JSON.stringify({
      name:data,
    })
    }).then(response => response.json())
    .then(result => {
      console.log('result:', result)
    }).catch(e => console.error(e));
  }
  

   deletePokemon(){
    let result = window.location.pathname.split("/");
    fetch(`http://localhost:4242/pokemons/${result[1]}`, {
    method:"delete",
    headers:{"Content-type": "application/json"}
    }).then(response => response.json())
    .then(result => {
      alert("vous venez de supprimer ce pokémon")
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
            <CardTitle className="gras">{allpokemon.name}</CardTitle>
            <CardSubtitle className="grastaille">Taille: {allpokemon.height}</CardSubtitle>
            <CardSubtitle className="grastaille">Taille: {allpokemon.weight}</CardSubtitle>
            <CardText>
                {allpokemon.description}
            </CardText>
            <a href ={`/`} onClick={()=>this.deletePokemon()}><Button>Supprimer</Button></a>
            </CardBody>
            <Form>
            <FormGroup>
              <Label className="gras" for="exampleEmail">Modifier le nom du pokemon</Label>
              <Input type="texte" name="name" id="exampleEmail" placeholder={allpokemon.name} value={this.state.name} onInput={this.handleInput}/>
            </FormGroup>
            <a href ={`/`} onClick={()=>this.updatePokemon()}><Button>modifier</Button></a>
            </Form>
        </Card>
       </div>
        
        )}
        
      </div>
    );
  }
}

export default Datapokemon;


