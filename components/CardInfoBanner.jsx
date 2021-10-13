import React from 'react'
import styled from 'styles/cardInfoBanner.module.css'

const CardInfoBanner = ({ children, handleModal }) => {
	return (
		<div className={`${styled.container}`}>
			<div className={`${styled.cardInfoBanner}`}>
				<div className={`${styled.card_info}`}>{children}</div>
				<div className={`${styled.containerbtn}`}>
					<button
						className={`${styled.btn_document}`}
						onClick={handleModal}
					>
						ver documento
					</button>
				</div>
			</div>
		</div>
	)
}

export default CardInfoBanner
