import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class About extends Component {
  state = {blogData: {}, isLoading: true, image: '', fact: ''}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(this.props)

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    const urlData = data.abilities[0].ability.url
    const response2 = await fetch(urlData)
    const data2 = await response2.json()
    const data3 = data2.effect_entries.filter(
      each => each.language.name === 'en',
    )
    console.log(data3[0].effect)
    const updatedData = {
      abilities: data.abilities,
      baseExperience: data.base_experience,
      forms: data.forms,
      gameIndices: data.game_indices,
      height: data.height,
      heldItems: data.held_items,
      id: data.id,
      isDefault: data.is_default,
      locationAreaEncounters: data.location_area_encounters,
      moves: data.moves,
      name: data.name,
      order: data.order,
      pastTypes: data.past_types,
      species: data.species,
      sprites: data.sprites,
      stats: data.stats,
      types: data.types,
      weight: data.weight,
    }
    console.log(updatedData)
    this.setState({
      blogData: updatedData,
      isLoading: false,
      image: data.sprites.front_shiny,
      fact: data3[0].effect,
    })
  }

  renderBlogItemDetails = () => {
    const {blogData, image, fact} = this.state
    const {height, weight, name} = blogData

    return (
      <div className="details-card-container">
        <div>
          <img className="pokemon-image" src={image} alt={name} />
        </div>
        <div>
          <h2>{name.toUpperCase()}</h2>
          <h4>{fact}</h4>
          <p>{`Weight --  ${weight}g`}</p>
          <p>{`Height --  ${height}m`}</p>
          <Link to="/">
            <button className="button" type="button">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        <h1 className="details">Details view</h1>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default About
