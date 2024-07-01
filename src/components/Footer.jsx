import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: grid;
  background-color: #333;
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 4rem 10rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  font-size: 2rem;
`;

const Column = styled.div`
  flex: 1;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

// const Link = styled.a`
//   color: #fff;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    margin-left: 10px;
  }
`;

const CodePoetry = styled.p`
  font-style: italic;
  opacity: 0.7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Task</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Service</ListItem>
        </List>
      </Column>
      <Column>
        <List>
          <ListItem>License</ListItem>
          <ListItem>Copyright</ListItem>
          <ListItem>About us</ListItem>
        </List>
      </Column>
      <Column>
        <List>
          <ListItem>Email: astra@gmail.com</ListItem>
          <ListItem>Contact: 9341XX345</ListItem>
          <ListItem>Social handles</ListItem>
        </List>
      </Column>
      <SocialIcons>
        <FaTwitter />
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
      </SocialIcons>
      <CodePoetry>Code is Poetry</CodePoetry>
    </FooterContainer>
  );
}

export default Footer;
