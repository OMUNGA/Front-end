import {Container} from "../../../styles/Container"
import {StyledHeader} from "./styles"
import {FaAngleDown} from "react-icons/fa"
import { HeroSection, HeroMessage } from "../styles"
import Input from "../../Input"

interface headerProps {
    Title: string
    headerDescription: string
}

export default function SecundaryHeader({Title, headerDescription}:headerProps) {
    return(
        <StyledHeader>
            <HeroSection>
                <Container display="">
                    <HeroMessage>
                        <h1 >{Title}</h1>
                        <p>{headerDescription}</p>
                        <Input placeholder="pesquise por um tópico" ButtonText="Pesquisar"/>
                    </HeroMessage>
                </Container>
            </HeroSection>
           
        </StyledHeader>
    )
}