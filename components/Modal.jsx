import React, { useEffect } from 'react'
import styled from 'styles/modal.module.css'

const Modal = ({ children, handleModal }) => {
	return (
		<div className={`${styled.wrapper}`}>
			<div className={`${styled.modal}`}>
				<div>
					<div
						className={`${styled.containerclose}`}
						onClick={handleModal}
					>
						<div className={`${styled.line} ${styled.line1}`}></div>
						<div className={`${styled.line} ${styled.line2}`}></div>
					</div>
				</div>
				<div className={`${styled.info}`}>{children}</div>
				<div className={styled.btn_container}>
					<button className={styled.btn_close} onClick={handleModal}>
						Cerrar
					</button>
				</div>
			</div>
			<div className={styled.background} onClick={handleModal} />
		</div>
	)
}

export default Modal
