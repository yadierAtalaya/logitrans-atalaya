import React from 'react'
import Head from 'next/head'
import { Button } from 'components/Button'
import style from 'styles/sedes.module.css'
import { Card, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/Service.module.css'

const sedes = () => {
	return (
		<div>
			<Head>
				<title>Sedes - Logística y Transporte Atalaya S.A.S</title>
				<meta
					name='description'
					content='En Atalaya S.A.S contamos con las siguientes sedes en el territorio nacional.'
				/>
				<link rel='icon' href='/favicon.png' />
			</Head>

			<h3 className={`mt-5 ${styles.title_main} ${styles.form_title} `}>
				En Atalaya S.A.S contamos con las siguientes sedes en el
				territorio nacional:
			</h3>
			<div className={`${style.container}`}>
				<Row xs={1} md={2} className={`${style.CardContainer}`}>
					<Card className={`${style.cards}`}>
						<Card.Body>
							<Card.Title className={`${style.title}`}>
								Cartagena-Bolivar
							</Card.Title>
							<div className={style.boxImgSedes}>
								<Card.Img src='/cartagena.png' />
							</div>
							<Card.Text
								className={`${style.address} ${style.title_address}`}
							>
								<b>Sede principal</b>
							</Card.Text>

							<Card.Text className={`${style.address}`}>
								<b>DIRECCION:</b> Diagonal 21 N° 15-02 Barrio el
								Bosque, Cartagena de Indias
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className={`${style.cards}`}>
						<Card.Body>
							<Card.Title className={`${style.title}`}>
								Bello-Antioquia
							</Card.Title>
							<div className={style.boxImgSedes}>
								<Card.Img src='/medellin.png' />
							</div>
							<Card.Text
								className={`${style.address} ${style.title_address}`}
							>
								<b>Sucursal de Antioquia</b>
							</Card.Text>

							<Card.Text className={`${style.address}`}>
								<b>DIRECCIÓN: </b> Calle 20 E # 45 - 39 OF. 201
							</Card.Text>
						</Card.Body>
					</Card>
				</Row>
			</div>
			<Button text={'¡SOLICITA UNA COTIZACION!'} to={'/contactenos'} />
		</div>
	)
}

export default sedes
