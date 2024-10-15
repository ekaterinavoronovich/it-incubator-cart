import styled from 'styled-components'
import './App.css'
import GlobalStyles from './styles/global'
import Cart from './components/Cart'
import ImgMainBox from './components/ImgMain'
import Title from './components/Title'
import Description from './components/Description'
import Button from './components/Button'
import ButtonTransparent from './components/ButtonTransparent'
import Container from './components/Container'

function App() {


  return (
    
    <Cart> 
      <ImgMainBox/>
      
         <Title>Headline</Title>
      <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Description> 
     
    
     <Container>
      <a href='#'>
       <Button>See more</Button> 
      </a>
       
      <ButtonTransparent>Save</ButtonTransparent>
      </Container>
     
      <GlobalStyles/>
      </Cart> 
    
  )
}

export default App
