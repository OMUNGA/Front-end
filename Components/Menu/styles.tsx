import styled from 'styled-components';
import { Keyframes } from 'styled-components';
import Link from 'next/link';

interface StyledLinkProps {
  isActive: boolean;
}

export const MenuBar = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.standard.white};
  display: flex;
  align-items: center;
  position: relative;
  position: fixed;
  top: 0;
  z-index: 4;

  &:after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.primary};
    width: 26.56%;
    right: 0;
    height: 100%;
    position: absolute;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const Logo = styled.span`
  font-family: Nico Moji;
  opacity: 1;
  font-weight: bold;
  font-size: 160%;

  &::first-letter {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Image = styled.img`
  width: 226px;
  height: 40px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Flex1 = styled.div`
  display: flex;
  flex: 50%;
`;

export const Flex2 = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 30%;
  align-items: center;
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  margin-right: 2em;
  color: ${({ theme }) => theme.colors.standard.dark};
  text-decoration: none;
  padding: 1.4em 0;

  font-weight: ${(props) => props.isActive && 'bold'};
  border-bottom: ${(props) => (props.isActive ? `3px solid #8571ff` : 'none')};
`;

export const Flex3 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 18%;
  z-index: 2;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: -25px;
  z-index: 3;
  border: 5px solid ${({ theme }) => theme.colors.standard.white};
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
