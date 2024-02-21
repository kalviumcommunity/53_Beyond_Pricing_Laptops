import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { Input, InputGroup, InputRightElement, Button, FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../Usecontext/Parentcontext';
import Cookies from 'js-cookie'

function Register() {
    const{login,isLogin}=useContext(Appcontext)
    const [show, setShow] = useState(false);
    const [data, isData] = useState({
        username: "",
        email: "",
        password: "",
    })
    const URL = "http://localhost:3130/register"
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
        axios.post(URL, {username, email, password})
        .then(res=>{console.log(res.data)
        Navigate('/')
        isLogin(!login)
        // localStorage.setItem('token', res.data.token)
        console.log(res.data);
        Cookies.set('token', res.data.token, {expires:30})
        // storeTokenInCk(res.data.token)
        })
        .catch(err => {
            console.log(err);
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
                setErrorMessage(err.response.data.message); // Set error message from server response
            } else if (err.request) {
                // The request was made but no response was received
                console.log(err.request);
                setErrorMessage('No response received from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', err.message);
                setErrorMessage('An unexpected error occurred');
            }
        });
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
                    Register
                </Button>
                {errorMessage && (
                    <FormErrorMessage mt={4} color='red.500'>
                        {errorMessage}
                    </FormErrorMessage>
                )}
            </form>
        </>
  )
}

export default Register