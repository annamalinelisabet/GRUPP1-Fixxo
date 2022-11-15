import { useDispatch, useSelector } from 'react-redux'
import CartProduct from './CartProduct'
import { clearCart } from '../../store/actions/cartActions'
import { Link } from 'react-router-dom'

const ShoppingCart = ({checkout}) => {

  const { cart, totalAmount } = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()


  return (
    <div onClick={e => e.stopPropagation()}>

        { !cart.length && (
          <div className='p-2 text-center'>
            Your cart is empty
          </div>
        )}

        { cart.map(item => (
          <CartProduct key={item.id} item={item} />
        )) }

        <div className="dropdown-divider"></div>
        <div className="d-flex justify-content-between align-items-center p-2">
            <div>
                <div>Total Price: { totalAmount }</div>
                <small className='text-muted'>ink. vat</small>
            </div>
            <div>
                <button className='btn btn-warning' onClick={() => dispatch(clearCart())}>Clear Cart</button>
                { !checkout && <Link to='/checkout'><button className='btn btn-info ms-2'>Checkout</button></Link> }
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart