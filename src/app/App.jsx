import React from 'react';
import About from '../core/About'
import NavBar from '../core/NavBar'
import Footer from '../core/Footer'
import Contact from '../core/Contact'
import Home from '../core/Home'
import Projects from '../core/Projects.';

// import style
import style from './App.module.css';

function App() {

	return (
		<div className={style.app}>
			<NavBar/>
			<Home/>
			<About/>
			<Projects/>
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;