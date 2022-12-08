import './Home.css';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import NavBar from '../../components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import productsAPI from '../../ProductsAPI/ProductsAPI';
import { useParams } from 'react-router-dom';


function Home() {
  
  const [filter, setFilter] = useState("");
  const [products, setProduct] = useState([]);
  const {category} = useParams();

  const getImages = async () => {
    const products = await productsAPI();
    setProduct(products);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="principal_container">
      <h1>¡Bienvenido!</h1>
      <ItemListContainer />
    </div>
  );
}

export default Home;