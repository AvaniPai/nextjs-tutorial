import Image from 'next/image';

export default function OurStory(){
	return (
		<div className="flex grid grid-rows-3 items-center justify-center mx-auto md:w-3/5 h-auto md:text-xl text-pretty">
			<OurStoryBlock1/>
			<OurStoryBlock2/>
			<OurStoryBlock3/>
		</div>
	)
}

export function OurStoryBlock1(){
	return (
		<div className="md:grid md:grid-cols-2 w-full h-full justify-self-center">
			<div className="flex items-center justify-center md:hidden">
				<Image
					src="/events/mehendi.png"
					width={200}
					height={200}
					className="styles.image"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="hidden items-center justify-center md:flex">
				<Image
					src="/events/mehendi.png"
					width={400}
					height={800}
					className="styles.image hidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="text-center xl:p-10">
				<article className="">We are very fortunate and grateful to be able to host our wedding this year and have so many of you celebrate our matrimony with us.
					This is more than enought of a gift for us, however, if you would like to bestow a monetary gift, please visit the link below.
				</article>
				<br/>
				<article className="">As you may know, we currently reside in Tokyo, Japan, and therefore are not accepting any physical gifts, as it is rather difficult for us
					to transport it back home. In lieu of physical gifts, we have set up two monetary funds via the Hitch@apos;d gift registry platform.
				</article>
				<br/>
				<article className="">The first is a honeymoon fund and the second is a charity fund. If you choose to make a contribution, you are more than welcome to pick one or the other or even split your contribution between the two funds.
				</article>
				<br/>
				<article className="text-lg text-yellow-900">Please enter the following password to view the regsitry page.</article>
				<br/>
				<h2 className="text-xl text-bold">Password: Fionashome301</h2>
            </div>
		</div>
	)
}
export function OurStoryBlock2(){
	return (
		<div className="md:grid md:grid-cols-2 w-full h-full justify-self-center">
			<div className="text-center xl:p-10">
				<article className="">We are very fortunate and grateful to be able to host our wedding this year and have so many of you celebrate our matrimony with us.
					This is more than enought of a gift for us, however, if you would like to bestow a monetary gift, please visit the link below.
				</article>
				<br/>
				<article className="">As you may know, we currently reside in Tokyo, Japan, and therefore are not accepting any physical gifts, as it is rather difficult for us
					to transport it back home. In lieu of physical gifts, we have set up two monetary funds via the Hitch@apos;d gift registry platform.
				</article>
				<br/>
				<article className="">The first is a honeymoon fund and the second is a charity fund. If you choose to make a contribution, you are more than welcome to pick one or the other or even split your contribution between the two funds.
				</article>
				<br/>
				<article className="text-lg text-yellow-900">Please enter the following password to view the regsitry page.</article>
				<br/>
				<h2 className="text-xl text-bold">Password: Fionashome301</h2>
            </div>
			<div className="hidden items-center justify-center md:flex">
				<Image
					src="/events/mehendi.png"
					width={400}
					height={800}
					className="styles.image hidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
		</div>
	)
}
export function OurStoryBlock3(){
	return (
		<div className="md:grid md:grid-cols-2 w-full h-full justify-self-center">
			<div className="hidden items-center justify-center md:flex">
				<Image
					src="/events/mehendi.png"
					width={400}
					height={800}
					className="styles.image hidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="text-center xl:p-10">
				<article className="">We are very fortunate and grateful to be able to host our wedding this year and have so many of you celebrate our matrimony with us.
					This is more than enought of a gift for us, however, if you would like to bestow a monetary gift, please visit the link below.
				</article>
				<br/>
				<article className="">As you may know, we currently reside in Tokyo, Japan, and therefore are not accepting any physical gifts, as it is rather difficult for us
					to transport it back home. In lieu of physical gifts, we have set up two monetary funds via the Hitch@apos;d gift registry platform.
				</article>
				<br/>
				<article className="">The first is a honeymoon fund and the second is a charity fund. If you choose to make a contribution, you are more than welcome to pick one or the other or even split your contribution between the two funds.
				</article>
				<br/>
				<article className="text-lg text-yellow-900">Please enter the following password to view the regsitry page.</article>
				<br/>
				<h2 className="text-xl text-bold">Password: Fionashome301</h2>
            </div>
		</div>
	)
}
