import Head from 'next/head'
import Modal from 'components/Modal'
import React, { useState, useEffect } from 'react'
import { Banner } from 'components/Banner'
import styled from 'styles/seguridadvial.module.css'
import CardInfoBanner from 'components/CardInfoBanner'
import RoadSafetyPolicies from 'components/RoadSafetyPolicies'

const SeguridadVial = () => {
	const [showModal, setShowModal] = useState(false)

	const handleModal = () => {
		setShowModal(!showModal)
	}

	useEffect(() => {
		if (showModal) {
			document.body.style.position = 'fixed'
			document.body.style.top = `-${window.scrollY}px`
			document.body.style.paddingRight = '15px'
		} else if (!showModal) {
			const scrollY = document.body.style.top
			document.body.style.position = ''
			document.body.style.top = ''
			window.scrollTo(0, parseInt(scrollY || '0') * -1)
			document.body.style.paddingRight = '0'
		}
	}, [showModal])

	return (
		<>
			<Head>
				<title>
					Seguridad Vial - Logística y Transporte Atalaya S.A.S
				</title>
				<meta
					name='description'
					content='Los trabajadores que manejen vehículos de propiedad y/o al servicio de LOGÍSITICA Y TRANSPORTE ATALAYA deberán respetar las normas planteadas en esta sesión.'
				/>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<div className={`${styled.container}`}>
				<Banner
					url={'../vial.png'}
					urlMobile={'../seguridad-vial-mobile.png'}
				/>
				<CardInfoBanner handleModal={handleModal}>
					<p>
						<strong>LOGÍSITICA Y TRANSPORTE ATALAYA S.A.S.</strong>{' '}
						es una empresa dedicada a transporte masivo en general,
						pasajeros, mixto, especial, transporte de residuos y
						mercancías peligrosas, transporte tercerizado,
						transporte de mercancías licitas, transporte logístico
						portuario, aéreo, prorrateo, depósito de transito
						aduanero, importaciones, alquiler de maquinaria
						amarilla, grúas telescópicas, agrícola, tracto camiones,
						adecuaciones con camión cisterna, cama baja. Tratamiento
						de aguas residuales, asesoría y consultoría, ambiental,
						civil. Arrendamiento de todo tipo de bienes inmuebles,
						aserias y consultorías financieras. <br />
						Los trabajadores que manejen vehículos de propiedad y/o
						al servicio de LOGÍSITICA Y TRANSPORTE ATALAYA S.A.S,
						deberán respetar las normas de tránsito, atendiendo
						especialmente las relacionadas con límites de velocidad.
					</p>
				</CardInfoBanner>
				{showModal && (
					<Modal handleModal={handleModal}>
						<RoadSafetyPolicies />
					</Modal>
				)}
			</div>
		</>
	)
}

export default SeguridadVial
