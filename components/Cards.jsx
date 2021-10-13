import React from 'react'
import { CardService } from './CardService'
import styles from '../styles/Service.module.css'

export const Cards = () => {
	return (
		<div className={` ${styles.row}`}>
			<CardService image={'/logistica.png'} />
			<CardService image={'/transporte.png'} />
			<CardService image={'/bodega.png'} />
			<CardService image={'/especiales.png'} />
			<CardService image={'/consultoria.png'} />
			<CardService image={'/alquiler.png'} />
			<CardService image={'/mensajeria.png'} />
			<CardService image={'/software.png'} />
		</div>
	)
}
