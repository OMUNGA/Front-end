import {ExperimenteSection, Flex1, Flex2, ImageBox, BoxesDiv, Image, Image2} from "./styles"
import { Container } from "../../../styles/Container"
import Button from "../../Button"
import {FaAngleRight} from "react-icons/fa"

export const Experimente: React.FC =()=> {
    return(
        <ExperimenteSection>
            <Container display="flex">
                <Flex1>
                    <ImageBox>
                        <span>O</span>
                        <span>m</span>
                        <span>u</span>
                        <span>n</span>
                        <span>g</span>
                        <span>a</span>
                    </ImageBox>
                </Flex1>
                <Flex2>
                    <h2>Você pode criar uma conta e experimentar todos recursos que temos para você</h2>
                    <p>Crie uma conta ou faça login e experimente tudo de bom que temos para você. </p>
                    <BoxesDiv>
                        <div>
                            <Image src="./images/usersGroup.png"/>
                            <p><span>+1k</span> pessoas usando a Omunga</p>
                        </div>
                        <div>
                            <Image2 src="./images/artigos.png"/>
                            <p><span>+1k</span> Artigos postados</p>
                        </div>
                    </BoxesDiv>
                    <Button Text="Começar" Icon={<FaAngleRight/>}/>
                </Flex2>
            </Container>
        </ExperimenteSection>
    )
}