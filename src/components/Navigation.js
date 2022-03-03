import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Navigation.css';

// style
const Nav = styled.nav`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  z-index: 600;
`;

const Background = styled.div`
  display: flex;
  height: 100%;
`;

const Bg = styled.div`
  width: 10%;
  height: 100%;
  opacity: 0;
  background-color: #1e1e1e;
  transition: all 0.5s;
`;

const Ul = styled.ul`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const List = styled.li`
  margin-bottom: 50px;
  transform: translate3d(0, 1000px, 0);
  transition: all 0.8s;

  a {
    display: block;
    padding: 0 20px;
    color: ${(props) => props.theme.textColor};
    font-size: 3.5em;
    font-weight: 600;
    text-transform: uppercase;
    transition: 300ms;

    &:hover {
      text-decoration: line-through;
      text-decoration-color: ${(props) => props.theme.accentColor};
    }
  }
`;

function Navigation({ isOpen, setIsOpen }) {
  function onClick() {
    setIsOpen(false);
  }

  return (
    <Nav>
      <Background className='bgAni'>
        <Bg className={isOpen ? 'bg1' : null}></Bg>
        <Bg className={isOpen ? 'bg2' : null}></Bg>
        <Bg className={isOpen ? 'bg3' : null}></Bg>
        <Bg className={isOpen ? 'bg4' : null}></Bg>
        <Bg className={isOpen ? 'bg5' : null}></Bg>
        <Bg className={isOpen ? 'bg6' : null}></Bg>
        <Bg className={isOpen ? 'bg7' : null}></Bg>
        <Bg className={isOpen ? 'bg8' : null}></Bg>
        <Bg className={isOpen ? 'bg9' : null}></Bg>
        <Bg className={isOpen ? 'bg10' : null}></Bg>
      </Background>

      <Ul>
        <List className={isOpen ? 'listAni1' : null} onClick={onClick}>
          <Link to='/about'>ABOUT</Link>
        </List>
        <List List className={isOpen ? 'listAni2' : null} onClick={onClick}>
          <Link to='/project'>PROJECT</Link>
        </List>
        <List List className={isOpen ? 'listAni3' : null} onClick={onClick}>
          <Link to='/animation'>ANIMATION</Link>
        </List>
        <List List className={isOpen ? 'listAni4' : null} onClick={onClick}>
          <Link to='/contact'>CONTACT</Link>
        </List>
      </Ul>
    </Nav>
  );
}

export default Navigation;
