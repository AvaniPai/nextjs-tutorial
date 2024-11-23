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
            <div className="flex xl:flex-row justify-center text-sm">
                <div className="pt-6 xl:w-1/2">
                    <div className="border-4 border-orange-300">
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl">
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
                                            <td>大江戸温泉あわら</td>
                                            <td>12:10</td>
                                        </tr>                                        
                                        <tr>
                                            <td>あわら隠れ宿ゆ楽</td>
                                            <td>12:15</td>
                                        </tr>
                                        <tr>
                                            <td>みのや泰平閣</td>
                                            <td>12:20</td>
                                        </tr>

                                        <tr>
                                            <td>あわら温泉グランドホテル</td>
                                            <td>12:25</td>
                                        </tr>                                           
                                        <tr>
                                            <td>福井駅東口</td>
                                            <td>13:10</td>
                                        </tr>
                                        <tr>
                                            <td>足羽神社</td>
                                            <td>13:25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                        </div>
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl  ">
                                神前式会場 → 披露宴会場
                            </div>
                            <div className="flex justify-center mt-1 xl:text-2xl">
                                <table className="w-4/5 table-auto text-center  border-4 border-orange-200">
                                    <thead>
                                        <tr>
                                            <th className="w-3/4 xl:w-96">Location</th>
                                            <th className="w-1/4 xl:w-24">Arrival Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>足羽神社</td>
                                            <td>15:10</td>
                                        </tr>
                                        <tr>
                                            <td>出雲記念館</td>
                                            <td>15:25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>                        
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl  text-xs">
                                披露宴会場→各旅館(チェックインのため)
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
                                            <td>福井駅東口</td>
                                            <td>19:30</td>
                                        </tr>
                                        <tr>
                                            <td>あわら温泉グランドホテル</td>
                                            <td>20:10</td>
                                        </tr>
                                        <tr>
                                            <td>みのや泰平閣</td>
                                            <td>20:20</td>
                                        </tr>
                                        <tr>
                                            <td>あわら隠れ宿ゆ楽</td>
                                            <td>20:25</td>
                                        </tr>
                                        <tr>
                                            <td>大江戸温泉あわら</td>
                                            <td>20:30</td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl  ">
                            各旅館→夢（二次会会場）
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
                                            <td>あわら温泉グランドホテル</td>
                                            <td>20:40</td>
                                        </tr>
                                        <tr>
                                            <td>みのや泰平閣</td>
                                            <td>20:45</td>
                                        </tr>
                                        <tr>
                                            <td>あわら隠れ宿ゆ楽</td>
                                            <td>20:50</td>
                                        </tr>
                                        <tr>
                                            <td>大江戸温泉あわら</td>
                                            <td>20:55</td>
                                        </tr>
                                        <tr>
                                            <Link href="https://maps.app.goo.gl/hEdfUvPMQbnmaLCU8" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
							                    <td>二次会「夢」</td>
						                    </Link>
                                            <td>21:10</td>
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
