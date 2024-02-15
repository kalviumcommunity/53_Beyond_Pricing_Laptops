import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { Input, InputGroup, InputRightElement, Button, FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../Usecontext/Parentcontext';
import Cookies from 'js-cookie'

function Login() {
    const{login,isLogin}=useContext(Appcontext)
    const [show, setShow] = useState(false);
    const [data, isData] = useState({
        username: "",
        email: "",
        password: "",
    })
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate()

    const handleClick = () => setShow(!show);


    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        isData({
            ...data,
            [name]: value,
        })
    }
    var username = data.username
    var email = data.email
    var password = data.password
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        axios.post("http://localhost:3130/register", {username, email, password})
        .then(res=>{console.log(res.data)
        Navigate('/')
        isLogin(!login)
        // localStorage.setItem('token', res.data.token)
        Cookies.set('token', res.data.token, {expires:30})
        // storeTokenInCk(res.data.token)
        })
        .catch(err=>console.log(err))
    };

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>username</FormLabel>
                    <Input type='text' name='username' value={data.username} onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' name='email' value={data.email} onChange={handleChange} />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            value={data.password}
                            onChange={handleChange}
                            name='password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Button mt={4} colorScheme='teal' type='submit'>
                    Login
                </Button>
                {errorMessage && (
                    <FormErrorMessage mt={4} color='red.500'>
                        {errorMessage}
                    </FormErrorMessage>
                )}
            </form>
        </>
    );
}

export default Login;
