import './Error404.css';
import { Link } from 'react-router-dom';

function Error404() {
	return (
		<div className="error-page">
			<h1 className="error-status">404</h1>
			<h2 className="error-title">Page not found</h2>
			<p className="error-text">
				The page you are looking for might have been removed had its name
				changed or is temporarily unavailable.
			</p>
			<p>Please try the following:</p>
			<ul>
				<li>
					Check the URL for errors,{' '}
					<strong>you might have mistyped the address</strong>.
				</li>
				<li>
					Contact the <strong>webmaster</strong> or try navigating back to the{' '}
					<strong>
						<Link to={'/'}>home page</Link>
					</strong>
					.
				</li>
			</ul>
		</div>
	);
}

export { Error404 };
