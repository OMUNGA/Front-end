import type { NextPage } from 'next'
import Menu from '../../Components/Menu'
import Head from "next/head";
import SecundaryHeader from '../../Components/Header/SecundaryHeader'
import { useArticle } from '../../context/ArticlesProvider';
import { ArticleSection, CardFlexLayout} from '../../Components/Articles/styles';
import { Article } from '../../Components/Article';
import { Container } from '../../styles/Container';
import { Footer } from '../../Components/Footer';
import {PaginationSection, ButtonControlsBox} from "./styles"
import {FaAngleRight, FaAngleLeft} from "react-icons/fa"

export default function ArticlesContent(){
    const {articles} = useArticle()
    console.log(articles)
    return (
        <>  
            <Head>
				<title>Artigos - Monocard</title>
				<meta name="robots" content="noindex" />
				<meta property="og:title" content="Editar meu monocard - Monocard" />
				<meta
					property="og:description"
					content="Edite e gerencie seu perfil do Monocard"
				/>
			</Head>
            <Menu/>
            <SecundaryHeader/>
            <ArticleSection>
                <Container display="">
                    <CardFlexLayout>
                        {
                            articles.map((article: any) => (
                                <Article
                                    key={article.id}
                                    article={article}
                                />
                            ))
                        }
                    </CardFlexLayout>
                </Container>
            </ArticleSection>
            <PaginationSection>
                <Container display='flex'>
                    <ButtonControlsBox>
                        <FaAngleLeft/>
                        <FaAngleRight/>
                    </ButtonControlsBox>
                </Container>
            </PaginationSection>
            <Footer/>
        </>
    )
}
