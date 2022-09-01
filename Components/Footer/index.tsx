import { Container } from "../../styles/Container"
import { FooterSection, FirstColumn, SecondColumn, Children1, Children2, Children3, SearchBox, ParentDiv, Gradient, Logo} from "./styles"
// import Link from "next/Link"
import Input from "../Input"

export const Footer: React.FC =()=> {
    return(
        <FooterSection>
            <Container display="">
                <ParentDiv>
                    <FirstColumn>
                        <Logo>Omunga</Logo>
                        <p>É um projeto criado com o principal objetivo de incentivar a partilha de conteúdos por parte dos profissionais de TI em Angola.</p>
                    </FirstColumn>
                    <SecondColumn>
                        <Children1>
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Artigos</a></li>
                                <li><a href="#">Forum</a></li>
                            </ul>
                        </Children1>
                        <Children2>
                            <h3>Sobre</h3>
                            <ul>
                                <li><a href="#">Quem somos</a></li>
                                <li><a href="#">O projeto Omunga</a></li>
                            </ul>
                        </Children2>
                        <Children3>
                            <h3>Contactos</h3>
                            <a href="mailto: faleconosco@omunga.com" target="_top">faleconosco@omunga.com</a>
                        </Children3>
                    </SecondColumn>
                </ParentDiv>
                <SearchBox>
                    <Input placeholder="Pesquise por qualquer assunto" ButtonText="pesquisar"/>
                </SearchBox>
            </Container>
            <Gradient></Gradient>
        </FooterSection>
    )
}