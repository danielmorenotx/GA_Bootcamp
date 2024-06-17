import { FaCartArrowDown } from "react-icons/fa";

const Cart = ({ count }) => {
  return (
    <div className="cart-icon">
      <FaCartArrowDown size={"3em"}/>
      {count > 0 && <span className="cart-count">{count}</span>}
    </div>
  );
}

export default Cart
