import React, { useEffect, useState } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function FormCompo() {
  const [Name, setName] = useState('');
  const [image, setImage] = useState('');
  const [RAM_GB, setRam] = useState('');
  const [ROM_GB, setRom] = useState('');
  const [RAM_Type, setRamType] = useState('');
  const [ROM_Type, setRomType] = useState('');
  const [Battery_hrs, setBattery] = useState('');
  const [Operating_System, setOperating] = useState('');
  const [Price, setPrice] = useState('');
  const [Review, setReview] = useState('');

  const navigate = useNavigate();
  const username = sessionStorage.getItem('token')



  const Submit = (e) => {
    e.preventDefault();
    // axios.post("https://five3-beyond-pricing-laptops.onrender.com/Laptops", {
    //     Name, image, RAM_GB, ROM_GB, RAM_Type, ROM_Type, Battery_hrs, Operating_System, Price, Review, user_data
    //   })
    axios.post("https://five3-beyond-pricing-laptops.onrender.com/Laptops", {
        Name, image, RAM_GB, ROM_GB, RAM_Type, ROM_Type, Battery_hrs, Operating_System, Price, Review, username
      })
      .then(res => {
        navigate('/data');
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  
  return (
    <div>
      <Navbar/>
      <form onSubmit={Submit}>
        <FormControl isRequired>
          <FormLabel>Product Name</FormLabel>
          <Input placeholder='Product Name' value={Name} onChange={(e) => setName(e.target.value)} />
          <FormLabel>Image Link</FormLabel>
          <Input placeholder='Image Link' value={image} onChange={(e) => setImage(e.target.value)} />
          <FormLabel>RAM</FormLabel>
          <Input placeholder='RAM' value={RAM_GB} onChange={(e) => setRam(e.target.value)} />
          <FormLabel>ROM</FormLabel>
          <Input placeholder='ROM' value={ROM_GB} onChange={(e) => setRom(e.target.value)} />
          <FormLabel>RAM_TYPE</FormLabel>
          <Input placeholder='RAM_TYPE' value={RAM_Type} onChange={(e) => setRamType(e.target.value)} />
          <FormLabel>ROM_TYPE</FormLabel>
          <Input placeholder='ROM_TYPE' value={ROM_Type} onChange={(e) => setRomType(e.target.value)} />
          <FormLabel>Battery_hrs</FormLabel>
          <Input placeholder='Battery_hrs' value={Battery_hrs} onChange={(e) => setBattery(e.target.value)} />
          <FormLabel>Operating System</FormLabel>
          <Input placeholder='Operating System' value={Operating_System} onChange={(e) => setOperating(e.target.value)} />
          <FormLabel>Price</FormLabel>
          <Input placeholder='Price' value={Price} onChange={(e) => setPrice(e.target.value)} />
          <FormLabel>Write_Review</FormLabel>
          <Input placeholder='Write_Review' value={Review} onChange={(e) => setReview(e.target.value)} />
        </FormControl>
        <br />
        <button type='submit'>ADD</button>
      </form>
    </div>
  );
}

export default FormCompo;
