import React, { useState, useEffect } from 'react'
import { articlesData } from './articlesDatas'
import { BiLike } from 'react-icons/bi'
import { FaRegCommentDots, FaAngleRight, FaAngleDown } from 'react-icons/fa'
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import { ArticleSection, Card, SectionTitle} from './styles'
import {Container} from "../../styles/Container"
import Button from "../Button"

interface ArticleDataProps {
    name: string,
    avatarURL: string,
    articleImg: string,
    availableAt: Date,
    description: string,
}

export const Articles: React.FC =()=> {
    const [articleData, setArticleData] = useState<ArticleDataProps[]>([])

    useEffect(() => {
        setArticleData(articlesData)
    }, [])

    return (
        <ArticleSection>
            <Container display="">
                <Card>
                    <Button Text="Filtrar por" Icon={<FaAngleDown/>}/>
                    <ul>
                        {articleData.map(article => (
                            <li key={article.name}>
                                <div>
                                    <img src={article.avatarURL} alt='avatar' />
                                    <small>
                                        <strong>{article.name}</strong>
                                        <span>{format(article.availableAt, "d '  ' MMMM '  ' yyyy", {
                                            locale: ptBR
                                        })}</span>
                                    </small>
                                </div>

                                <h3>{article.description}</h3>
                                <img src={article.articleImg} alt='Article-img' />
                                <small>
                                    <button>
                                        <BiLike />
                                    </button>
                                    <button>
                                        <FaRegCommentDots />
                                    </button>
                                </small>
                            </li>
                        ))}
                    </ul>

                    <button className='ver-todos'>
                        <span>Ver todos</span>
                        <FaAngleRight size={20} />
                    </button>
                </Card>
            </Container>
        </ArticleSection>
    )
}