import Modal from 'react-modal';
import { Container } from './styles'

interface ModalPostProps {
    closeModal: () => void,
    isOpen: boolean
}

export function ModalPost({ closeModal, isOpen }: ModalPostProps) {
    
    return (
        <Container>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
            >
                <button onClick={closeModal}>Fechar</button>
                <h1>Modal</h1>
            </Modal>
        </Container>
    )
}