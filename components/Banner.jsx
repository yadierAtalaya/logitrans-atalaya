import React, { useEffect, useState } from 'react'
import styles from '../styles/banner.module.css'

export const Banner = ({ url, urlMobile }) => {
	const [image, setImage] = useState(url)
	const [handleWidth, setHandleWidth] = useState(0)

	useEffect(() => {
		const widthScreen = window.innerWidth
		setHandleWidth(widthScreen)

		window.onresize = function () {
			setHandleWidth(window.innerWidth)
		}

		const handleImage = () => {
			handleWidth < 600 ? setImage(urlMobile) : setImage(url)
		}

		handleImage()
	}, [handleWidth])

	return (
		<div className={`${styles.container}`}>
			<div className={`mt-5 mb-4  ${styles.card}`}>
				<div style={{ width: '100%', borderRadius: '10px' }}>
					<img
						src={`${image}`}
						width='100%'
						height='450rem'
						alt='banners de atalaya'
					/>
				</div>
			</div>
		</div>
	)
}
