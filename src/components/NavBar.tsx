import React from 'react';
import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";

const NavBar = () => {
	return (
		<nav className={'sticky h-14 z-30 t-0 w-full border-b border-gray-300 bg-white/75 backdrop-blur-lg transition-all'}>
			<MaxWidthWrapper>
				Nav Bar
			</MaxWidthWrapper>
		</nav>
	);
};

export default NavBar;