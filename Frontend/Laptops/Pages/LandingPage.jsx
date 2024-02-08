import { Button, ButtonGroup, HStack, Input, Stack, Tooltip} from '@chakra-ui/react'
import { MdCall} from 'react-icons/md'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { CPseudoBox } from '@chakra-ui/vue'
import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import './LandingPage.css'

function LandingPage(props) {
  const [val,setvalue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if(val<props.data.length-1){
        setvalue(val+1)
      }else{
        setvalue(0)
      }
    }, 3500);
  
    return () => {
      clearInterval(interval)
    }
  }, [val,props.data.length])
  
  const handleClick=()=>{
    if(val<props.data.length-1){
        setvalue(val+1)
    }else{
      setvalue(0)
    }
}
const handleClick1=()=>{
    if(val>0){
        setvalue(val-1)
    }
    else{
      setvalue(props.data.length-1)
    }
}
  return (
    <div>
      <div className='body'>
        <Stack spacing={8} direction='row'>
            <Button colorScheme='blue'>Home</Button>
            <Button variant='outline'>Products</Button>
            <Input color='teal' placeholder='Search Products' _placeholder={{color:'inherit'}} width='700px'></Input>
            <Button rightIcon={<MdCall/>} colorScheme='blue' variant='outline'>contact us</Button>
            <Button colorScheme='pink' variant='solid'>About Us</Button>
        </Stack>
        <div className='hr'></div>
        <div className='body-img'>
          <div className='leftArrow' onClick={handleClick1}><ArrowForwardIosIcon/></div>
          <div className='rightArrow' onClick={handleClick}><ArrowBackIos/></div>
          <div className='body-image-text'>
            <p className='LaptopsName'>{props.data[val].name}</p>
            <img className='body-img-laptop' src={props.data[val].img} alt="" />
            <Button colorScheme='yellow' variant='solid' width="150px">See Details</Button>
          </div>
        </div>
      </div>
        <footer className='footer'>
            <div className='footer-main-text'><p className='footer-mainText'>Proudly Made with ❤️ In INDIA</p></div>
              <HStack className='social-media'>
                <Button colorScheme='facebook' leftIcon={<FaFacebook/>}>Facebook</Button>
                <Button colorScheme='twitter' leftIcon={<FaTwitter/>}>Twitter</Button>
                <Button colorScheme='red' leftIcon={<FaInstagram/>}>Instagram</Button>
              </HStack>
              <div className='foot-desc'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum esse animi porro quos debitis maxime repellendus eius nulla? Provident voluptatibus reiciendis et voluptate, perspiciatis eligendi ut tempore reprehenderit, ratione corporis sed minima voluptatum blanditiis ad impedit assumenda necessitatibus, officiis distinctio?</p>
              </div>
        </footer>
    </div>
  )
}

export default LandingPage