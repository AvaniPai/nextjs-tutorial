import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";
import Image from "next/image";
import { quicksand } from "@/app/ui/fonts";

export default function Page() {

    return (
        <main>
            <div className="flex items-center flex-col">
                <Image
                    className="hidden sm:block"
                    src="/building_ryokan.png"
                    width={400}
                    height={400}
                    alt="cute illustration of a blue hotel building"
                />
                <Image
                    className="block sm:hidden"
                    src="/building_ryokan.png"
                    width={200}
                    height={200}
                    alt="cute illustration of a blue hotel building"
                />
                <h1 className={`mt-4 text-xs sm:text-xl whitespace-pre`}>披露宴後の宿</h1>
                <a href="https://maps.app.goo.gl/LJVCfHy6YdV8Gm8u6" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
                    あわらの隠れ宿 湯楽
				</a>
                <a href="https://maps.app.goo.gl/ewCnCiM1zAWm1UfC8" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
                    あわら温泉グランドホテル
				</a>
                <a href="https://maps.app.goo.gl/cbEoUy4nanFzQF9ZA" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
                    みのや泰平閣
				</a>
                <br />
                <div className="max-w-xl text-center mb-6 text-pretty sm:text-xl">
                    <article></article><br />
                    <article>
                        遠方の県外や海外からお越しくださるご友人の皆様にとって、日帰りでの参加は難しいかと思い、新郎の地元である芦原温泉の旅館を仮予約いたしました。
                    </article>
                    <article>
                        （11月30日(土)チェックイン - 12月1日(日)チェックアウト）
                    </article>
                    <br/>
                    <article>
                        披露宴にご参加いただく人数が確定次第、3つのうちいずれかの温泉旅館のどちらに宿泊していただくかを連絡いたします。
                    </article>
                    <br/>
                </div>

                {/* <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1715624267227&key=GRP&app=resvlink"
                    className="flex h-10 items-center rounded-lg bg-teal-600 px-4 text-md font-medium text-white transition-colors hover:bg-teal-500 mb-4"
                    target="_blank" rel="noopener noreferrer"
                >Book a Room</a> */}
                <div className="hidden sm:block">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1fsrZ02KjHOMuKCt7FZpJHFnC4aX-3z8&ehbc=2E312F" width="640" height="480"></iframe>
                </div>
                <div className="block sm:hidden">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1fsrZ02KjHOMuKCt7FZpJHFnC4aX-3z8&ehbc=2E312F" width="320" height="240"></iframe>
                </div>
            </div>
        </main>
    );
}