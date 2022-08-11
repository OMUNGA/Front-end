import Menu from "../Menu"
import {Container} from "../../styles/Container"
import {HeroMessage, HeroSection, StyledHeader, Lampada, VerMais} from "./styles"
import Input from "../Input"
import {FaAngleDown} from "react-icons/fa"
import { OmungaSocialMedias } from "../OmungaSocialMedias"

export default function Header() {
    return(
        <StyledHeader>
            <Menu/>
            <HeroSection>
                <Container display="">
                    <HeroMessage>
                        <h1>O <span>saber</span> não<br/> oucupa o lugar</h1>
                        <p>O melhor lugar para buscar e publicar seus artigos e blogs relacionados a TI. Aqui acreditamos o poder da partilha de conteúdos</p>
                        <Input placeholder="pesquise por um tópico" ButtonText="Pesquisar"/>
                    </HeroMessage>
                    <Lampada src="./images/lampada.png"/>
                    <VerMais>
                        <button>
                            <FaAngleDown/>
                        </button>
                        <p>Ver mais</p>
                    </VerMais>
                    <OmungaSocialMedias/>
                </Container>
            </HeroSection>
        </StyledHeader>
    )
}