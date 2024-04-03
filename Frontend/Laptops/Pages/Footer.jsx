import React from 'react'
import { Button, HStack} from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import './Footer.css'
function Footer() {
  return (
    <div>
        <footer className='footer'>
            <div className='footer-main-text'><p className='footer-mainText'>Proudly Made with ❤️ In INDIA</p></div>
              <HStack className='social-media'>
                <Button colorScheme='facebook' leftIcon={<FaFacebook/>} className='elem'>Facebook</Button>
                <Button colorScheme='twitter' leftIcon={<FaTwitter/>}className='elem'>Twitter</Button>
                <Button colorScheme='red' leftIcon={<FaInstagram/>} className='elem'>Instagram</Button>
              </HStack>
              <div className='foot-desc'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum esse animi porro quos debitis maxime repellendus eius nulla? Provident voluptatibus reiciendis et voluptate, perspiciatis eligendi ut tempore reprehenderit, ratione corporis sed minima voluptatum blanditiis ad impedit assumenda necessitatibus, officiis distinctio?</p>
              </div>
        </footer>
    </div>
  )
}

export default Footer