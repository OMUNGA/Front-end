import { Container } from "../../../styles/Container"
import { StyledHeader } from "./styles"
import { FaAngleDown } from "react-icons/fa"
import { HeroSection, HeroMessage } from "../styles"
import Input from "../../Input"

export default function SecundaryHeader() {
    return (
        <StyledHeader>
            <HeroSection>
                <Container display="">
                    <HeroMessage>
                        <h1>Artigos</h1>
                        <p>O melhor lugar para buscar e publicar seus artigos e blogs relacionados a TI. Aqui acreditamos o poder da partilha de conteúdos</p>
                        <Input placeholder="pesquise por um tópico" ButtonText="Pesquisar" />
                    </HeroMessage>
                </Container>
            </HeroSection>

        </StyledHeader>
    )
}