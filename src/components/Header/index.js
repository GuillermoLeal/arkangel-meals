import logo from '../../assets/images/logo.png';
import waveHeader from '../../assets/images/wave-header.svg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<>
			<header className="header">
				<div className="logo">
					<img src={logo} className="logo-img" alt="logo" />
					<Link to={'/'}>
						<h1 className="logo-title">ARKANGEL MEALS</h1>
					</Link>
				</div>
			</header>
			<img src={waveHeader} alt="wave-header" />
		</>
	);
}

export { Header };
