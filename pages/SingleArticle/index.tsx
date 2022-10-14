
import { Container } from "../../styles/Container"
import Menu from "../../Components/Menu"
import {Footer} from "../../Components/Footer"
import Head from "next/head";
import {
    FirstColumn, 
    SecondColumn, 
    ArticleHeader, 
    ArticleTitle, 
    ArticleBody, 
    BreakPoint, 
    AuthorCard, AuthorCard__Header, 
    AuthorCard__SocialMedia, MoreArticleDiv,
    FixedBox,
    MoreArticlesCard,
    Flex
} from "./styles"
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import { useArticle } from '../../context/ArticlesProvider';
import {FaFacebook, FaTwitter, FaGoogle} from "react-icons/fa"
import Button from "../../Components/Button";

export default function SingleArticle () {
    const {singleArticle, articles} = useArticle()

    return(
        <>
            <Head>
				<title>Artigo Singular</title>
				<meta name="robots" content="noindex" />
				<meta property="og:title" content="Ver todos os Artigos Omunga" />
				<meta
					property="og:description"
					content="Veja todos os Artigos da Omunga"
				/>
			</Head>
            <Menu/>
            <BreakPoint></BreakPoint>
            <Container display="flex">
                <Flex>
                    <FirstColumn>
                    {
                        singleArticle.map((singleArticle: any) => (
                            <>
                                <ArticleHeader>
                                    <img src={singleArticle.avatarURL}/>
                                        <div>
                                            <strong>{singleArticle.author}</strong>
                                        <span>
                                            {  
                                                format(singleArticle.availableAt, "d '  ' MMMM '  ' yyyy", {
                                                    locale: ptBR
                                                })
                                            }
                                        </span>
                                    </div>
                                </ArticleHeader>
                                <ArticleTitle>
                                    <h2>{singleArticle.title}</h2>
                                    <img src={singleArticle.articleImg}/>
                                </ArticleTitle>
                                <ArticleBody>
                                    {
                                        singleArticle.itens.map((itens: any)=> (
                                                itens.type === "text" ?
                                                    <p style={{
                                                            fontWeight: itens.formaltting?.fontWeight, 
                                                            textDecoration: itens.formaltting?.textDecoration,
                                                            fontSize: itens.formaltting?.fontSize
                                                        }}
                                                    >
                                                        {itens.content}
                                                    </p>
                                                : itens.type === "image" ?
                                                    <img src={itens.content}/>
                                                : 
                                                    <ul style={{listStyle: itens.formaltting?.listStyle }}>
                                                        {
                                                            itens.content.map((listItems: any) => (
                                                                <li>{listItems.item}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                
                                        )) 
                                    }
                                </ArticleBody>
                            </>
                        ))
                    }
                    </FirstColumn>
                    <SecondColumn>
                        <FixedBox>
                            <AuthorCard>
                                {
                                    singleArticle.map((articleAuthor: any) => (
                                        <>
                                            <AuthorCard__Header>
                                                <img src={articleAuthor.avatarURL}/>
                                                <span>{articleAuthor.author}</span>
                                                <p>{articleAuthor.authorBio}</p>
                                            </AuthorCard__Header>
                                            <AuthorCard__SocialMedia>
                                                <FaGoogle/>
                                                <FaFacebook/>
                                                <FaTwitter/>
                                            </AuthorCard__SocialMedia>
                                            <Button Text="seguir" Icon=""/>
                                        </>
                                    ))
                                }  
                            </AuthorCard>
                            <MoreArticleDiv>
                                {
                                    singleArticle.map((articleAuthor: any) => (
                                        <>
                                            <h4>Mais Artigos sobre {articleAuthor.author}</h4>
                                            <div>
                                                {
                                                    articles.slice(0, 1).map((moreArticles: any) => (
                                                        <MoreArticlesCard>
                                                            <img src={moreArticles.articleImg}/>
                                                            <div>
                                                                <h4>{moreArticles.title}</h4>
                                                                <span>
                                                                {  
                                                                    format(moreArticles.availableAt, "d '  ' MMMM '  ' yyyy", {
                                                                        locale: ptBR
                                                                    })
                                                                }
                                                            </span>
                                                            </div>
                                                        </MoreArticlesCard>
                                                    ))
                                                }
                                            </div>
                                        </>
                                    ))
                                }
                            </MoreArticleDiv>  
                        </FixedBox>          
                    </SecondColumn>
                    </Flex>
            </Container>
            <BreakPoint></BreakPoint>
            <Footer/>
        </>
    )
}