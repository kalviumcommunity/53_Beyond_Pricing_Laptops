import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { Input, InputGroup, InputRightElement, Button, FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../Usecontext/Parentcontext';

function Login() {
    const{login,isLogin}= useContext(Appcontext)
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate()

    const handleClick = () => setShow(!show);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://five3-beyond-pricing-laptops.onrender.com/Login', { username: email, password });
            console.log(response.data); // Do something with the response, like redirecting to another page
            isLogin(true)
            Navigate('/')

        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' value={email} onChange={handleEmailChange} />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            value={password}
                            onChange={handlePasswordChange}
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
