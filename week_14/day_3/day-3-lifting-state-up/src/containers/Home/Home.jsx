import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";

const Home = ({ products, onAddToCart }) => {
  const handlerAddProduct = (product) => {
    onAddToCart(product);
  };
  return (
    <div className="main-container">
      {products.map((product, index) => {
        return (
          <Link key={index} to={`products/${product.id}`}>
            <Product
              productName={product.name}
              productPrice={product.price}
              onProductButtonClick={() => {
                handlerAddProduct(product);
              }}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
