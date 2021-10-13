import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styles/Home.module.css'

export const Card = ({ icon, title }) => {
	const [color, setColor] = useState('')

	const handleHover = (type) => {
		if (type === 'hover') setColor('Orange')
		if (type === 'unHover') setColor('')
	}

	return (
		<div
			onMouseEnter={() => handleHover('hover')}
			onMouseLeave={() => handleHover('unHover')}
			className={`${styled.card}`}
		>
			<div className={styled.iconsContainer}>
				<Image
					src={`/icons/${icon + color}.svg`}
					width='30'
					height='30'
					alt=''
				/>
			</div>
			<div style={{ padding: 0, marginTop: '1rem' }}>
				<h3>{title}</h3>
				{icon === 'security' && (
					<p>
						Trazabilidad y control logístico, La operación estará a
						cargo de un solo responsable, tanto la información como
						el manejo del producto.
					</p>
				)}
				{icon === 'paper' && (
					<p>
						Contamos con puestos de control, monitoreo GPS y
						vigilancia para garantizar la seguridad de sus bienes y
						la de nuestras operaciones.
					</p>
				)}
				{icon === 'developer' && (
					<p>
						Ofrecemos servicios de calidad respaldados por una
						robusta infraestructura tecnológica.
					</p>
				)}
			</div>
		</div>
	)
}
