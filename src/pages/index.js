import React from "react";
import Header from '../components/header';
import { Link } from "gatsby";

export default function Home() {
	return (
		<div style={{ color: 'purple' }}>
			<Link to="/about">About</Link>
			<Header />
			<p>What a fuckin world</p>
			<img src="https://source.unsplash.com/random/400x200" alt="" />
		</div>
	);
}
