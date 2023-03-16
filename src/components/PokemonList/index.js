import {Component} from 'react'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import PokemonItem from '../PokemonItem'

import './index.css'

class PokemonList extends Component {
  state = {pokemonData: []}

  componentDidMount() {
    this.getPokemonData()
  }

  getPokemonData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const Data = await response.json()
    console.log(Data)
    this.setState({pokemonData: Data.results})
  }

  render() {
    const {pokemonData} = this.state
    return (
      <div className="blog-list-container">
        <h1 className="main-heading">List of Pokemon</h1>
        <p className="description">Click on the card to get detailed view.</p>
        <div className="container">
          {pokemonData.map(item => (
            <PokemonItem blogData={item} key={item.name} />
          ))}
        </div>
      </div>
    )
  }
}

export default PokemonList
