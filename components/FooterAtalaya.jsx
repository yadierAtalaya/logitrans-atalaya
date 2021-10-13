import React from 'react'
import Link from 'next/link'
import styles from 'styles/Footer.module.css'
import { Container } from './Container'

export const FooterAtalaya = () => {
	return (
		<>
			<div className={styles.footerContainer}>
				<Container>
					<footer className={styles.footer}>
						<div className={styles.content1}>
							<div className={styles.box_logo}>
								<img src='/logoblanco.png' alt='' />
							</div>
							<div className={styles.content_icons}>
								<div className={styles.box_icon}>
									<svg
										aria-hidden='true'
										focusable='false'
										data-prefix='fab'
										data-icon='facebook'
										className='svg-inline--fa fa-facebook'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
									>
										<path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z'></path>
									</svg>
								</div>
								<div className={styles.box_icon}>
									<svg
										aria-hidden='true'
										focusable='false'
										data-prefix='fab'
										data-icon='instagram'
										className='svg-inline--fa fa-instagram'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 448 512'
									>
										<path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
									</svg>
								</div>
							</div>
						</div>
						<div className={styles.content2}>
							<h5 className={styles.footer_title}>CONTACTO</h5>
							<b>Correos</b>
							<ul>
								<li className={styles.emails}>
									servicioalcliente@logitransatalaya.com
								</li>
								<li className={styles.emails}>
									gerencia@logitransatalaya.com
								</li>
								<li className={styles.emails}>
									contabilidad@logitransatalaya.com
								</li>
								<li className={styles.emails}>
									logistica@logitransatalaya.com
								</li>
								<li className={styles.emails}>
									servicioalcliente@logitransatalaya.com
								</li>
							</ul>
							<br />
							<b>Telefonos</b>
							<p>(+57) 314 555 4981 - (+57) 314 555 4761</p>
						</div>
						<div className={styles.content3}>
							<h5 className={styles.footer_title}>
								TE PUEDE INTERESAR
							</h5>
							<ul>
								<li>
									<Link href='/privacyPolicies'>
										<a>Políticas de privacidad</a>
									</Link>
								</li>
								<li>
									<Link href='/dataTreatment'>
										<a>Políticas de tratamiento de datos</a>
									</Link>
								</li>
								<li>
									<Link href='/quienes-somos/sedes'>
										<a>Sedes</a>
									</Link>
								</li>
							</ul>
						</div>
					</footer>
				</Container>
			</div>
			<div className={styles.Copyright}>
				<Container>
					<p style={{ marginBottom: '0' }}>
						<small>
							© Copyright 2021 -{' '}
							<b>Logística y Transporte Atalaya S.A.S</b> -
							Colombia
						</small>
					</p>
				</Container>
			</div>
		</>
	)
}
