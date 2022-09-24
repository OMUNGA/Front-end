import Modal from 'react-modal';
import { Container, Content } from './styles'

interface ModalPostProps {
    closeModal: () => void,
    isOpen: boolean
}

export function ModalPost({ closeModal, isOpen }: ModalPostProps) {

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                overlayClassName='react-modal-overlay'
                className="react-modal-content"
            >
                <Container>
                    <div>
                        <button onClick={closeModal}>
                            <img src='./images/close.svg' />
                        </button>
                        <h1>O que deseja postar</h1>
                    </div>
                    <Content>
                        <button>
                            <img src='./images/articleIcon.png' />
                            <span>
                                <h2>Artigo</h2>
                                <p>Poste um artigo sobre qualquer tema para outros poderem ler, comentar e partilhar</p>
                            </span>
                        </button>

                        <button>
                            <img src='./images/forumIcon.png' />
                            <span>
                                <h2>Forum</h2>
                                <p>Crie um forum sobre qualquer coisa e obtenha a resposta dos outros usuários</p>
                            </span>
                        </button>
                    </Content>
                </Container>
            </Modal>
        </>
    )
}