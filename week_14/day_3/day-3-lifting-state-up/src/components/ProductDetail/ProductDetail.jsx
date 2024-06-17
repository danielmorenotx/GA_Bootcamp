import { useParams } from "react-router-dom";

const ProductDetail = ({ products, onAddToCart}) => {
  
  const {productId} = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  // product === false
  if(!product) {
    return (<h2> Sorry! Nothing found</h2>)
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-stock">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <p className="product-origin">Origin: {product.origin}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );

};

export default ProductDetail;
