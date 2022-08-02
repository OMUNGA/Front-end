import { useState, useEffect } from 'react'
import { articles } from './articles'
import { BiLike } from 'react-icons/bi'
import { FaRegCommentDots, FaAngleRight, FaAngleDown } from 'react-icons/fa'
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import { Container, Card } from './styles'
import React from 'react'

interface ArticleDataProps {
    name: string,
    avatarURL: string,
    articleImg: string,
    availableAt: Date,
    description: string,
}

export function Articles() {
    const [articleData, setArticleData] = useState<ArticleDataProps[]>([])

    useEffect(() => {
        setArticleData(articles)
    }, [])

    return (
        <Container>
            <div>
                <h2>Artigos</h2>
                <p>Se você gosta de ler blogs e artigos inovadores, você está no lugar certo. Aqui acreditamos no poder da partilha de conteúdos</p>
            </div>
            <Card>
                <button>
                    <span>Filtrar por</span>
                    <FaAngleDown size={20} />
                </button>

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

                            <p>{article.description}</p>
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
    )
}