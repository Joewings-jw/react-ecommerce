import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {ArrowLeftCircle, ShoppingBag } from 'react-feather'
import {listProductDetails} from '../state/actions/productActions'
import { Loader, Message} from '../components'


const ProductView = ({history, match})=>{
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const { loading, error, product } = useSelector(state => state.productDetails)


    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match]) 

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?quantity=${quantity}`)
    }

    return (
        <>
            <div className='mb-5'>
                <Link title='Go Back' to='/' className='py-1 btn'>
                    <ArrowLeftCircle className='mr-0 align-bottom feather-icon'/>
                </Link>
            </div>
            {
                loading ? (
                    <Loader />
                ): error ? (
                    <Message>{error}</Message>
                ): (
                    <div className='flex flex-col md:flex-row'>

                        <div className=' md:w-3/5'>
                            <img className='' src={product.image} alt={product.title}/>
                        </div>
                        <div className='md:w-1/5'>
                            <h3 className='text-4xl leading-none'>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className='md:w-1/5'>
                            <h3 className='text-lg'>Price: <span className='font-bold'>${product.price}</span></h3>
                            <h3>Status: {product.countInStock > 0 ? 'In stock' : 'Out of stock'}</h3>
                            {product.countInStock > 0 && (
                                <div className='my-3'>
                                    Quantity:
                                    <select name="quantity" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                        {[...Array(product.countInStock).keys()].map(x => (
                                            <option key={x+1} value ={x+1}>{x+1}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <div>
                                <button
                                onClick={addToCartHandler}
                                className={product.countInStock === 0 ? 
                                    'flex items-center justify-center w-full cursor-not-allowed btn' : 
                                    'flex items-center justify-center w-full btn'}
                                >
                                    <ShoppingBag className='w-5 h-5 mr-3'/>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
    
}



export default ProductView