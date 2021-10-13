import React, { useState } from 'react'
import styled from 'styles/About.module.css'
import Link from 'next/link'
import { useEmailTo } from 'Hooks/useEmailTo'
import Modal from 'components/Modal'

const initialState = {
	type_client: 'default',
	name: '',
	mail: '',
	phone: '',
	affair: 'default',
	comments: ''
}

const initialStyles = {
	type_client_S: false,
	name_S: false,
	mail_S: false,
	phone_S: false,
	affair_S: false,
	checkInput_S: false
}
const FormAbout = () => {
	const { sendEmail } = useEmailTo()
	const [valuesInputs, setValuesInputs] = useState(initialState)
	const [stylesAlerts, setStylesAlerts] = useState(initialStyles)
	const [checkInput, setCheckInput] = useState(false)
	const [showModal, setShowModal] = useState(false)

	const { type_client, name, mail, phone, affair, comments } = valuesInputs
	const { type_client_S, name_S, mail_S, phone_S, affair_S, checkInput_S } =
		stylesAlerts

	const handleInputs = (e) => {
		setValuesInputs({
			...valuesInputs,
			[e.target.name]: e.target.value
		})
	}

	const animationSelect = () => {
		const result =
			type_client === 'default'
				? `${styled.form_select}`
				: `${styled.form_select} ${styled.form_select_focus}`
		return result
	}

	const animationSelect2 = () => {
		const result =
			affair === 'default'
				? `${styled.form_select}`
				: `${styled.form_select} ${styled.form_select_focus}`
		return result
	}

	const handleSubmit = (e) => {
		e.stopPropagation()
		e.preventDefault()

		if (type_client === 'default') {
			setStylesAlerts({
				...stylesAlerts,
				type_client_S: true
			})

			return
		}
		if (name === '') {
			setStylesAlerts({
				...stylesAlerts,
				name_S: true
			})
			return
		} else if (name.length < 4) {
			setStylesAlerts({
				...stylesAlerts,
				name_S: true
			})
		}
		if (mail === '') {
			setStylesAlerts({
				...stylesAlerts,
				mail_S: true
			})
			return
		}
		if (typeof mail !== 'undefined') {
			let posicionArroba = mail.lastIndexOf('@')
			let posicionPunto = mail.lastIndexOf('.')

			if (
				!(
					posicionArroba < posicionPunto &&
					posicionArroba > 0 &&
					mail.indexOf('@@') == -1 &&
					posicionPunto > 2 &&
					mail.length - posicionPunto > 2
				)
			) {
				setStylesAlerts({
					...stylesAlerts,
					mail_S: true
				})
				return
			}
		}
		if (phone === '') {
			setStylesAlerts({
				...stylesAlerts,
				phone_S: true
			})
			return
		}
		if (affair === 'default') {
			setStylesAlerts({
				...stylesAlerts,
				affair_S: true
			})
			return
		}
		if (!checkInput) {
			setStylesAlerts({
				...stylesAlerts,
				checkInput_S: true
			})
			return
		}

		sendEmail(valuesInputs)
		setShowModal(true)
		setValuesInputs(initialState)
		setCheckInput(false)
		setStylesAlerts({
			type_client_S: false,
			name_S: false,
			mail_S: false,
			phone_S: false,
			affair_S: false,
			checkInput_S: false
		})
		setTimeout(() => {
			setShowModal(false)
		}, 3000)
	}

	const handleModal = () => {
		setShowModal(!showModal)
	}

	return (
		<form className={styled.form}>
			<h2 className={styled.form_title}>
				Déjenos conocer su requerimiento y pronto lo contactaremos
			</h2>
			<div className={styled.form_container}>
				<div className={styled.form_group}>
					<select
						id='cliente'
						className={animationSelect()}
						name={'type_client'}
						value={type_client}
						onChange={handleInputs}
					>
						<option value='default' disabled hidden></option>
						<option value='persona'>Persona</option>
						<option value='empresa'>Empresa</option>
					</select>
					<label htmlFor='cliente' className={styled.form_label}>
						Tipo de cliente:
					</label>
					<span className={styled.form_line}></span>
					<span
						id='tipoCliente'
						className={`${
							type_client_S
								? `${styled.alert} ${styled.visible} ${styled.ajuste}`
								: `${styled.alert}`
						}`}
					>
						Debe ingresar un tipo de cliente
					</span>
				</div>
				<div className={styled.form_group}>
					<input
						type='text'
						id='name'
						className={styled.form_input}
						placeholder=' '
						name={'name'}
						value={name}
						onChange={handleInputs}
					/>
					<label htmlFor='name' className={styled.form_label}>
						Nombre:
					</label>
					<span className={styled.form_line}></span>
					<span
						className={`${
							name_S
								? `${styled.alert} ${styled.visible}`
								: `${styled.alert}`
						}`}
					>
						Debe ingresar un Nombre
					</span>
				</div>
				<div className={styled.form_group}>
					<input
						type='text'
						id='email'
						className={styled.form_input}
						placeholder=' '
						name={'mail'}
						value={mail}
						onChange={handleInputs}
					/>
					<label htmlFor='email' className={styled.form_label}>
						E-mail:
					</label>
					<span className={styled.form_line}></span>
					<span
						className={`${
							mail_S
								? `${styled.alert} ${styled.visible}`
								: `${styled.alert}`
						}`}
					>
						Debe ingresar un correo o un correo valido
					</span>
				</div>
				<div className={styled.form_group}>
					<input
						type='text'
						id='phone'
						className={styled.form_input}
						placeholder=' '
						name={'phone'}
						value={phone}
						onChange={handleInputs}
					/>
					<label
						htmlFor='phone'
						className={styled.form_label}
						type='tel'
					>
						Celular:
					</label>
					<span className={styled.form_line}></span>
					<span
						className={`${
							phone_S
								? `${styled.alert} ${styled.visible}`
								: `${styled.alert}`
						}`}
					>
						Debe ingresar un numero de contacto
					</span>
				</div>
				<div className={styled.form_group}>
					<select
						id='asunto'
						className={animationSelect2()}
						onChange={handleInputs}
						name={'affair'}
						value={affair}
						onChange={handleInputs}
					>
						<option value='default' disabled hidden></option>
						<option value='cotizacion'>Cotización</option>
						<option value='inquietud'>Inquietud</option>
						<option value='solicitudinfo'>
							Solicitud de información
						</option>
						<option value='otro'>Otro</option>
					</select>
					<label htmlFor='asunto' className={styled.form_label}>
						Asunto:
					</label>
					<span className={styled.form_line}></span>
					<span
						className={`${
							affair_S
								? `${styled.alert} ${styled.visible}`
								: `${styled.alert}`
						}`}
					>
						Debe seleccionar un asunto
					</span>
				</div>
				<div className={styled.form_group}>
					<textarea
						type='text'
						id='message'
						className={`${styled.form_input} ${styled.form_textarea}`}
						placeholder=' '
						name={'comments'}
						value={comments}
						onChange={handleInputs}
					/>
					<label htmlFor='message' className={styled.form_label}>
						Comentarios:
					</label>
					<span className={styled.form_line_textarea}></span>
				</div>
			</div>
			<div className={styled.politics_btn}>
				<div className={styled.politics}>
					<input
						id='check'
						type='checkbox'
						name={'politics'}
						onChange={() => setCheckInput(!checkInput)}
						checked={checkInput}
					/>
					<label htmlFor='check'>
						Estoy de acuerdo con las políticas de tratamiento de
						datos personales{' '}
						<Link href='/dataTreatment'>
							<a target='_blank'>Ver políticas</a>
						</Link>
					</label>
				</div>

				<span
					className={`${
						checkInput_S
							? `${styled.alert} ${styled.visible}`
							: `${styled.alert}`
					}`}
				>
					Debe aceptar las politicas de tratamiento de datos
				</span>
				<div className={styled.btn_container}>
					<button
						className={styled.btn_submit}
						onClick={handleSubmit}
					>
						Enviar
					</button>
				</div>
			</div>
			{showModal && (
				<Modal handleModal={handleModal}>
					<h1>Información enviada satisfactoriamente</h1>
				</Modal>
			)}
		</form>
	)
}

export default FormAbout
