export function Header() {
	return (
		<div className='flex h-[58px]'>
			<img
				className='m-4 cursor-pointer'
				src='./icon1.svg'
				alt=''
				width={20}
				height={20}
			/>
			<img
				className='m-4 cursor-pointer'
				src='./icon2.svg'
				alt=''
				width={20}
				height={20}
			/>
			<span className='border-b-2 cursor-pointer border-white m-4'>
				Просмотр
			</span>
			<span className='m-4 cursor-pointer'>Управление</span>
		</div>
	)
}
export function Sections() {
	return (
		<div className='flex pt-1 h-[48px]'>
			<div className='flex  pl-4 w-[230px]'>
				<div>
					<p className=' text-gray text-base '>Название проекта</p>
					<p className='text-gray text-[11px]'>Аббревиатура</p>
				</div>
				<img
					className='border-r pr-2 ml-8 mr-4  cursor-pointer'
					src='./icon3.svg'
					alt=''
					width={25}
					height={25}
				/>
			</div>
			<div className='pt-[5px] text-lg pr-5 border-r'>Строительно-монтажные работы</div>
		</div>
	)
}
export function Sidebar() {
	return (
		<div className='min-w-[206.9px] w-[206.9px]  border-r'>
			<div className='flex ml-4'>
				<img className='mr-3 ' src='./icon4.png' alt='' width={20} />
				По проекту
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				Объекты
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				РД
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				CMP
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				График
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				МиМ
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				Рабочие
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				Капвложения
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				Бюджет
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				Финансирование
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				Панорамы
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				Камеры
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				Поручения
			</div>
			<div className='flex m-4 '>
				<img className='mr-3' src='./icon4.png' alt='' width={20} />
				Контрагенты
			</div>
		</div>
	)
}
