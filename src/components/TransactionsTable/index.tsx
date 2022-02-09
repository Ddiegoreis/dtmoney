import { Container } from './styles'

export function TransactionsTable() {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Desenvolvimento de software</td>
						<td className='deposit'>R$ 1.000</td>
						<td>Desenvolvimento</td>
						<td>20/31/2022</td>
					</tr>
					<tr>
						<td>Aluguel</td>
						<td className='withdraw'>- R$ 500</td>
						<td>Desenvolvimento</td>
						<td>20/31/2022</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}