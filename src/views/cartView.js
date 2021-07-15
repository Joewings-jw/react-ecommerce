import { useEffect } from "react";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Message } from '../components'
import { addToCart, removeFromCart } from "../state/actions/cartActions";
import { CornerDownRight, Trash } from "react-feather";

const CartView = ({match, location, history}) => {
    const productId = match.params.id
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    console.log(cartItems);

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, quantity))
        }
    }, [dispatch, productId, quantity])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <>
            <h1 className='mb-5 text-2xl font-bold'>Shopping cart</h1>
            {
                cartItems.length === 0 ? (
                    <Message>
                        Your Cart is empty. <Link to ='/'>Go back</Link>
                    </Message>
                ): (
                    <div>
                        {cartItems.map(item => (
                            <div className='grid grid-cols-10 py-3' key={item.product}>
                                <div className='flex items-center col-span-2'>
                                    <img className='inline-block h-20 mx-auto rounded-md' src={item.image} alt={item.name}/>
                                </div>
                                <div className='flex items-center col-span-5'> 
                                    <Link  to={`/product/${item.product}`}>{item.name}</Link>
                                </div>
                                <div className='flex items-center col-span-1'>
                                    Qty:
                                    <select name="quantity" id="quantity" value={item.quantity} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                        {[...Array(item.countInStock).keys()].map(x => (
                                            <option key={x+1} value ={x+1}>{x+1}</option>
                                            ))}
                                    </select>
                                </div>
                                <div className='flex items-center justify-end col-span-1'>
                                    <h2 className=''>${item.price}</h2>
                                </div>
                                <div className='flex items-center px-5'>
                                    <button classNames='' onClick={() => removeFromCartHandler(item.product)}>
                                        <Trash className='feather-icon'/>
                                    </button>
                                </div>
                            </div>
                        ))}
                        <hr/>
                        <div>
                            <div className="grid grid-cols-10">
                                <div className='col-span-8'></div>
                                <div className='col-span-1 space-y-4'>
                                    <h2 className='text-xl text-right'>Subtotal</h2>
                                    <h2 className='text-lg text-right'>
                                        ${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
                                        .toFixed(2)}
                                    </h2>
                                    <button className={cartItems === 0 ? 
                                        'flex items-center justify-center w-full cursor-not-allowed btn' : 
                                        'flex items-center justify-center w-full btn'}>
                                            <CornerDownRight className='w-5 h-5 mr-3'/>
                                            Checkout
                                     </button>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                )
            }
        </>
    );
}
export default CartView;