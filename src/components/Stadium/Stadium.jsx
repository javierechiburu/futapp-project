import { useEffect, useRef } from 'react';

export const Stadium = ({ isOpen }) => {
	const stadiumRef = useRef(null);

	useEffect(() => {
		const stadiumEl = stadiumRef.current;
		if (isOpen) {
			stadiumEl.classList[1] && stadiumEl.classList.remove('close');
			stadiumEl.classList.add('open');
		} else {
			setTimeout(() => {
				stadiumEl.classList[1] && stadiumEl.classList.remove('open');

				stadiumEl.classList.add('close');
			}, 1000);
		}
	}, [isOpen]);

	return (
		<div className='container-stadium close' ref={stadiumRef}>
			<h1>Hola</h1>
		</div>
	);
};
