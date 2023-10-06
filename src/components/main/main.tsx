import React, { useState } from 'react'
import {
	useAddLinesMutation,
	useAllLinesQuery,
	useDeleteLinesMutation,
	useUpdateLinesMutation,
} from '../../store/sevenApi/seven.api'

export function Main() {
	const [variable, setVariable] = useState({})
	const [addProduct] = useAddLinesMutation()
	const [delet] = useDeleteLinesMutation()
	const [update] = useUpdateLinesMutation()
	const [rID, setrID] = useState('')

	const createLines = async (parentid: any) => {
		const defaultBody = {
			equipmentCosts: 0,
			estimatedProfit: 0,
			machineOperatorSalary: 0,
			mainCosts: 0,
			materials: 0,
			mimExploitation: 0,
			overheads: 0,
			parentId: parentid,
			rowName: 'strfding',
			salary: 0,
			supportCosts: 0,
		}
		await addProduct(defaultBody).unwrap()
	}
	const updateLines = async (
		rID: string,
		rowName: any,
		salary: any,
		equipmentCosts: any,
		overheads: any,
		estimatedProfit: any
	) => {
		const defaultBody = {
			equipmentCosts: equipmentCosts,
			estimatedProfit: estimatedProfit,
			machineOperatorSalary: 0,
			mainCosts: 0,
			materials: 0,
			mimExploitation: 0,
			overheads: overheads,
			rowName: rowName,
			salary: salary,
			supportCosts: 0,
		}

		await update({ rID: Number(rID), bod: defaultBody })
		setrID('')
	}
	const deleteLines = async (rID: string) => {
		await delet(rID).unwrap()
		setrID('')
	}
	var test = useState(true)
	const { data = [] } = useAllLinesQuery('')

	const [allLindes, setAllLindes] = useState({
		rowName: '',
		salary: 0,
		equipmentCosts: 0,
		overheads: 0,
		estimatedProfit: 0,
	})
	return (
		<div>
			<table>
				<thead className='pt-3 pb-3 border-b'>
					<tr>
						<th className='text-gray w-28 pt-3 pb-3 pl-3'>Уровень</th>
						<th className='text-gray w-96'>Наименование работ</th>
						<th className='text-gray w-64'>Основная з/п</th>
						<th className='text-gray w-60'>Оборудование</th>
						<th className='text-gray w-60'>Накладные расходы</th>
						<th className='text-gray w-60'>Сметная прибыль</th>
					</tr>
				</thead>
				<tbody>
					{ListLiner(
						data,
						createLines,
						deleteLines,
						updateLines,
						0,
						variable,
						setVariable,
						test,
						allLindes,
						setAllLindes
					)}
				</tbody>
			</table>
		</div>
	)
}

export function ListLiner(
	data: any,
	createLines: any,
	deleteLines: any,
	updateLines: any,
	nesting: number,
	variable: any,
	setVariable: any,
	test: any,
	allLindes: any,
	setAllLindes: any
) {
	return (
		<>
			{data.map((dat: any) => {
				return (
					<React.Fragment key={dat.id}>
						<tr
							onClick={() => {
								if (test === true) {
									test = false
									VariablId(setVariable, dat.id, false)
								} else {
									test = false
								}
							}}
							onDoubleClick={() => {
								VariablId(setVariable, dat.id, true)
							}}
							onKeyDown={e => {
								if (e.key === 'Enter') {
									updateLines(
										dat.id,
										allLindes.rowName,
										allLindes.salary,
										allLindes.equipmentCosts,
										allLindes.overheads,
										allLindes.estimatedProfit
									)
									VariablId(setVariable, dat.id, false)
								}
							}}
							className='border-b basket'
						>
							<td
								className={`text-center items-center pl-${nesting} w-36 pt-2 `}
							>
								<button onClick={() => createLines(dat.id)}>
									<img
										src='https://lafloufa.com/wp-content/uploads/2019/02/manual-do-usuario.jpg'
										alt='svg'
										width={25}
										height={25}
									/>
								</button>
								<button
									onClick={() => deleteLines(dat.id)}
									className='btnbasket pl-3'
								>
									<img src='./icon5.svg' alt='svg' width={25} height={25} />
								</button>
							</td>
							<td className='text-center w-96'>
								{variable[dat.id] ? (
									<input
										placeholder='name'
										value={allLindes.rowName}
										onChange={e =>
											setAllLindes(prev => ({
												...prev,
												rowName: e.target.value,
											}))
										}
									/>
								) : (
									dat.rowName
								)}
							</td>
							<td className='text-center w-64'>
								{variable[dat.id] ? (
									<input
										placeholder='salary'
										value={allLindes.salary}
										onChange={e =>
											setAllLindes(prev => ({
												...prev,
												salary: e.target.value,
											}))
										}
									/>
								) : (
									dat.salary
								)}
							</td>
							<td className='text-center w-60'>
								{variable[dat.id] ? (
									<input
										placeholder='equipmentCosts'
										value={allLindes.equipmentCosts}
										onChange={e =>
											setAllLindes(prev => ({
												...prev,
												equipmentCosts: e.target.value,
											}))
										}
									/>
								) : (
									dat.equipmentCosts
								)}
							</td>
							<td className='text-center w-60'>
								{variable[dat.id] ? (
									<input
										placeholder='overheads'
										value={allLindes.overheads}
										onChange={e =>
											setAllLindes(prev => ({
												...prev,
												overheads: e.target.value,
											}))
										}
									/>
								) : (
									dat.overheads
								)}
							</td>
							<td className='text-center w-60'>
								{variable[dat.id] ? (
									<input
										placeholder='estimatedProfit'
										value={allLindes.estimatedProfit}
										onChange={e =>
											setAllLindes(prev => ({
												...prev,
												estimatedProfit: e.target.value,
											}))
										}
									/>
								) : (
									dat.estimatedProfit
								)}
							</td>
						</tr>
						{dat.child[0] &&
							ListLiner(
								dat.child,
								createLines,
								deleteLines,
								updateLines,
								nesting + 3,
								variable,
								setVariable,
								test,
								allLindes,
								setAllLindes
							)}
								
					</React.Fragment>
				)
			})}
		</>
	)
}

function VariablId(setVariable: any, key: any, meaning: any) {
	setVariable((prev: any) => ({
		...prev,
		[key]: meaning,
	}))
}
