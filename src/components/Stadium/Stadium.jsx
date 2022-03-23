export const Stadium = ({ isOpen }) => {
	return (
		<div className={`container-stadium ${isOpen ? 'open' : 'close'}`}>
			<h1>Hola</h1>
		</div>
	);
};
