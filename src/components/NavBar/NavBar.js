import styles from './NavBar.module.scss'
import { useState } from 'react'

export const NavBar = ({ input, setInput }) => {

	// const fetchData = (value) => {
	// 	fetch('/shoes').then((response) => response.json()).then((json) => {
	// 		const results = json.filter((item) => {
	// 			return(
	// 				value &&
	// 				item && 
	// 				item.name &&
	// 				item.tags.toLowerCase().includes(value)
	// 			)
	// 		})
	// 		setResults(results)
	// 	})
	// }

	const handleChange = (value) => {
		setInput(value)
	}

	return(
		<div className={styles.NavBar}>
			<input placeholder="Type here to search"
			value={input}
			onChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	)
}

export default NavBar;
