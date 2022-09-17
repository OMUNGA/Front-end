import React from "react";
import { Avatar, Flex, Flex2, Links, Logo, Logo1, Main, NavBar, NavBar_Expanded, SocialMedias, ToggleIcon, ToggleIcon1 } from "./styles";
import Icon from "react-icons-kit";
import { useState } from "react";
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'
import {FaAngleRight, FaFacebook, FaTwitter, FaWhatsapp} from "react-icons/fa"
import { useAuth } from "../../context/AppContext";
import { Nav } from "../Menu/styles";
import { Container } from "../../styles/Container";
import Menu from "../Menu";
import Button from "../Button";


export const MenuMobile = () => {

    const [ismenuOpen, setIsMenuOpen] = useState(false)

    const { user, logout } = useAuth()

    const handleToggle = () => {
        setIsMenuOpen(!ismenuOpen)
    }


    return (
        <>
            <Main>
                {
                    ismenuOpen ?
                        <NavBar_Expanded>
                            <Flex>
                                <Logo>
                                    Omunga
                                </Logo>
                            </Flex>
                            <ToggleIcon onClick={handleToggle}>
                                {ismenuOpen?<Icon icon={x} size={30}/>:<Icon icon={menu} size={28}/>}
                            </ToggleIcon>
                            <Links>
                                <li>Home</li>
                                <li>Artigo</li>
                                <li>Forum</li>
                                <li>Sobre</li>
                                <a href="./login">
                                    <Button Text="Entrar" Icon={<FaAngleRight />} />
                                </a>
                            </Links>
                            <SocialMedias>
                                <FaFacebook/>
                                <FaTwitter/>
                                <FaWhatsapp/>
                            </SocialMedias>
                        </NavBar_Expanded>
                        :<NavBar>
                            <Container display="">
                                <Nav>
                                    <Flex>
                                        <Logo1>
                                            Omunga
                                        </Logo1>
                                    </Flex>
                                    <Flex2>
                                        <Flex2>
                                            {
                                                user ?
                                                    <Avatar src={user?.image} onClick={() => logout()} />
                                                    : null
                                            }
                                        </Flex2>
                                        <ToggleIcon1 onClick={handleToggle}>
                                            {ismenuOpen?<Icon icon={x} size={28}/>:<Icon icon={menu} size={45}/>}
                                        </ToggleIcon1>
                                    </Flex2>
                                </Nav>
                            </Container>
                        </NavBar>
                }
            </Main>
            <Menu/>
        </>
    )
}