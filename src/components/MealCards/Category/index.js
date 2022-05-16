import './Category.css';

function Category({ title, image }) {
	return (
		<article className="card-category">
			<img src={image} alt={'category-' + title} />
			<h3>{title}</h3>
		</article>
	);
}

export { Category };
