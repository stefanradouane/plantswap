const NavItem = ({ text, href, active }) => {
	return (
		<a href={href} className={`nav__item ${active ? 'active' : ''}`}>
			{text}
		</a>
	);
};

export default NavItem;
