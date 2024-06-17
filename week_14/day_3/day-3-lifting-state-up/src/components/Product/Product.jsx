const Product = ({ productName, productPrice, onProductButtonClick }) => {
  const handleOnClick = (event) => {
    event.preventDefault();
    onProductButtonClick()
  }
  return (
      <div className="product-card">
        <h2 className="product-name">{productName}</h2>
        <p className="product-price">${productPrice}</p>
        <button onClick={handleOnClick}>Add to Cart</button>
      </div>
  );
};

export default Product;
