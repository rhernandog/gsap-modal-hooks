import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import "./modal.css";

const Modal = props => {
	let modalWrapper = null;
	let modalVeil = null;
	let modalContent = null;
	const [tl] = useState(gsap.timeline({ paused: true }));

	useEffect(() => {
		gsap.set(modalContent, { xPercent: -50, yPercent: -80 });
		tl
			.to(modalWrapper, {
				duration: 0.05,
				autoAlpha: 1
			}, 0)
			.to(modalVeil, {
				duration: 0.15,
				autoAlpha: 0.85
			}, 0)
			.to(modalContent, {
				duration: 0.25,
				yPercent: -50,
				autoAlpha: 1
			}, 0)
			.reverse();
	}, []);

	useEffect(() => {
		tl.reversed(!props.show);
	}, [props.show]);

	return ReactDOM.createPortal(
		<div className="modal-wrapper" ref={e => modalWrapper = e}>
			<div className="modal-veil" onClick={props.close} ref={e => modalVeil = e} data-testid="modalVeil"></div>
			<div className="modal-container" ref={e => modalContent = e}
				role="dialog" aria-modal="true" aria-hidden={props.show ? "false" : "true"}
				data-testid="modalContent"
			>
				<button className="button close" onClick={props.close}>Close Modal</button>
			</div>
		</div>,
		document.body
	);
};

Modal.propTypes = {
	show: PropTypes.bool,
	close: PropTypes.func
};

Modal.defaultProps = {
	show: false
};

export default Modal;
