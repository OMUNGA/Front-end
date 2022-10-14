import { Articles } from "../../Components/Card";
import { Footer } from "../../Components/Footer";
import Input from "../../Components/Input";
import Menu from "../../Components/Menu";
import { OmungaSocialMedias } from "../../Components/OmungaSocialMedias";
import { ResoultSection } from "./styles";

export default function SearchResult () {
    return (
        <div>
            <Menu/>
            <ResoultSection>
                <Input placeholder="Pesquisar por um assunto" ButtonText={"Pesquisar"} />
                <h1>Resultados da sua pesquisa: <span>"Javascript"</span></h1>
                <p>Foram encontrados 3 Blogs relevantes a esta pesquisa</p>
            </ResoultSection>
            <Articles />
            <OmungaSocialMedias />
            <Footer />
        </div>
    )
}