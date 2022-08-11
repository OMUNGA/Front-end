import { Container } from "../../styles/Container"
import {MenuBar, Image, Nav, Flex1, Flex2, Flex3, Avatar, Logo} from "./styles"
import {FaAngleRight} from "react-icons/fa"
import Button from "../Button"
import Link from "next/Link"

import { useAuth } from "../../context/AppContext"

export default function Menu () {

    const {user} = useAuth()
    return(
        <>
            <MenuBar>
                <Container display="">
                    <Nav>
                        <Flex1>
                            <Logo>Omunga</Logo>
                        </Flex1>
                        <Flex2>
                            <Link href="#">Home</Link>
                            <Link href="#">Blogs</Link>
                            <Link href="#">Sobre</Link>
                            <Avatar src={user.image}/>
                        </Flex2>
                        <Flex3>
                            <Button Text="Entrar" Icon={<FaAngleRight/>}/>
                        </Flex3>
                    </Nav>
                </Container>
            </MenuBar>
        </>
    )
}