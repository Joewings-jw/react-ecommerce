import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../state/actions/productActions'
import { Loader, Message, Product} from '../components'

const HomeView = () => {
    const dispatch = useDispatch()
    const {loading, error, products} = useSelector(state => state.productList)
    

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]) 

    return (
        <>
            <div className="mx-16">
                <h1 className='mb-5 text-2xl font-bold'>Latest products</h1>
                {
                    loading ? (
                        <Loader>lo...ading</Loader>
                    ): error ? (
                        <Message>{error}</Message>
                    ):(
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {products.map(product => 
                            <div key={product._id}>
                                <Product product={product}/>
                            </div>
                        )}
                    </div>
                    ) 
                }
            </div>
          
        </>
    );



}

export default HomeView;