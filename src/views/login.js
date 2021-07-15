import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Loader, Message, FormWrapper } from "../components";
import { login } from '../state/actions/userActions'


const Login = ({location, history}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()

    const { loading, error, userInfo } = useSelector(state => state.userLogin)

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }

    return (
        <FormWrapper>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                    <form onSubmit={submitHandler} className="px-12 pt-6 pb-8 mb-4 bg-white rounded shadow-lg">
                        <h1 className="flex justify-center py-2 mb-4 text-2xl text-gray-800 border-b-2">
                            Sign in
                        </h1>
                        {error && <Message>{error}</Message>}
                        {loading && <Loader></Loader>}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-normal text-gray-700" 
                            for="username">Username</label>
                            <input className="w-full px-3 py-2 leading-tight text-gray-700 
                                border rounded shadow appearance-none focus:outline-none 
                                focus:shadow-outline"name="username"type="username"required autofocus
                                placeholder="Username" value={username} 
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-normal text-gray-700" 
                                for="password">Password
                            </label>
                            <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 
                                border rounded shadow appearance-none focus:outline-none 
                                focus:shadow-outline" type="password" placeholder="Password"
                                name="password" required autocomplete="current-password"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="inline-block px-4 py-2 text-white bg-blue-500 
                                rounded shadow-lg hover:bg-blue-600 focus:bg-blue-700" 
                                type="submit">Sign In
                            </button>
                            <Link className="inline-block text-sm font-normal text-blue-500 
                                align-baseline hover:text-blue-800" to={redirect ? `/register?redirect=${redirect}` : '/register'}
                            > New User? Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </FormWrapper>
    );

}


export default Login;