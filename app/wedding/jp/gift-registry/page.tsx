import Link from "next/link";
import Image from "next/image";

export default function Page() {

    return (
        <main className="items-center justify-center mx-auto xl:w-4/5 h-auto xl:text-xl">
            <div className="xl:w-2/3 xl:mx-auto text-center mb-6 text-pretty xl:text-3xl text-sm">
                <article className="xl:text-5xl text-xl">結婚式用バスのご案内</article><br />
                <article>
                    あわら温泉と福井市内を往復するバスをご用意しております。あわら湯のまち駅にバスが待機しておりますので、あわら温泉で前泊される方は是非あわら湯のまち駅からの臨時バスをご利用ください。
                </article>
                <br/>
                <article>
                    神前式の後、バスは披露宴会場である出雲記念館と足羽神社間を移動します。
                </article>
                <br/>
                <article>
                    披露宴後にバスは福井駅経由であわら温泉に戻り、皆様をあわら湯のまち駅周辺の二次会会場までお送りします。
                </article>
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-self-center">
                <div className="xl:pr-2 flex justify-center items-center xl:w-1/2">
                    <Image
                        className=""
                        src="/shukuhaku.png"
                        width={1200}
                        height={800}
                        alt="hydrangea watercolor"
                    />                    
                </div>
                <div className="pt-6 xl:w-1/2">
                    <div className="border-4 border-orange-300">
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl xl:text-3xl text-xl">
                                あわら湯のまち→足羽神社
                            </div>
                            <div className="flex justify-center mt-1 xl:text-2xl">
                                <table className="w-4/5 table-auto text-center  border-spacing-4 border-4 border-orange-200">
                                    <thead>
                                        <tr>
                                            <th className="w-3/4 xl:w-96">乗車場所</th>
                                            <th className="w-1/4 xl:w-24">時間</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>あわら湯のまち駅</td>
                                            <td>12:55</td>
                                        </tr>
                                        <tr>
                                            <td>JR福井駅東口</td>
                                            <td>13:35</td>
                                        </tr>
                                        <tr>
                                            <td>足羽神社</td>
                                            <td>13:50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                   
                        </div>
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl xl:text-3xl text-md">
                                披露宴会場→二次会会場(あわら湯のまち)
                            </div>
                            <div className="flex justify-center mt-1 xl:text-2xl">
                                <table className="w-4/5 table-auto text-center  border-4 border-orange-200">
                                    <thead>
                                        <tr>
                                            <th className="w-3/4 xl:w-96">乗車場所</th>
                                            <th className="w-1/4 xl:w-24">時間</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>出雲記念館</td>
                                            <td>19:15</td>
                                        </tr>
                                        <tr>
                                            <td>二次会会場(あわら湯のまち)</td>
                                            <td>20:00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl xl:text-3xl text-md">
                            二次会会場(あわら湯のまち)→芦原温泉駅
                            </div>
                            <div className="flex justify-center mt-1 xl:text-2xl">
                                <table className="w-4/5 table-auto  border-4 border-orange-200 text-center">
                                    <thead>
                                        <tr>
                                            
                                            <th className="w-40 xl:w-96">乗車場所</th>
                                            <th className="w-12 xl:w-16">時間</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>二次会会場</td>
                                            <td>22:40</td>
                                        </tr>
                                        <tr>
                                            <td>芦原温泉駅</td>
                                            <td>22:50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}