import { FC } from 'react'
import { useAllLinesQuery } from '../../store/sevenApi/seven.api'

const List: FC = () => {
	const { data = [] } = useAllLinesQuery('')

	return (
		<div>
			{data.map((dat: any) => (
				<div key={dat.id}>
					<div>{dat.id}</div>
					<div>{dat.rowName}</div>
					<br />
				</div>
			))}
		</div>
	)
}

export default List
