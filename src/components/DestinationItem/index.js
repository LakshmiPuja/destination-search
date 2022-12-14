// Write your code here
import './index.css'

const DestinationItems = props => {
  const {destinationsDetails} = props
  const {imgUrl, name} = destinationsDetails
  return (
    <li className="list-item">
      <div className="container">
        <img src={imgUrl} className="image" alt={name} />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItems
