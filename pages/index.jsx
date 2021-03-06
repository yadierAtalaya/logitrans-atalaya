import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Map } from 'components/Map'
import { Cards } from 'components/Cards'
import { Button } from 'components/Button'
import styled from 'styles/Home.module.css'
import { Slider } from 'components/Home/Slider'
import { HomeCard } from 'components/Home/Card'
import { Container } from 'components/Container'

export default function Home() {
	return (
		<div className={styled.container}>
			<Head>
				<title>Home - Logística y Transporte Atalaya S.A.S</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Slider />
			<Container>
				<h2>
					Ofrecemos soluciones especializadas
					<br />y adaptadas a las necesidades de los clientes
				</h2>
				<div className={styled.CardContainer}>
					<HomeCard icon='users' title='QUIÉNES SOMOS' />
					<HomeCard icon='box' title='MISIÓN' />
					<HomeCard icon='truck' title='VISIÓN' />
				</div>
				<div className={`${styled.NuestroAlcance}`}>
					<div>
						<Image
							src='/imgAlcance.png'
							width='540'
							height='370'
							alt='Logotipo de atalaya'
						/>
					</div>
					<div>
						<h3>
							<b>Nuestro alcance</b>
						</h3>
						<br />
						<p>
							En <b>ATALAYA</b> resolvemos todas sus necesidades
							logísticas a través de medios aéreos, marítimos y
							terrestre, para ello contamos con un equipo humano
							competente, y una <b>infraestructura tecnológica</b>{' '}
							a la vanguardia que soporta nuestra operación.
						</p>
						<h5>
							<Link href='/quienes-somos/sobre-nosotros'>
								<a>Conoce más</a>
							</Link>
						</h5>
					</div>
				</div>
				<div className={styled.ServiceCard}>
					<h3>Nuestros Servicios</h3>
					<p>
						Gestionamos la logística de su empresa prestando
						servicios especializados en:
					</p>
				</div>
				<Cards />
				<div className={styled.map}>
					<h4>EN ATALAYA S.A.S NOS ENCARGAMOS DE TODO</h4>
					<Link href='/contactenos'>
						<a>¡Solicita una cotización!</a>
					</Link>
					<Map />
				</div>
			</Container>
		</div>
	)
}
