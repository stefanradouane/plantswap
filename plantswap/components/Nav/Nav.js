'use client';
import styles from './nav.module.scss';
import NavItem from './NavItem';
import { useState } from 'react';

const menu_list = [
	{ text: 'Home', href: '/' },
	{ text: 'Alle stekjes', href: '/planten' },
	{ text: 'Doneren', href: '/doneren' },
	{ text: 'Contact', href: '/contact' },
	{ text: 'Over ons', href: '/over-ons' },
];

const Nav = () => {
	const [navActive, setNavActive] = useState(null);
	const [activeIndex, setActiveIndex] = useState(-1);

	return (
		<nav className={styles.nav}>
			{/* Set nav active (mobile) */}
			<div
				onClick={() => {
					setNavActive(!navActive);
				}}
				className={styles.nav__toggle}
			>
				<span></span>
				<span></span>
			</div>

			<ul className={`${navActive ? 'active' : ''} nav__menu-list`}>
				{/* Update the current navitem index */}
				{menu_list.map((item, index) => (
					<li
						onClick={() => {
							setActiveIndex(index);
							setNavActive(false);
						}}
						key={item.text}
					>
						<NavItem active={activeIndex === index} {...item} />
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
