import './styles.css'

function ItemRepositoryList({title, description}) {
  return (
  <div>
    <p className="repositories__item--title">{title}</p>
    <p className="repositories__item--description">{description}</p>
    <hr />
  </div>
  )
}

export default ItemRepositoryList;
