import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Header.css';

import Navigation from './Navigation';

// style
const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.bgColor};
  z-index: 600;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

const Logo = styled.div`
  height: 100%;
`;

const MenuBtn = styled.div``;

const Bar = styled.div`
  width: 35px;
  height: 5px;
  margin: 6px 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.textColor};
  transition: all 0.5s;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // function
  function onClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Head>
        <Inner>
          <Logo>
            <Link to='/' className='link'>
              ParkJiHo
            </Link>
          </Logo>
          <MenuBtn onClick={onClick} className='menuBtn'>
            <Bar className={isOpen ? 'bar1 change' : null} />
            <Bar className={isOpen ? 'bar2 change' : null} />
            <Bar className={isOpen ? 'bar3 change' : null} />
          </MenuBtn>
        </Inner>
      </Head>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
