import { Container } from "../../styles/Container"
import Link from 'next/link'
import { FooterSection, FirstColumn, SecondColumn, Children1, Children2, Children3, SearchBox, ParentDiv, Gradient, Logo } from "./styles"
// import Link from "next/Link"
import Input from "../Input"

export const Footer: React.FC = () => {
    return (
        <FooterSection>
            <Container display="">
                <ParentDiv>
                    <FirstColumn>
                        <Logo><span>O</span>munga</Logo>
                        <p>É um projeto criado com o principal objetivo de incentivar a partilha de conteúdos por parte dos profissionais de TI em Angola.</p>
                    </FirstColumn>
                    <SecondColumn>
                        <Children1>
                            <h3>Home</h3>
                            <ul>
                                <li><Link href="#">Artigos</Link></li>
                                <li><Link href="#">Forum</Link></li>
                            </ul>
                        </Children1>
                        <Children2>
                            <h3>Sobre</h3>
                            <ul>
                                <li><Link href="#">Quem somos</Link></li>
                                <li><Link href="#">O projeto Omunga</Link></li>
                            </ul>
                        </Children2>
                        <Children3>
                            <h3>Contactos</h3>
                            <Link href="mailto: faleconosco@omunga.com" target="_top">faleconosco@omunga.com</Link>
                        </Children3>
                    </SecondColumn>
                </ParentDiv>
                <SearchBox>
                    <Input placeholder="Pesquise por qualquer assunto" ButtonText="pesquisar" />
                </SearchBox>
            </Container>
            <Gradient></Gradient>
        </FooterSection>
    )
}