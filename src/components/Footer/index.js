import waveFooter from '../../assets/images/wave-footer.svg';
import './Footer.css';

function Footer() {
	return (
		<>
			<footer className="footer">
				<img src={waveFooter} className="wave-footer" alt="wave-footer" />
				<div className="footer-text">Created by Guillermo Leal &copy; 2022</div>
			</footer>
		</>
	);
}

export { Footer };
