import React from 'react';
import styled from 'styled-components';
import banner from '../assets/hero-img.svg';

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  background: linear-gradient(35deg, rgb(6, 0, 151) 0%, rgb(130, 4, 255) 73%, rgb(193, 15, 255) 100%);
  justify-content: center;
  padding: 4rem 10rem;
  font-size: 2.4rem;
  padding-top: 10rem;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  color: #FFFDFA;
  padding-right: 14rem;
`;

const StyledButton = styled.button`
  background: yellow;
  border: navajowhite;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 1.8rem;
`;

const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hero = () => {
  return (
    <HeroSection>
      <RightSection>
        <h1>Your Idea Matters</h1>
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat.
        </h5>
        <StyledButton type='button'>Create Website</StyledButton>
      </RightSection>
      <LeftSection>
        <img src={banner} alt="Hero Banner" />
      </LeftSection>
    </HeroSection>
  );
}

export default Hero;
