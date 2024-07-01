import React from 'react';
import styled from 'styled-components';
import serviceData from '../utils/services';




const ServiceParent = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 3fr));
  gap: 2rem;
  font-size: 1.5rem;
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
    <ServiceParent Themecont >
    {serviceData.map((item) => (
      <CardContainer key={item.id}>
        <img src={item.imageSrc} alt={item.title} />
        <h4>{item.title}</h4>
      </CardContainer>
    ))}
  </ServiceParent>
    
  );
}

export default Services;
