import NotFoundAnimation from 'components/NotFoundAnimation'
import React from 'react'
import styled from '../styles/notfound.module.css'
import Link from 'next/link'

const NotFound = () => {
	return (
		<div className={`${styled.notFoundC}`}>
			<div className={`${styled.btn_backCont}`}>
				<Link href='/'>
					<a className={`${styled.btn_back}`}>volver al inicio</a>
				</Link>
			</div>
			<NotFoundAnimation />
		</div>
	)
}

export default NotFound
