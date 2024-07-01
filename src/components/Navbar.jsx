import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeToggleButton from './ThemeToggleButton';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme.mode === 'dark' ? '#333' : '#fff')};
    color: ${(props) => (props.theme.mode === 'dark' ? '#fff' : '#333')};
    transition: all 0.5s ease;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4rem 10rem;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(props) => (props.theme.mode === 'dark' ? '#222' : '#f8f8f8')};
  color: ${(props) => (props.theme.mode === 'dark' ? '#fff' : '#333')};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavlinksContainer = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;

    a {
      font-size: 2.4rem;
      color: ${(props) => (props.theme.mode === 'dark' ? '#fffdfa' : '#333')};
      text-decoration: none;
    }
  }
`;

const Navbar = () => {
  const theme = useSelector((state) => state.theme.mode);
  
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <GlobalStyle />
      <Header>
        <LogoContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="155px"
            height="45px"
            viewBox="0 0 155 45"
          >
             <g>
              <g>
                <path
                  fill="#E8E7EC"
                  d="M64.538,29.777h-9.659l-2.198,4.33h-5.229l11.89-23.35h1.366l11.024,23.35H66.57L64.538,29.777z M62.34,25.114l-2.431-5.195l-2.631,5.195H62.34z"
                ></path>
                <path
                  fill="#E8E7EC"
                  d="M80.159,24.215c-0.767-0.199-2.198-0.566-3.53-1.465c-1.865-1.232-2.898-3.031-2.998-5.264 c-0.1-1.864,0.5-3.496,1.699-4.762c1.731-1.799,4.23-2.299,5.428-2.299c3.396,0,5.297,1.232,6.995,2.331l0.767,0.5l-2.433,3.964 l-0.832-0.533c-1.5-0.965-2.465-1.599-4.497-1.599c-0.3,0-1.466,0.233-2.064,0.866c-0.198,0.199-0.432,0.564-0.397,1.332 c0.033,1.199,0.865,1.865,2.997,2.396c0.268,0.067,0.466,0.135,0.666,0.2c2.23,0.767,3.964,1.798,5.163,3.097 c1.198, 1.333, 1.831, 2.898, 1.831, 4.563c0,1.632-0.699,3.331-1.864,4.63c-1.364,1.531-3.265,2.396-5.362,2.396 c-1.031,0-2.433-0.065-4.097-0.565c-2.098-0.666-3.963-1.831-5.562-3.53l3.397-3.197c2.465,2.633,5.229,2.633,6.262,2.633 c1.933,0,2.563-1.766,2.563-2.364c0-1.267-1.433-2.433-3.862-3.267l-0.101-0.031L80.159,24.215z"
                ></path>
                <path
                  fill="#E8E7EC"
                  d="M109.068,10.76v4.663h-6.461v18.685h-4.662V15.423h-6.494V10.76H109.068z"
                ></path>
                <path
                  fill="#E8E7EC"
                  d="M123.925,34.107l-4.362-9.359h-2.332v9.326h-4.662V10.727h8.793c3.863,0,6.994,3.164,6.994,7.027 c0,2.831-1.666,5.264-4.098,6.361l4.629,9.992H123.925z M117.23,15.391v4.695h4.129c1.3,0,2.332-1.033,2.332-2.332 s-1.032-2.363-2.332-2.363H117.23z"
                ></path>
                <path
                  fill="#E8E7EC"
                  d="M147.807,29.777h-9.66l-2.195,4.33h-5.229l11.889-23.349h1.365L155,34.107h-5.162L147.807,29.777z M145.607,25.114l-2.433-5.195l-2.632,5.195H145.607z"
                ></path>
              </g>
              <path
                fill="#E8E7EC"
                d="M22.245,2.5c5.341,0,10.364,2.08,14.143,5.856c3.777,3.778,5.857,8.802,5.857,14.144 c0,5.341-2.081,10.366-5.857,14.143c-3.778,3.775-8.8,5.857-14.143,5.857c-5.341,0-10.364-2.08-14.142-5.857 c-3.776-3.776-5.858-8.8-5.858-14.143c0-5.342,2.081-10.365,5.857-14.143C11.881,4.58,16.904,2.5,22.245,2.5 M22.245,0.255 C9.959,0.255,0,10.215,0,22.5s9.959,22.245,22.245,22.245c12.286,0,22.246-9.96,22.246-22.245S34.531,0.255,22.245,0.255 L22.245,0.255z"
              ></path>
              <g>
                <path
                  fill="#E8E7EC"
                  d="M21.978,10.123C21.978,10.122,21.977,10.122,21.978,10.123c-3.768,7.951-7.536,15.906-11.303,23.857 c1.614,0,3.229,0,4.844,0c3.048-6.156,6.098-12.314,9.147-18.474L21.978,10.123z"
                ></path>
              </g>
              <path
                fill="#E8E7EC"
                d="M27,19.988c-1.555,3.229-3.11,6.459-4.665,9.688l-0.09,0.18h0.09c1.495,0,2.99,0,4.485,0 c0.598,1.375,1.196,2.752,1.794,4.127c1.734,0,3.468,0,5.202,0C31.544,29.316,29.271,24.652,27,19.988z"
              ></path>
            </g>
          </svg>
        </LogoContainer>
        <NavlinksContainer>
          <ul>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/task">
              <li>Task</li>
            </Link>
          </ul>
        </NavlinksContainer>
        <ThemeToggleButton />
      </Header>
    </ThemeProvider>
  );
};

export default Navbar;
