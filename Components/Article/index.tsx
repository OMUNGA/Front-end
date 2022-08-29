import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import { BiLike } from 'react-icons/bi'
import { FaRegCommentDots} from 'react-icons/fa'
import {ArticleCard, CardHeader, CardBody, CardFooter} from "./styles"

interface SingleArticleProps {
    article: any;
}

export const Article:React.FC<SingleArticleProps> = ({article})=> {
    return(
        <ArticleCard>
            <CardHeader>
                <img src={article.avatarURL} alt='avatar' />
                <small>
                    <strong>{article.name}</strong>
                    <span>
                        {  
                            format(article.availableAt, "d '  ' MMMM '  ' yyyy", {
                                locale: ptBR
                            })
                        }
                    </span>
                </small>
            </CardHeader>
            <CardBody>
                <h3>{article.title}</h3>
                <img src={article.articleImg} alt='Article-img' />
            </CardBody>
            <CardFooter>
                    <button>
                        <BiLike />
                    </button>
                    <button>
                        <FaRegCommentDots />
                    </button>
            </CardFooter>
        </ArticleCard>
    )
}