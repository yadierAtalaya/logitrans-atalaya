import React from 'react'
import styles from '../styles/Service.module.css'

export const CardService = ({ image }) => {
	return (
		<div className={styles.card_service}>
			<img className={`${styles.images}`} src={image} alt='image' />
		</div>
	)
}
