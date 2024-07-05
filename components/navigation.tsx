"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
	const path = usePathname();
	
	return (
		<nav>
			<ul>
				<li>
					<Link href='/'>Home</Link> {path === "/" ? "ei" : ""}
				</li>
				<li><Link href='/about-us'>Abount Us</Link></li> {path === "/about-us" ? "ei" : ""}
			</ul>
		</nav>
	)
}