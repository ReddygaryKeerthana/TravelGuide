import {Component} from 'react'
import Loader from 'react-loader-spinner'

import travelPackageItem from '../travelPackageItem'

import './index.css'

class TravelGuide extends Component {
  state = {travelGuideList: [], isLoading: false}

  componentDidMount() {
    this.getTravelDate()
  }

  getTravelData = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok) {
      const upadatedData = data.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({travelGuideList: upadatedData, isLoading: false})
    }
  }

  renderLoader = () => (
    <div className="Loader" data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTravelPackages = () => {
    const {travelPackageList} = this.state
    return (
      <div className="TravelGuideList">
        {travelPackageList.map(each => (
          <travelPackageItem key={each.id} packageDetails={each} />
        ))}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? this.renderLoader() : this.renderTravelPackages()}
      </div>
    )
  }
}

export default TravelGuide
