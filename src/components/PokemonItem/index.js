import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class PokemonItem extends Component {
  state = {Image: '', id: 0}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const {blogData} = this.props
    const {url} = blogData
    const response = await fetch(url)
    const Data = await response.json()
    console.log(Data)
    this.setState({
      Image: Data.sprites.front_default,
      id: Data.id,
    })
  }

  render() {
    const {blogData} = this.props
    const {name} = blogData
    const {Image, id} = this.state
    console.log(id)
    return (
      <Link to={`/about/${id}`}>
        <div className="tta-card">
          <img className="image" src={Image} alt={name} />
          <p className="name">{name.toUpperCase()}</p>
        </div>
      </Link>
    )
  }
}

export default PokemonItem
