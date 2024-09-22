'use client';

import { usePathname } from "next/navigation";

export default function LanguageToggle() {
	const currPathName = usePathname();

	const en_path = currPathName.replace("/jp/", "/en/");
	const jp_path = currPathName.replace("/en/", "/jp/");
	return (
		<div>
			<a className="p-3 hover:text-blue-400" href={en_path}>EN</a>
			<a className="pr-3 hover:text-red-400" href={jp_path}>JP</a>
		</div>
	)

}