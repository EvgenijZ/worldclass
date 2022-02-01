import modal_style from '../styles/modal.module.scss';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';

const Modal = ({ show, onClose, children, title }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		if (show) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.removeProperty
				? document.body.style.removeProperty('overflow')
				: document.body.style.removeAttribute('overflow');
		}

		setIsBrowser(true);
	}, [show]);

	const handleCloseClick = (e) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<div className={modal_style.modal}>
			<div
				className={modal_style.modal__close}
				onClick={() => handleCloseClick(event)}
			>
				<Image
					src='/static/images/close.svg'
					alt='Close modal icon'
					width='23'
					height='23'
				/>
			</div>
			<div className={modal_style.modal__body}>
				<iframe
					className={modal_style.modal__video}
					width='560'
					height='315'
					src='https://www.youtube.com/embed/rNDuqSPdLw0'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
			<div
				className={modal_style.modal__backdrop}
				onClick={() => handleCloseClick(event)}
			>
				123
			</div>
		</div>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById('modal-root')
		);
	} else {
		return null;
	}
};

export default Modal;
