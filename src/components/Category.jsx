import React from 'react';
import styled from 'styled-components';
import categoryData from '../utils/categoryData';




const CategoryParent = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  padding: 4rem 12rem;
  gap: 3rem;
  font-size: 2rem;
  background-image: linear-gradient(90deg, rgb(213, 213, 216) 0%, rgb(213, 213, 216) 12%, rgb(213, 213, 216) 22%, rgb(213, 213, 216) 31%, rgb(213, 213, 216) 38%, rgb(213, 213, 216) 44%, rgb(213, 213, 216) 49%, rgb(210, 210, 213) 53%, rgb(210, 210, 213) 56%, rgb(209, 210, 214) 58%, rgb(209, 210, 214) 61%, rgb(209, 210, 214) 63%, rgb(209, 210, 214) 66%, rgb(209, 210, 214) 69%, rgb(209, 210, 214) 72%, rgb(209, 210, 214) 77%, rgb(207, 208, 211) 81%, rgb(207, 208, 211) 87%, rgb(207, 208, 211) 93%, rgb(207, 208, 211) 100%);
`;

const CategoryCard = styled.div`
  position: relative;

  figure {
    margin: 0;
  }

  h4, h6 {
    margin: 0;
  }
`;



const Category = () => {
  return (<CategoryParent>
    {categoryData.map((item) => (
      <CategoryCard key={item.id}>
        <figure>{item.svg}</figure>
        <h4>{item.title}</h4>
        <h6>{item.subtitle}</h6>
      </CategoryCard>
    ))}
  </CategoryParent>
    
  );
}

export default Category;
