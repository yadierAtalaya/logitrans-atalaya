import { useEffect } from 'react'

export const useEmailTo = () => {
	const sendEmail = (body) => {
		const { type_client, name, mail, phone, affair, comments } = body

		window.open(
			`mailto:jhonatanlezcano.plv@gmail.com?subject=${
				affair || ''
			}&body=${`<strong>Tipo de cliente:</strong> ${type_client}. <br>
         <strong>nombre:</strong> ${name}. <br>
         <strong>E-mail:</strong> ${mail}. <br>
         <strong>Celular:</strong> ${phone}. <br>
         <strong>Asunto:</strong> ${affair} <br>
         <strong>Comentarios:</strong> ${comments}`}`
		)
	}

	return {
		sendEmail
	}
}
