import React from 'react'
import Head from 'next/head'
import { Row } from 'react-bootstrap'
import { Cards } from 'components/Cards'
import { Button } from 'components/Button'
import styles from '../styles/Service.module.css'

const servicios = () => {
	return (
		<>
			<Head>
				<title>
					Nuestros Servicios - Logística y Transporte Atalaya S.A.S
				</title>
				<meta
					name='description'
					content='En ATALAYA S.A.S gestionamos la logística de su empresa prestando servicios especializados.'
				/>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<div className={`container ${styles.container_service}`}>
				<Row>
					<h1 className={`${styles.title_main} ${styles.form_title}`}>
						En{' '}
						<span className={`${styles.subtitle_main}`}>
							ATALAYA S.A.S{' '}
						</span>
						gestionamos la logística de su empresa prestando
						servicios especializados en:
					</h1>
				</Row>
				<Cards />
				<Button
					text={'¡SOLICITA UNA COTIZACION!'}
					to={'/contactenos'}
				/>
			</div>
		</>
	)
}

export default servicios
