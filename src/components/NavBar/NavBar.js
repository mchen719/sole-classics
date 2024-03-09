import styles from './NavBar.module.scss'
import { useState } from 'react'

export const NavBar = ({ input, setInput }) => {

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
