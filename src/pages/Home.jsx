import { useCycle } from 'framer-motion';
import { Menu } from '../components/Menu/Menu';
import { Stadium } from '../components/Stadium/Stadium';

export const Home = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	return (
		<div className='home-content'>
			<Menu isOpen={isOpen} toggleOpen={toggleOpen} />
			<Stadium isOpen={isOpen} />
		</div>
	);
};
