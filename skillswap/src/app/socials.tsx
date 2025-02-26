"use client";

import { RiLinkedinFill, RiGithubFill, RiInstagramFill, RiFacebookFill } from "react-icons/ri";
import Link from "next/link";

type SocialsProps ={
	containerStyles: string,
	iconsStyles: string;
}

const icons = [
	{ path: "/", name: <RiLinkedinFill /> },
	{ path: "/", name: <RiGithubFill /> },
	{ path: "/", name: <RiInstagramFill /> },
    { path: "/", name: <RiFacebookFill /> },
];

const Socials = ({ containerStyles, iconsStyles } : SocialsProps) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link href={icon.path} key={index}>
						<div className={`${iconsStyles}`}>{icon.name}</div>
					</Link>
				);
			})}
		</div>
	);
};
export default Socials;