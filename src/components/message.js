import { Info } from 'react-feather'

const Message = ({ children}) => {
    return (
        <div className="px-4 py-3 my-2 bg-orange-300 border-t-4 rounded-b shadow-md border-teal text-teal-darkest" role="alert">
            <div className="flex">
                <div className='flex items-center justify-center'>
                    <Info className='feather-icon'/>
                </div>
                <div>
                    <p className="font-bold">You might want to double check or try again:</p>
                    <p className="text-sm">{children}</p>
                </div>
            </div>
        </div>
    );
}


export default Message;