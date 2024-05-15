import { Link } from 'react-router-dom';
import './AboutPage.css';
const About = () => {
	return (
		<div className='about'>
			<h1>
				React shopping_cart -{' '}
				<Link
					to='https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart'
					target='_blank'
				>
					The Odin Project
				</Link>
			</h1>
			<p>
				Homepage Background Image -
				<Link
					to='https://unsplash.com/photos/person-walking-and-using-umbrella-near-boutique-VobXg0hVigk'
					target='_blank'
				>
					Jan Antonin Kolar
				</Link>
			</p>
			<p>
				CardModal, Rating - 
				<Link to='https://mui.com/' target='_blank'>
					Material UI
				</Link>
			</p>
			<p>
				Icons -
				<Link to='https://iconduck.com/' target='_blank'>
					Iconduck
				</Link>
			</p>
			<p>
				Products -
				<Link to='https://fakestoreapi.com/' target='_blank'>
					Fake Store API
				</Link>
			</p>
			<Link to='/' className='about-back-link'>
				Back to Homepage
			</Link>
		</div>
	);
};

export default About;
