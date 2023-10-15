import React, { useState, useEffect } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import {
  ArticleSection,
  CardWrapper,
  SectionTitle,
  CardFlexLayout,
  SeeMoreSection,
} from './styles';
import { Container } from '../../styles/Container';
import Button from '../Button';
import { Article } from '../Article';
import { useArticle } from '../../context/ArticlesProvider';
import Link from 'next/link'

interface ArticleDataProps {
  id: number;
  name: string;
  avatarURL: string;
  articleImg: string;
  availableAt: Date;
  title: string;
}

export const Articles: React.FC = () => {
  const { articles } = useArticle();

  return (
    <ArticleSection>
      <Container display=''>
        <SectionTitle>
          <h2>Artigos</h2>
          <p>
            Se você gosta de ler blogs e artigos inovadores, você está no lugar
            certo. Aqui acreditamos no poder da partilha de conteúdos
          </p>
        </SectionTitle>
        <CardWrapper>
          <Button Text='Filtrar por' Icon={<FaAngleDown />} />
          <CardFlexLayout>
            {articles.slice(0, 6).map((article) => (
              <>
                <Article key={article.id} article={article} />
              </>
            ))}
          </CardFlexLayout>
        </CardWrapper>
        <SeeMoreSection>
          <Link href='./Articles'>
            <Button Text='Ver todos' Icon={<FaAngleRight />} />
          </Link>
        </SeeMoreSection>
      </Container>
    </ArticleSection>
  );
};
