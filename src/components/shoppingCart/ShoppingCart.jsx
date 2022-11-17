import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { clearCart } from "../../store/actions/cartActions";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cart, totalAmount } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {!cart.length && (
        <div className="p-2 text-center">Your cart is empty</div>
      )}

      {cart.map((item) => (
        <CartProduct key={item.id} item={item} />
      ))}

      <div className="dropdown-divider"></div>
      <div className=" dropdown-products d-flex justify-content-between align-items-center p-2">
        <div>
          <div className="total-p">Total Price: {totalAmount}</div>
          <small className="text-muted">ink. vat</small>
        </div>
        <div>
          <button
            className="btn btn-dark checkout-clear"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <Link to="/checkout">
            <button className="btn btn-light cart-clear">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
