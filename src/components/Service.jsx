/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import assets from './assets/map.png';
import {mobile} from '../responsive'

const Contaner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    height: 700px;
    background-image: url(${assets});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-position: fixed;
    ${mobile({ height:"1300px" })}
`;
    const Wrapper = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    ${mobile({ marginTop: "0px", flexBasis: "9%",height:"150%", flexDirection:"column" })}

    
       min-height: calc(100vh - ${props => props.theme.footerHeight}px);
    
    `;
    const Center = styled.div`
    margin-top: -600px;
    position: absolute;
    text-align: center;
    ${mobile({position:"sticky", marginTop:"100px" ,marginBottom:"25px"})}
    
    
    
    `;
    
   const First = styled.div``;
    const Second = styled.div``;
    const Third = styled.div``;
    const Fourth = styled.div``;
    const Fifth = styled.div``;
    const Sixth = styled.div``;
    const Seventh = styled.div``;
  const Image = styled.img`
  width: 100px;
  height: 100px;
  background-color: skyblue;
  padding: 30px;
  border-radius:50%;
  ${mobile({weidth:"50%", height:"90%",gap:"", padding:"0px" })}
`;


export const Service = () => {
  return (
    <Contaner>
     <Center>
      <h1>Our Services</h1>
     </Center>

      <Wrapper>
        <First>
        <Image className='Dot' src="../img/truck.png" alt="" />
        <h3>Fast Delivery</h3>
    
        </First>
        <Second>
        <Image src="../img/airplane.png" alt="" />
        <h3>Fast Delivery</h3>
        
        </Second>
        <Third>
        <Image src="../img/cargo.png" alt="" />
        <h3>Fast Delivery</h3>
        
        </Third>
        <Fourth>
        <Image src="../img/truck.png" alt="" />
        <h3>Fast Delivery</h3>
        
        </Fourth>
        <Fifth>
        <Image src="../img/airplane.png" alt="" />
        <h3>Fast Delivery</h3>
        
        </Fifth>
        <Sixth>
        <Image src="../img/cargo.png" alt="" />
        <h3>Fast Delivery</h3>
        
        </Sixth>
        <Seventh>
        <Image src="../img/airplane.png" alt="" />
        <h3>Fast Delivery</h3>
        </Seventh>
      
      </Wrapper>
    </Contaner>
  )
}

export default Service;