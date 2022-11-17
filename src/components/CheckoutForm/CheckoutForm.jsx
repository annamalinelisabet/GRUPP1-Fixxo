import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './CheckoutForm.css'
import { clearCart } from '../../store/actions/cartActions'
import { useNavigate } from 'react-router-dom'

const CheckoutForm = () => {

  const { cart, totalAmount } = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')

  const handleOrder = async e => {
    e.preventDefault()

    if(!cart.length){
      setError('Your cart is empty...')
      return
    }

    if(email.trim() === '' || firstName.trim() === '' || lastName.trim() === ''){
      setError('You need to fill out all the information...')
      return
    }
    
    const json = JSON.stringify({ totalAmount, email, firstName, lastName })
    console.log(json)
    // const res = await fetch('https://fixxobackend.azurewebsites.net/api/Orders', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: json
    // })

    // if(res.status === 200) {

      // }
      dispatch(clearCart())
      navigate('/order')     
  } 

  return (
    <form className='m-CheckoutForm' onSubmit={handleOrder}>
        <h5 className='m-order-header'>Customer information</h5>
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" name='email' placeholder='Enter your email'/>
        </div>
        <div className='m-input-div'>
          <div className='input1'>
            <label htmlFor="firstName">First name:</label>
            <input onChange={e => setFirstName(e.target.value)} value={firstName} type="text" name='firstName' placeholder='Enter your first name'/>
          </div>
          <div className='input2'>
            <label htmlFor="lastName">Last name:</label>
            <input onChange={e => setLastName(e.target.value)} value={lastName} type="text" name='lastName' placeholder='Enter your last name'/>
          </div>
        </div>
        { error && <p className='m-error'>{error}</p>}
        <button className='btn-news m-width'>ORDER NOW</button>
        <small>${totalAmount}</small>
    </form>
  );
};

export default CheckoutForm;
