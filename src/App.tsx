import { Header, Sections, Sidebar } from './components/layout/layout'
import { Main } from './components/main'

export function App() {
	return (
		<>
			<Header/>
			<hr/>
			<Sections/>
			<hr />
			<div className='flex'>
			<Sidebar/>
			 <Main/>
			</div>
		</>
	)
}
