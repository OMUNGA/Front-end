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
import { MdDriveEta } from 'react-icons/md';

export default function ArticlesContent(){
    const {articles} = useArticle()

    return (
        <>  
            <Head>
				<title>Artigos</title>
				<meta name="robots" content="noindex" />
				<meta property="og:title" content="Ver todos os Artigos Omunga" />
				<meta
					property="og:description"
					content="Veja todos os Artigos da Omunga"
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
