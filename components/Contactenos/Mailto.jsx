import React, { useEffect, useRef } from 'react'
import styled from 'styles/About.module.css'

const Mailto = ({ email, subject, body, handleSubmit, ...props }) => {
	const { type_client, name, mail, phone, affair, comments } = body
	const anchorRef = useRef()

	useEffect(() => {
		window.open(
			`mailto:jhonatanlezcano.plv@gmail.com?subject=${
				subject || ''
			}&body=${`<strong>Tipo de cliente:</strong> ${type_client}. <br>
        <strong>nombre:</strong> ${name}. <br>
        <strong>E-mail:</strong> ${mail}. <br>
        <strong>Celular:</strong> ${phone}. <br>
        <strong>Asunto:</strong> ${affair} <br>
        <strong>Comentarios:</strong> ${comments}`}`
		)
	}, [])

	return <></>
}

export default Mailto
