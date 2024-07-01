import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  background-color: ${(props) => (props.theme === 'dark' ? '#fff' : '#333')};
  color: ${(props) => (props.theme === 'dark' ? '#333' : '#fff')};
  border: none;
  border-radius: 5px;
`;

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button theme={theme} onClick={handleClick}>
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

export default ThemeToggleButton;
