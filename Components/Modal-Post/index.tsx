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
                    <button onClick={closeModal}>Fechar</button>
                        <h1>Modal</h1>
                    </div>
                    <Content>
                        <div>
                            {/* <img src='./images/articleIcon.png' /> */}
                            <span>
                                <h2>Artigo</h2>
                                <p>Poste um artigo sobre qualquer tema para outros poderem ler, comentar e partilhar</p>
                            </span>
                        </div>
                    </Content>
                </Container>
            </Modal>
        </>
    )
}