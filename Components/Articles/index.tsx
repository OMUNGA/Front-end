import React, { useState, useEffect } from 'react'
import { articlesData } from './articlesDatas'
import {FaAngleRight, FaAngleDown } from 'react-icons/fa'
import { ArticleSection, CardWrapper, SectionTitle, CardFlexLayout, SeeMoreSection} from './styles'
import {Container} from "../../styles/Container"
import Button from "../Button"
import {Article} from "../Article"

interface ArticleDataProps {
    name: string,
    avatarURL: string,
    articleImg: string,
    availableAt: Date,
    title: string,
}

export const Articles: React.FC =()=> {
    const [articleData, setArticleData] = useState<ArticleDataProps[]>([])

    useEffect(() => {
        setArticleData(articlesData)
    }, [])

    return (
        <ArticleSection>
            <Container display="">
                <SectionTitle>
                    <h2>Artigos</h2>
                    <p>Se você gosta de ler blogs e artigos inovadores, você está no lugar certo. Aqui acreditamos no poder da partilha de conteúdos</p>
                </SectionTitle>
                <CardWrapper>
                    <Button Text="Filtrar por" Icon={<FaAngleDown/>}/>
                    <CardFlexLayout>
                        {articleData.map(article => (
                            <>
                                <Article 
                                    key={article.name}
                                    article={article}
                                />
                            </>
                        ))}
                    </CardFlexLayout>
                </CardWrapper>
                <SeeMoreSection>
                    <Button Text="Ver todos" Icon={<FaAngleRight/>}/>
                </SeeMoreSection>
            </Container>
        </ArticleSection>
    )
}