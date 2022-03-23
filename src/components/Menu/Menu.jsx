import { useRef, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const sidebar = {
	open: (height = 10000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(30px at 40px 40px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

const variants = {
	open: {
		width: 300,
	},
	closed: {
		width: 0,
	},
};

export const Menu = ({ isOpen, toggleOpen }) => {
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	const navContentRef = useRef(null);

	console.log({ height });

	useEffect(() => {
		const navEl = navContentRef.current;
		if (!isOpen) {
			setTimeout(() => {
				navEl.style.display = 'none';
			}, 1000);
		} else {
			navEl.style.display = 'block';
		}
	}, [isOpen]);

	return (
		<motion.nav
			layout
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			variants={variants}
			ref={containerRef}
		>
			<motion.div className='background' variants={sidebar} />

			<div ref={navContentRef}>
				<Navigation variable />
			</div>

			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};
