import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styles/Home.module.css'

export const HomeCard = ({ icon, title }) => {
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
				{icon === 'users' && (
					<div>
						<strong>Logística y transporte ATALAYA S.A.S</strong> es
						una empresa que ha sido conformada con el propósito de
						cerrar las brechas sociales para gestar cambios
						transculturales y así aportar a la construcción de una
						Colombia justa. <strong>ATALAYA S.A.S</strong> está
						conformada por un gran equipo de trabajo íntegro.
					</div>
				)}
				{icon === 'box' && (
					<div>
						Como <strong>ATALAYA S.A.S</strong> somos una compañia
						que brinda soluciones en logística integral de altos
						estándares de calidad, siendo así un pilar regional en
						el liderazgo de productos de primera, a través de un
						poderoso énfasis social.
					</div>
				)}
				{icon === 'truck' && (
					<div>
						<strong>ATALAYA S.A.S</strong> en el año 2025 tendrá
						presencia en los 32 departamentos de Colombia para
						lograr posicionarnos en el mercado latinoamericano
						abriendo lazos a nivel mundial; liderando el mercado
						tecnológico, como uno de los máximos exponentes de la
						logística integral.
					</div>
				)}
			</div>
			<div>
				<Link href='/'>
					<a>
						<p>+</p>
					</a>
				</Link>
			</div>
		</div>
	)
}
