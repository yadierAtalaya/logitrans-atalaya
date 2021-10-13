import React, { useEffect, useState } from 'react'
import styled from '../styles/btnsContact.module.css'
import Image from 'next/image'

const initialState = {
	wsp: '',
	vt: ''
}

export const BtnsContacts = ({ icon, iconResponsive, title }) => {
	const [image, setImage] = useState(initialState)
	const [handleWidth, setHandleWidth] = useState(0)
	const [showToolTip, setShowToolTip] = useState(true)
	const [hiddenTooltip, setHiddenTooltip] = useState(false)

	useEffect(() => {
		const widthScreen = window.innerWidth
		setHandleWidth(widthScreen)

		window.onresize = function () {
			setHandleWidth(window.innerWidth)
		}

		const hiddenTooltip = () => {
			handleWidth < 600 ? setHiddenTooltip(true) : setHiddenTooltip(false)
			handleWidth < 600
				? setImage((s) => ({
						...s,
						wsp: iconResponsive,
						vt: iconResponsive
				  }))
				: setImage((s) => ({
						...s,
						wsp: icon,
						vt: icon
				  }))
		}

		hiddenTooltip()
	}, [handleWidth, icon, iconResponsive])

	useEffect(() => {
		const handleToolTip = () => {
			setTimeout(() => {
				setShowToolTip(false)
			}, 4000)
		}
		handleToolTip()
	}, [])

	return (
		<div className={`${styled.btnsContact} ${styled.btnW}`}>
			{title === 'Whatsapp' ? (
				<a
					className={styled.acontainer}
					href='https://wa.me/573145554782?text=Texto%20de%20prueba'
					target='_blank'
					rel='noreferrer'
				>
					<Image
						src={`/icons/${image.wsp}.svg`}
						width='100%'
						height='100%'
						className={styled.wsp}
						alt=''
					/>
					{!hiddenTooltip && (
						<span
							className={`${
								showToolTip
									? `${styled.tiptextW} ${styled.visible}`
									: styled.tiptextW
							}`}
						>
							Contactanos por Whatsapp
						</span>
					)}
				</a>
			) : (
				<a className={styled.acontainer} href=''>
					<Image
						src={`/icons/${image.vt}.svg`}
						width='100%'
						height='100%'
						className={styled.vt}
					/>

					{!hiddenTooltip && (
						<span
							className={`${
								showToolTip
									? `${styled.tiptextVT} ${styled.visible}`
									: styled.tiptextVT
							}`}
						>
							paginaturismo.com
						</span>
					)}
				</a>
			)}
		</div>
	)
}
