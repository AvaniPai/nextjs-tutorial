import Image from 'next/image';
import { noto_serif_japanese, quicksand } from '../fonts';

export default function OurStory() {
	return (
		<div>
			<h1 className={`  text-center text-4xl mb-8 underline decoration-suedeboots decoration-double`}>The Story Of How We Met</h1>
			<div className="flex grid grid-rows-3 items-center justify-center mx-auto md:w-3/5 h-auto md:text-xl text-pretty">
				<OurStoryBlock1 />
				<OurStoryBlock2 />
				<OurStoryBlock3 />
			</div>
		</div>
	)
}

export function OurStoryBlock1() {
	return (
		<div className="md:grid md:grid-cols-2 w-full h-full justify-self-center">
			<div className="flex items-center justify-center md:hidden">
				<Image
					src="/avani_and_shusuke/our_story_one.png"
					width={200}
					height={200}
					className="styles.image"
					alt="Illustration of each wedding event."
				/>
				<Image
					src="/avani_and_shusuke/our_story_one_b.png"
					width={200}
					height={200}
					className="styles.image"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="hidden flex-col items-center justify-start md:flex">
				<Image
					src="/avani_and_shusuke/our_story_one.png"
					width={400}
					height={800}
					className="styles.image hidden md:flex pb-4"
					alt="Illustration of each wedding event."
				/>
				<Image
					src="/avani_and_shusuke/our_story_one_b.png"
					width={400}
					height={800}
					className="styles.image"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="text-center xl:p-10">
				<article className="text-pretty">&quot;Hey, they&apos;re speaking English! Wanna join them?&quot;</article>
				<br />
				<article className="text-pretty">Avani, who was mid-conversation with a fellow cross-country club teammate, looked back and recognized the speaker. He was another teammate she had met earlier that month.</article>
				<br />
				<article className="text-pretty">&quot;Oh, you&#39;re that person who asked me if I was Indian, and then ran away after I said &apos;Yes&apos;. What&apos;s your name, by the way? &quot;</article>
				<br />
				<article className="text-pretty">Avani learned that the teammate&apos;s name was Shingo and his eager, well-tanned friend standing beside him was named Shusuke. Shingo explained in English that Shusuke was
					excited to meet international students and was wondering how he can become friends with them. Shusuke periodically chimed in with a &quot;yeah!&quot; and an exuberant high-five, much to Avani&apos;s amusement.
					Avani, herself eager to make friends with local Japanese students, invited them to join her and the other exchange students for lunch later that week, and the three of them exchanged phone numbers.
				</article>
			</div>
		</div>
	)
}
export function OurStoryBlock2() {
	return (
		<div className="md:grid md:grid-cols-2 w-full h-full justify-self-center">
			<div className="text-center xl:p-10">
				<article className="text-pretty">
					Fast-forward to a month later. Shusuke and Avani have become good friends (😉), often having lunch together in addition to hanging out during cross-country club and dance club a few times a week.
					Avani&apos;s friends in the dance club began insisting that Shusuke had a crush on her, but she always scoffed in return. &quot;Me? The foreign girl who is going back to her far-away country by the end
					of the summer? No way! &quot;
				</article>
				<br />
				<article className="text-pretty">
					But on May 23<sup>rd</sup> 2017, Avani realized that her friends had been right.
				</article>
				<br />
				<article className={` ${noto_serif_japanese.className}`}>「ちょっと待って下さい。心の準備をします。」</article>
				<article> &#40;Please wait a moment, I need to prepare myself.&#41;</article>
				<br />
				<article className="text-pretty">&quot;I love you.&quot;</article>
				<br />
				<article className="text-pretty">Ohhhhhmmmmyyyyygo-</article>
				<br />
				<article className="text-pretty">&quot;Did you mean &apos;I like you?&apos; Because &apos;I love you&apos; means <article className={` ${noto_serif_japanese.className} inline`}>愛していますよ</article>
					and &apos;I like you&apos; means <p className={` ${noto_serif_japanese.className} inline`}>好きだよ</p>.&quot;
				</article>
				<br />
				<article className="text-pretty">You might be thinking, an English lesson?! Now?! Avani, you&#39;ve completely ruined the moment! Which she might have, but that didn&#39;t stop Shusuke. He quickly amended his
					confessionary statement and asked if Avani would be his girlfriend, to which she agreed.
				</article>
			</div>
			<div className="hidden flex-col items-center justify-start md:flex">
				<Image
					src="/avani_and_shusuke/our_story_two.png"
					width={400}
					height={600}
					className="styles.image hidden md:flex pb-4"
					alt="Illustration of each wedding event."
				/>
				<Image
					src="/avani_and_shusuke/our_story_two_b.png"
					width={400}
					height={800}
					className="styles.image hidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
		</div>
	)
}
export function OurStoryBlock3() {
	return (
		<div className="md:grid md:grid-cols-2 w-full h-full justify-self-center">
			<div className="hidden flex-col items-start justify-start md:flex pt-10">
				<Image
					src="/avani_and_shusuke/our_story_three.png"
					width={600}
					height={1100}
					className="styles.image hidden md:flex pb-4"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="text-center xl:p-10">
				<article className="text-pretty">That summer was one of the happiest summers they had ever experienced. Who could imagine that two people born in different parts of the world and experiencing life in so many fundamentally
					different ways could connect with each other so seamlessly? The love they shared for each other was indeed special, because it weathered them through the difficulties of long-distance dating
					for six years and convinced them that they want to spend the rest of their many years to come, together. In one country, in one home.
				</article>
				<br />
				<article className="text-pretty">So please, join us as we celebrate the beginning of our new life together 😊</article>
				<article className={` ${noto_serif_japanese.className}`}>さて、祝いましょう！</article>
			</div>
		</div>
	)
}
