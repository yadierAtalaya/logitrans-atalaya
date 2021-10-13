import React, { useState } from 'react'
import styles from 'styles/BtnToggle.module.css'

export const BtnToggle = () => {
	const [stateToggle, setStateToggle] = useState(true)

	const styleToggle = stateToggle
		? styles.toggle
		: `${styles.toggle} ${styles.active}`

	return (
		<div
			className={styleToggle}
			onClick={() => setStateToggle(!stateToggle)}
		></div>
	)
}
