import React, { useContext } from "react";
import { Button, ButtonGroup, HStack, Input, Stack, Tooltip} from '@chakra-ui/react'
import { MdCall} from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Appcontext } from "../Usecontext/Parentcontext";
function Navbar() {
    const{login,isLogin} = useContext(Appcontext)
    const Log=()=>{
        isLogin(false)
        window.location.reload()
    }
    return (
        <div>
            <div className="body">
                <Stack spacing={8} direction="row">
                    <Link to={"/"}><Button colorScheme="blue">Home</Button></Link>
                    <Link to={"/data"}>
                        <Button variant="outline">Products</Button>
                    </Link>
                    <Input
                        color="teal"
                        placeholder="Search Products"
                        _placeholder={{ color: "inherit" }}
                        width="700px"
                    ></Input>
                    <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
                        contact us
                    </Button>
                    <Link to='/about'>
                        <Button colorScheme="pink" variant="solid">
                            About Us
                        </Button>
                    </Link>
                    <Link to='/add'>
                        <Button colorScheme="yellow" variant="solid">
                            Add Data
                        </Button>
                    </Link>
                            <Link to={'/Login'}>
                                <Button>
                                    Login
                                </Button>
                            </Link>
                            <Link to={'/Logout'}>
                                <Button onClick={Log}>Logout</Button>                            
                            </Link>
                            <Link to={'/Register'}>
                                <Button>Register</Button>                            
                            </Link>
                </Stack>
                <div className="hr"></div>
            </div>
        </div>
    );
}

export default Navbar;
