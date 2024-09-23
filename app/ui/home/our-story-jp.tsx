import Image from 'next/image';
import { noto_serif_japanese, quicksand } from '../fonts';

export default function OurStory() {
	return (
		<div>
			<h1 className={`text-center text-xl md:text-4xl mb-8 underline decoration-gray-300 decoration-double`}>私たちの出会い</h1>
			<div className="items-center justify-center mx-auto md:w-3/5 h-auto md:text-xl textpretty space-y-2 md:space-y-8">
				<OurStoryBlock1 />
				<OurStoryBlock2 />
				<OurStoryBlock3 />
			</div>
		</div>
	)
}

export function OurStoryBlock1() {
	return (
		<div className="md:grid md:grid-cols-2 w-full justify-self-center md:bg-gray-100  xl:p-10">
			<div className="flex justify-center md:hidden">
				<Image
					src="/avani_and_shusuke/our_story_one.png"
					width={150}
					height={200}
					className="styles.image"
					alt="Illustration of each wedding event."
				/>
				<Image
					src="/avani_and_shusuke/our_story_one_b.png"
					width={150}
					height={200}
					className="styles.image"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="hidden flex-col items-center justify-start space-y-4 md:flex">
				<Image
					src="/avani_and_shusuke/our_story_one.png"
					width={400}
					height={800}
					className="styles.image hidden md:flex"
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
			<div className="text-center bg-white md:p-5">
				<article>地平線からわずかに顔をのぞかせた太陽が眠気を誘う中、名古屋大学のキャンパスの隅々から地下鉄の駅に向かって学生たちが流れてきた。</article>
				<br/>
				<article className="text-pretty">&quot;シュウスケ、英語喋りたい？前の二人が英語喋ってるよ！&quot;</article>
				<br/>
				<article className="text-pretty">陸上部のチームメイトと会話をしていたアバニは、振り返って話し手に気づいた。彼は、彼女がその月の初めに会った別のチームメイトだった。</article>
				<br/>
				<article className="text-pretty">&quot;Oh, you&#39;re that person who asked me if I was Indian, and then ran away after I said &apos;Yes&apos;. What&apos;s your name, by the way? （ああ、あなたは私にインド人かと尋ねてきて、私がそうだよと言ったらどこかへ走って行った人だね。ところで二人の名前はなんて言うの？）&quot;</article>
				<br/>
				<article className="text-pretty">アバニは、そのチームメイトの名前がシンゴであること、そして彼の横に立っている熱心でよく日焼けした友人の名前がシュウスケであることを知った。 慎悟は英語で、脩介が大学で留学生に会うのを楽しみにしていて、どうしたら留学生と友達になれるか悩んでいると説明した。 シュウスケは英語があまり分からなかったようで定期的に「イエーイ！」とハイタッチをして、アバニを楽しませた。
					アバニ自身、留学中に現地の日本人学生と友達になりたいと思っていたので、その週の後半に彼らを交換留学生達のランチに誘い、3人はLINEを交換した。
				</article>
			</div>
		</div>
	)
}
export function OurStoryBlock2() {
	return (
		<div className="md:grid md:grid-cols-2 w-full justify-self-center md:bg-gray-100  xl:p-10">
			<div className="flex justify-center md:hidden">
				<Image
					src="/avani_and_shusuke/our_story_two.png"
					width={150}
					height={200}
					className="styles.image"
					alt="Illustration of each wedding event."
				/>
				<Image
					src="/avani_and_shusuke/our_story_two_b.png"
					width={100}
					height={200}
					className="styles.image"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="text-center bg-white  md:p-5">
				<article className="text-pretty">
					それから１ヶ月が経つとシュウスケとアバニは良い友達になった (😉)、週に数回、陸上部やダンスサークルで一緒に活動するだけでなく、二人で昼食を取ることが多くなっていった。
					ダンスサークルのアバニの友達はシュウスケがアバニに片思いしていると主張し始めたが、彼女はありえないと思っていた。 &quot;Me? The foreign girl who is going back to her far-away country by the end
					of the summer? No way! （夏が終わる頃には遠い国へ帰ってしまう外国人の私が？まさか！）&quot;
				</article>
				<br />
				<article className="text-pretty">
					しかし2017年5月23日、アバニは友人たちが正しかったことに気づいた。
				</article>
				<article className="text-pretty">
					陸上部からの帰り道、シュウスケはアバニとの別れ際に呼び止めた。
				</article>
				<br />
				<article>
					<a className={` ${noto_serif_japanese.className}`}>「ちょっと待って下さい。心の準備をします。」</a> .
				</article>
				<br />
				<article className="text-pretty">&quot;I love you,&quot; 彼は自信満々に言った。</article>
				<br />
				<article className="text-pretty italic">オーマイガーーー！！</article>
				<br />
				<article className="text-pretty">&quot;Did you mean &apos;I like you?&apos;&quot;私は小さな声で聞き返した。 &quot;Because &apos;I love you&apos; means <article className={` ${noto_serif_japanese.className} inline`}>愛していますよ</article>
					and &apos;I like you&apos; means <p className={` ${noto_serif_japanese.className} inline`}>好きだよ</p>.&quot;
				</article>
				<br />
				<article className="text-pretty">もしかしたらシュウスケは, &quot;英語のレッスン?! 今?! アバニ、せっかくの時間が台無しだよ!&quot;と思ったかもしれない。 それでもシュウスケは止まらなかった、彼はすぐに告白の言葉を訂正し、アバニがガールフレンドになってくれるかと尋ね、彼女は承諾した。
				</article>
			</div>
			<div className="hidden flex-col items-center justify-start space-y-4 md:flex">
				<Image
					src="/avani_and_shusuke/our_story_two.png"
					width={400}
					height={600}
					className="styles.image hidden md:flex"
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
		<div className="md:grid md:grid-cols-2 w-full justify-self-center md:bg-gray-100  xl:p-10">
			<div className="hidden flex-col items-start justify-start md:flex">
				<Image
					src="/avani_and_shusuke/our_story_three.png"
					width={500}
					height={1100}
					className="styles.image hidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="flex justify-center md:hidden">
				<Image
					src="/avani_and_shusuke/our_story_three.png"
					width={150}
					height={200}
					className="styles.image"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="text-center bg-white  md:p-5">
				<article className="text-pretty">その夏は、二人が経験した中で最も幸せな夏のひとつだった。世界の異なる地域で生まれ、多くの点で全く異なる道で人生を経験してきた二人が、これほど垣根なく心を通わせることができると誰が想像できただろうか。二人が分かち合った愛は本当に特別だった、遠距離恋愛の困難な6年間を乗り切り、これからの長い年月を一緒に過ごしたいと確信したのだから。ひとつの国で、ひとつの家で。
				</article>
				<br />
				<article className={` ${noto_serif_japanese.className}`}>私たちの新たな門出の祝宴が始まります 😊</article>
				<article className={` ${noto_serif_japanese.className}`}>是非ご参加ください！</article>
			</div>
		</div>
	)
}
