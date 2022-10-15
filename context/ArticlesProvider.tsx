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

const articlePost:  {} | any = [{
        id: 0,
        author: 'Felipe Coutinho',
        authorBio: 'Net Backend Developer',
        avatarURL: './images/coutinho.jpg',
        articleImg: './images/javascript.png',
        availableAt: new Date(),
        title: 'Criando componentes e simples Hooks personalidade com javascript puro',
        itens: [
            {
                type: "text",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.",
                formaltting: {
                    type: null,
                    size: null
                }
            },
            {
                type: "text",
                content: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus. ",
                formaltting: null
            },
            {
                type: "text",
                content: "Next on the pipeline",
                formaltting: {
                    fontWeight: "bold",
                    fontSize: "140%"
                }
            },
            {
                type: "text",
                content: "Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
                formaltting: null
            },
            {
                type: "text",
                content: "Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.",
                formaltting: null
            },
            {
                type: "image",
                content: "./images/node.png",
            },
            {
                type: "text",
                content: "Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. ",
                formaltting: null
            },
            {
                type: "text",
                content: "In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.",
                formaltting: null
            },
            {
                type: "text",
                content: "A list looks like this",
                formaltting: {
                    fontWeight: "bold",
                }
            },
            {
                type: "list",
                content: [
                    { 
                        
                        item: "First item in the list"
                    },
                    {
                        item: "Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet"
                    },
                    {
                        item: "Third item in the list"
                    }
                ],
                formaltting: {
                    listStyle: "none",
                    fontWeight: "bold",
                }
            },
        ]      
    }]

export function ArticleProvider({children}: any) {
	const [articles, setArticles] = useState([])
    const [singleArticle, setSingleArticle] = useState([])

	useEffect(()=> {
		setArticles(articlesData)
        setSingleArticle(articlePost)
	})

	const provided = {
		articles,
        singleArticle
	};


	return <ArticleContext.Provider value={provided}>{children}</ArticleContext.Provider>
}

type ArticleContextData = {
    articles: any
    singleArticle: any
}