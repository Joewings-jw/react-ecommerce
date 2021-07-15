import { Link } from 'react-router-dom'

const Product = ({product}) => {
    return (
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto mb-5">
        <Link className='inline-block w-full min-w-xs' to={`/product/${product._id}`}>
            <img src={product.image} className="inline-block w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md min-w-xs" alt={product.name}/>
        </Link>

        <Link to={`/product/${product._id}`}>
            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64">
                <h3 className="px-3 py-2 font-bold tracking-wide text-center text-gray-800 uppercase">{product.name}</h3>
                
                <div className="flex items-center justify-between px-3 py-2 bg-gray-200">
                    <span className="font-bold text-gray-800 ">${product.price}</span>
                </div>
            </div>
        </Link>
    </div>
    );
}

export default Product;