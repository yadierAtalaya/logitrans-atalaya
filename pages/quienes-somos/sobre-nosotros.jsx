import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Container } from 'components/Container'
import styled from 'styles/Sobre-nosotros.module.css'
import { Card } from 'components/sobre-nosotros/Card'

const sobreNosotros = () => {
	return (
		<>
			<Head>
				<title>
					Sobre Nosotros - Logística y Transporte Atalaya S.A.S
				</title>
				<meta
					name='description'
					content='Es una empresa Colombiana de Logística y Transporte, que cumple con todos los estándares de calidad en el servicio y confiabilidad,contamos con talento experto en logística, modelos de gestión en seguridad y control.'
				/>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Container>
				<div className={styled.SobreNosotros}>
					<div className={styled.initialTextContainer}>
						<Image
							src='/sobrenosotros.png'
							width='600'
							height='330'
							alt=''
						/>
						<div>
							<h3>Logística y Transporte ATALAYA S.A.S</h3>
							<p>
								<strong>ATALAYA S.A.S</strong> es una empresa
								Colombiana de Logística y Transporte, que cumple
								con todos los estándares de calidad en el
								servicio y confiabilidad, contamos con talento
								experto en logística, modelos de gestión en
								seguridad y control, distribución de mercadería
								a nivel nacional y urbano, manejo de
								contenedores (puertos Cartagena) y alianzas en
								transporte OTM.
							</p>
							<Link href='/quienes-somos/sobre-nosotros'>
								<a>¡Solicita una cotización!</a>
							</Link>
						</div>
					</div>
					<div className={styled.SecondPartContainer}>
						<h4>¿PORQUÉ ELEGIRNOS?</h4>
						<div className={styled.CardContainer}>
							<Card icon='security' title='Seguridad' />
							<Card icon='paper' title='Control' />
							<Card
								icon='developer'
								title='Tecnología de punta'
							/>
						</div>
					</div>
					<div className={styled.datos}>
						<img src='/datosSobreNosotros.png' alt='datos' />
					</div>
				</div>
			</Container>
		</>
	)
}

export default sobreNosotros
