import React from 'react'
import Link from 'next/link'
import styles from '../styles/Service.module.css'

export const Button = ({ text, to }) => {
	return (
		<div className='mt-1 mb-5'>
			<div className={styles.button_service_center}>
				<Link href={`${to}`}>
					<a className={`${styles.button_service}`}>{text}</a>
				</Link>
			</div>
		</div>
	)
}
