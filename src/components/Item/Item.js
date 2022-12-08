import { Link } from 'react-router-dom';
import Card from '../Card/Card';


const Item = (props) => {
  return (
    <div>
        <Link to={`/item/${props.productId}`}>
                <div>{props.title}</div>
                <img src={props.photo} alt={props.title} />
        </Link>
    </div>
  )
}

export default Item