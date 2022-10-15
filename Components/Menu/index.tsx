import { Container } from "../../styles/Container"
import { MenuBar, Image, Nav, Flex1, Flex2, Flex3, Avatar, Logo } from "./styles"
import { FaAngleRight } from "react-icons/fa"
import Button from "../Button"
import { useAuth } from "../../context/AppContext"
import { MenuMobile } from "./MenuMobile"

export default function Menu() {

    const { user, logout } = useAuth()
    return (
        <>
            <MenuBar>
                <Container display="">
                    <Nav>
                        <Flex1>
                            <Logo>Omunga</Logo>
                        </Flex1>
                        <Flex2>
                            <a href="./">Home</a>
                            <a href="./Articles">Artigos</a>
                            <a href="./Foruns">Forum</a>
                            <a href="#">Sobre</a>
                        </Flex2>
                            {
                                user ?
                                    <Avatar src={user?.image} onClick={() => logout()} />
                                : null
                            }
                        <Flex3>
                            <a href="./login">
                                <Button Text="Entrar" Icon={<FaAngleRight />} />
                            </a>
                        </Flex3>
                    </Nav>
                </Container>
            </MenuBar>
            <MenuMobile/>
        </>
    )
}