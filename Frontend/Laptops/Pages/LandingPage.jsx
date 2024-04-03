import { Button} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import './LandingPage.css'
import images from '../Laptops_Images_data/ImageData'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function LandingPage() {
  const [val,setvalue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if(val<images.length-1){
        setvalue(val+1)
      }else{
        setvalue(0)
      }
    }, 3500);
  
    return () => {
      clearInterval(interval)
    }
  }, [val,images.length])
  
  const handleClick=()=>{
    if(val<images.length-1){
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
      setvalue(images.length-1)
    }
}
  return (
    <div>
        <Navbar/>
      <div className='body'>
        <div className='body-img'>
          <div className='leftArrow' onClick={handleClick1}><ArrowForwardIosIcon/></div>
          <div className='rightArrow' onClick={handleClick}><ArrowBackIos/></div>
          <div className='body-image-text'>
            <p className='LaptopsName'>{images[val].name}</p>
            <img className='body-img-laptop' src={images[val].img} alt="" />
            <Link to='/data'>
              <Button colorScheme='yellow' variant='solid' className='button'>See Details</Button>
            </Link>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default LandingPage