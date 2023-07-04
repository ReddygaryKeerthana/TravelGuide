import './index.css'

const travelPackageItem = props => {
  const packageDetails = props
  const {name, imageUrl, description} = packageDetails
  return (
    <li className="Item">
      <img src={imageUrl} alt={name} />
      <div className="Info">
        <h1 className="ItemHeading">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default travelPackageItem
