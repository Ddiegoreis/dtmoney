import Modal from 'react-modal'

import { Container } from './styles'

interface INewTransactionModalProps {
	isOpen: boolean
	onRequestClose: () => void
}

Modal.setAppElement('#root')

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: INewTransactionModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'>
			<Container>
				<h2>Cadastrar transacao</h2>

				<input placeholder='Titulo' />

				<input type='number' placeholder='Valor' />

				<input placeholder='Categoria' />

				<button type='submit'>Cadastrar</button>
			</Container>
		</Modal>
	)
}
