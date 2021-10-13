import Link from 'next/link'
import React, { useState } from 'react'
import styles from 'styles/Nav.module.css'
import { BtnToggle } from './BtnToggle'

export const NavAtalaya = () => {
	const [stateNav, setStateNav] = useState(true)
	return (
		<>
			<nav
				className={
					stateNav
						? styles.navbar
						: `${styles.navbar} ${styles.navbarShow}`
				}
			>
				<span className={styles.logo}>
					<Link href='/'>
						<a>
							<img src='/logoazul.png' alt='' />
						</a>
					</Link>
				</span>
				<ul className={styles.menu}>
					<li>
						<Link href='/'>
							<a>INICIO</a>
						</Link>
					</li>
					<li className={styles.subMenu}>
						<div className={styles.iconListItem}>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='chevron-right'
								className='svg-inline--fa fa-chevron-right fa-w-10'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 320 512'
							>
								<path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
							</svg>
						</div>
						<a style={{ color: '#053b77', cursor: 'pointer' }}>
							QUIENES SOMOS
						</a>
						<ul className={styles.listSubMenu}>
							<li className={styles.listItem}>
								<div className={styles.iconListItem}>
									<svg
										aria-hidden='true'
										focusable='false'
										data-prefix='fas'
										data-icon='chevron-right'
										className='svg-inline--fa fa-chevron-right fa-w-10'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 320 512'
									>
										<path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
									</svg>
								</div>
								<Link href='/quienes-somos/sobre-nosotros'>
									<a>SOBRE NOSOTROS</a>
								</Link>
							</li>
							<li className={styles.listItem}>
								<div className={styles.iconListItem}>
									<svg
										aria-hidden='true'
										focusable='false'
										data-prefix='fas'
										data-icon='chevron-right'
										className='svg-inline--fa fa-chevron-right fa-w-10'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 320 512'
									>
										<path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
									</svg>
								</div>
								<Link href='/quienes-somos/sedes'>
									<a>SEDES</a>
								</Link>
							</li>
							<li className={styles.listItem}>
								<div className={styles.iconListItem}>
									<svg
										aria-hidden='true'
										focusable='false'
										data-prefix='fas'
										data-icon='chevron-right'
										className='svg-inline--fa fa-chevron-right fa-w-10'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 320 512'
									>
										<path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
									</svg>
								</div>
								<Link href='/quienes-somos/seguridad-vial'>
									<a>SEGURIDAD VIAL</a>
								</Link>
							</li>
							<li className={styles.listItem}>
								<div className={styles.iconListItem}>
									<svg
										aria-hidden='true'
										focusable='false'
										data-prefix='fas'
										data-icon='chevron-right'
										className='svg-inline--fa fa-chevron-right fa-w-10'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 320 512'
									>
										<path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
									</svg>
								</div>
								<Link href='/quienes-somos/sistema-gestion-integrado'>
									<a>SISTEMA DE GESTIÓN INTEGRADO</a>
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href='/servicios'>
							<a>SERVICIOS</a>
						</Link>
					</li>

					<li>
						<Link href='/contactenos'>
							<a>CONTACTENOS</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div
				className={styles.icons_handleMenu}
				onClick={() => setStateNav(!stateNav)}
			>
				<BtnToggle />
			</div>
		</>
	)
}
