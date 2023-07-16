import { Container } from '../../styles/Container';
import {
  MenuBar,
  Image,
  Nav,
  Flex1,
  Flex2,
  Flex3,
  Avatar,
  Logo,
  StyledLink,
} from './styles';
import { FaAngleRight } from 'react-icons/fa';
import Button from '../Button';
import { useAuth } from '../../context/AppContext';
import { MenuMobile } from './MenuMobile';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const { user, logout } = useAuth();
  const pathName = usePathname();

  const menuLinks = [
    { href: '/', label: 'Home' },
    { href: '/artigos', label: 'Artigos' },
    { href: '/forum', label: 'Fórum' },
    { href: '/sobre', label: 'Sobre' },
  ];

  return (
    <>
      <MenuBar>
        <Container display=''>
          <Nav>
            <Flex1>
              <Logo>Omunga</Logo>
            </Flex1>
            <Flex2>
              {menuLinks.map((link) => (
                <StyledLink key={link.label} href={link.href} isActive={pathName === link.href}>
                  {link.label}
                </StyledLink>
              ))}
            </Flex2>
            {user ? (
              <Avatar src={user?.image} onClick={() => logout()} />
            ) : null}
            <Flex3>
              <a href='./login'>
                <Button Text='Entrar' Icon={<FaAngleRight />} />
              </a>
            </Flex3>
          </Nav>
        </Container>
      </MenuBar>
      <MenuMobile />
    </>
  );
}
