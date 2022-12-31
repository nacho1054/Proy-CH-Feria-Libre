import { Link } from 'react-router-dom';
import Card from '../Card/Card'

const Item = ({item}) => {

  return (
    <Card product={item} />
  )
}

export default Item