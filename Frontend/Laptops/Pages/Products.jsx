import React from 'react'
import Navbar from './Navbar'
import { Card, CardBody, CardFooter, Heading, Text, Button, Stack, Image, Divider, ButtonGroup, useDisclosure, Collapse, Box} from '@chakra-ui/react'
import './Products.css'

function Products() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <div>
      <Navbar />
      <div className='product-cart'>
        <Card maxW='md'>
          <CardBody>
            <Image
              src='https://m.media-amazon.com/images/I/71DBkrxqBDL._SX679_.jpg'
              alt='Asus Vivobook S15'
              borderRadius='md'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Asus Vivibook S15</Heading>
              <Text>
                <li>Intel core i5 12th Gen</li>
                <li>16GB Ram</li>
                <li>512GB SSD</li>
                <li>15.6 Inch OLED Display</li>
                <li>7hrs Battery Life</li>
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                ₹ 69,999.00
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW='md'>
          <CardBody>
            <Image
              src='https://m.media-amazon.com/images/I/71h9nOTd93L._SX679_.jpg'
              alt='Hp Victus'
              borderRadius='md'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Hp Victus</Heading>
              <Text>
                <li>Intel core i5 12th Gen Processor</li>
                <li>16GB RAM</li>
                <li>512GB SSD</li>
                <li>15 Inch IPS Display</li>
                <li>10Hrs Battery</li>

              </Text>
              <Text color='blue.600' fontSize='2xl'>
                ₹ 67,999.00
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW='md'>
          <CardBody>
            <Image
              src='https://m.media-amazon.com/images/I/81UWgnVKDBL._SX679_.jpg'
              alt='ASUS TUF F-15'
              borderRadius='md'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>ASUS TUF F-15</Heading>
              <Text>
                <li>Intel core i7 11th Gen Processor</li>
                <li>16GB RAM</li>
                <li>512GB SSD</li>
                <li>15.56 Inch IPS Display</li>
                <li>10Hrs Battery</li>

              </Text>
              <Text color='blue.600' fontSize='2xl'>
                ₹ 68,999.00
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
      <div className='product-cart'>
      <Card maxW='md'>
          <CardBody>
            <Image
              src='https://m.media-amazon.com/images/I/71PlJMFYA4L._SX679_.jpg'
              alt='HP Omen'
              borderRadius='md'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Hp Omen 16</Heading>
              <Text>
                <li>AMD Ryzen 7 6800H Processor</li>
                <li>16GB RAM</li>
                <li>1Tb SSD</li>
                <li>16.1 Inch LCD Display</li>
                <li>10Hrs Battery</li>

              </Text>
              <Text color='blue.600' fontSize='2xl'>
                ₹ 1,09,990.00
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW='md'>
          <CardBody>
            <Image
              src='https://m.media-amazon.com/images/I/61QDLFTx2PL._SX679_.jpg'
              alt='HP Spectre x360'
              borderRadius='md'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>HP Spectre x360</Heading>
              <Text>
                <li>Intel core Ultra 7 processor</li>
                <li>32GB Ram</li>
                <li>1TB SSD</li>
                <li>14 Inch OLED Display</li>
                <li>9.7hrs Battery Life</li>
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                ₹ 1,61,699.00
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW='md'>
          <CardBody>
            <Image
              src='https://m.media-amazon.com/images/I/618d5bS2lUL._SX679_.jpg'
              alt='Apple 2023 MacBook Pro'
              borderRadius='md'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Apple 2023 MacBook Pro</Heading>
              <Text>
                <li>M3 Max Chip</li>
                <li>32GB RAM</li>
                <li>1Tb SSD</li>
                <li>16 XDR Liquid Retina Display</li>
                <li>16Hrs Battery</li>

              </Text>
              <Text color='blue.600' fontSize='2xl'>
                ₹ 3,49,900.00
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

      </div>
    </div>
  )
}

export default Products