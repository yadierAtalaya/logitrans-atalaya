import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'

const NotFoundAnimation = () => {
	const error = useRef(null)

	useEffect(() => {
		Lottie.loadAnimation({
			container: error.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../public/lotties/not-found-page.json')
		})
	}, [])
	return (
		<div
			style={{ width: '70%', backgroundRepeat: 'no-repeat' }}
			ref={error}
		></div>
	)
}

export default NotFoundAnimation
