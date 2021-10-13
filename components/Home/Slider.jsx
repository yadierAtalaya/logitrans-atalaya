import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styles/Home.module.css'

export const Slider = () => {
	return (
		<div className={styled.slider}>
			<Carousel>
				<Carousel.Item>
					<div
						className={`d-block w-100 ${styled.img1} ${styled.img}`}
					></div>
				</Carousel.Item>
				<Carousel.Item>
					<div
						className={`d-block w-100 ${styled.img2} ${styled.img}`}
					></div>
				</Carousel.Item>
				<Carousel.Item>
					<div
						className={`d-block w-100 ${styled.img3} ${styled.img}`}
					></div>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}
