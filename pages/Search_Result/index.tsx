import { useEffect, useState } from "react";
import { Article } from "../../Components/Article";
import { Footer } from "../../Components/Footer";
import ForumsCards from "../../Components/ForumsCrads";
import Input from "../../Components/Input";
import Menu from "../../Components/Menu";
import { OmungaSocialMedias } from "../../Components/OmungaSocialMedias";
import { useArticle } from "../../context/ArticlesProvider";
import { ResoultSection, SearchResultSection, Title } from "./styles";
import Button from "../../Components/Button";
import { FaAngleDown } from "react-icons/fa";
import { CardFlexLayout } from "./styles";
import { Container } from "../../styles/Container";

interface ArticleDataProps {
    id: number;
    name: string,
    avatarURL: string,
    articleImg: string,
    availableAt: Date,
    title: string,
}

export default function SearchResult () {
    const {articles} = useArticle()
    const [articleData, setArticleData] = useState<ArticleDataProps[]>([])
    

    useEffect(() => {
        setArticleData(articles.slice(0, 3))
    }, [])
    
    return (
        <>
            <Menu/>
            <SearchResultSection>
                <Input placeholder="Pesquisar por um assunto" ButtonText={"Pesquisar"} />
                <ResoultSection>
                    <div>
                        <h1>Resultados da sua pesquisa: <span>"Javascript"</span></h1>
                        <p>Foram encontrados 31 artigos e 7 forum relevantes a esta pesquisa</p>
                    </div>
                    <div>
                        <Button Text="Filtrar por" Icon={<FaAngleDown />} />
                    </div>
                </ResoultSection>
                <Container display="">
                    <Title>
                        <h1><span>31</span></h1>
                        <h1>Artigos</h1>
                    </Title>
                    <CardFlexLayout>
                        {articleData.map(article => (
                            <>
                                <Article
                                    key={article.id}
                                    article={article}
                                />
                            </>
                        ))}
                    </CardFlexLayout>
                </Container>
                <Title>
                        <h1><span>7</span></h1>
                        <h1>Forums</h1>
                </Title>
                <ForumsCards />
                <OmungaSocialMedias />
            </SearchResultSection>
            <Footer />
        </>
    )
}
