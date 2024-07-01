import React from 'react';
import styled from 'styled-components';
import serviceData from '../utils/services';


const Container = styled.div`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,0.9573170731707317) 0%, rgba(30,34,105,1) 16%, rgba(56,67,172,0.9969512195121951) 47%, rgba(0,212,255,1) 100%);
`

const ServiceParent = styled.section`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,0.9573170731707317) 0%, rgba(30,34,105,1) 16%, rgba(56,67,172,0.9969512195121951) 47%, rgba(0,212,255,1) 100%);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 3fr));
  gap: 2rem;
  font-size: 1.5rem;
  margin-top :12rem;
  padding: 4rem 10rem;
  position: relative;
`;

const CardContainer = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  h4 {
    position: absolute;
    bottom: 1rem;
  }
`;

export const Services = () => {
  return (
    <Container > <ServiceParent >
    {serviceData.map((item) => (
      <CardContainer key={item.id}>
        <img src={item.imageSrc} alt={item.title} />
        <h4>{item.title}</h4>
      </CardContainer>
    ))}
  </ServiceParent>
  </Container>
   
    
  );
}

export default Services;
