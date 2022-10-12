import React from 'react';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';
import { Avatar, AvatarBox, CardFooter, Flex, Flex1, ForumBox } from './styles';

export default function ForumsCards () {
    const forumDate = [
        {
            id: 1,
            title: "Será que posso trocar javascript com .NET?",
            discription: "Desde que comecei a estudar .NET eu vi que é coisa de outro mundo manos. Algo super a cima do que eu esperava. e aí eu quis também saber sobre a vossa opnião se hoje em dia posso subistituir o javascript po...",
            image: "./images/user.jpg"
        },
        {
            id: 2,
            title: "Será que posso trocar javascript com .NET?",
            discription: "Desde que comecei a estudar .NET eu vi que é coisa de outro mundo manos. Algo super a cima do que eu esperava. e aí eu quis também saber sobre a vossa opnião se hoje em dia posso subistituir o javascript po...",
            image: "./images/user.jpg"
        },
        {
            id: 3,
            title: "Será que posso trocar javascript com .NET?",
            discription: "Desde que comecei a estudar .NET eu vi que é coisa de outro mundo manos. Algo super a cima do que eu esperava. e aí eu quis também saber sobre a vossa opnião se hoje em dia posso subistituir o javascript po...",
            image: "../images/user.jpg"
        },
        {
            id: 4,
            title: "Será que posso trocar javascript com .NET?",
            discription: "Desde que comecei a estudar .NET eu vi que é coisa de outro mundo manos. Algo super a cima do que eu esperava. e aí eu quis também saber sobre a vossa opnião se hoje em dia posso subistituir o javascript po...",
            image: "./images/user.jpg"
        },
        {
            id: 5,
            title: "Será que posso trocar javascript com .NET?",
            discription: "Desde que comecei a estudar .NET eu vi que é coisa de outro mundo manos. Algo super a cima do que eu esperava. e aí eu quis também saber sobre a vossa opnião se hoje em dia posso subistituir o javascript po...",
            image: "./images/user.jpg"
        },
        {
            id: 4,
            title: "Será que posso trocar javascript com .NET?",
            discription: "Desde que comecei a estudar .NET eu vi que é coisa de outro mundo manos. Algo super a cima do que eu esperava. e aí eu quis também saber sobre a vossa opnião se hoje em dia posso subistituir o javascript po...",
            image: "./images/user.jpg"
        }
        
    ]
    return (
        <>
            {
                forumDate.map((forum) => (
                    <ForumBox>
                        <AvatarBox>
                            {
                                <Avatar src={forum.image} />
                            }
                        </AvatarBox>
                        
                        <Flex>
                            <Flex1>
                                <h2>{forum.title}</h2>
                                <p>{forum.discription}</p>
                            </Flex1>
                            
                            <CardFooter>
                                <button>
                                    <BiLike /> Likes
                                </button>
                                <button>
                                    <FaRegCommentDots /> Respostas
                                </button>
                            </CardFooter>
                        </Flex>
                    </ForumBox>
                ))
            }
        </>
    )
}