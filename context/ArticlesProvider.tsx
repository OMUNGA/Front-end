import React, {createContext, useEffect, useState} from "react";

export const ArticleContext = createContext({} as ArticleContextData)

export function useArticle() {
	return React.useContext(ArticleContext);
}

interface IbodyArticle {
	id: number
	author: string
	avatarURL: string
	articleImg: string
	availableAt: string
	title: string
}

export const articlesData: {} | any = [
    {
        id: 0,
        author: 'Pedro Fracno',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: 'Plano de carreira e vagas em big Techs',
    },
    {
        id: 1,
        author: 'Mário monteiro',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: '5 Passos para fazer um design tal como está na UI sem sentir o exagero',
    },
    {
        id: 2,
        author: 'Flávio Coutinho',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: 'Entenda o porquê VPN com internet grátis só funciona com rede Africell',
    },
    {
        id: 3,
        author: 'Inácio Raimundo',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: '5 Passos para fazer um design tal como está na UI sem sentir o exagero',
    },
    {
        id: 4,
        author: 'Lázaro Manuel',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: 'Criando componentes e simples Hooks personalizados com javascript puro',
    },
    {
        id: 5,
        author: 'Lito Bumba',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: 'Entenda o porquê VPN com internet grátis só funciona com rede Africell',
    },
    {
        id: 6,
        author: 'Lázaro Manuel',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: 'Criando componentes e simples Hooks personalizados com javascript puro',
    },
    {
        id: 7,
        author: 'Lito Bumba',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: 'Entenda o porquê VPN com internet grátis só funciona com rede Africell',
    },
    {
        id: 8,
        author: 'Lito Bumba',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: 'Entenda o porquê VPN com internet grátis só funciona com rede Africell',
    },
    {
        id: 9,
        author: 'Lázaro Manuel',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: 'Criando componentes e simples Hooks personalizados com javascript puro',
    },
    {
        id: 10,
        author: 'Lito Bumba',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: 'Entenda o porquê VPN com internet grátis só funciona com rede Africell',
    },
    {
        id: 11,
        author: 'Lito Bumba',
        avatarURL: './images/unidos.jpg',
        articleImg: './images/unidos.jpg',
        availableAt: new Date(),
        title: 'Entenda o porquê VPN com internet grátis só funciona com rede Africell',
    }
]

export function ArticleProvider({children}: any) {
	const [articles, setArticles] = useState([])

	useEffect(()=> {
		setArticles(articlesData)
	})

	const provided = {
		articles
	};


	return <ArticleContext.Provider value={provided}>{children}</ArticleContext.Provider>
}

type ArticleContextData = {
    articles: any
}