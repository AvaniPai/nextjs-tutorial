import Link from "next/link";
import Image from "next/image";

export default function Page() {

    return (
        <main className="items-center justify-center mx-auto xl:w-4/5 h-auto xl:text-xl">
            <div className="xl:w-2/3 xl:mx-auto text-center mb-6 text-pretty xl:text-3xl text-sm">
                <article className="xl:text-5xl text-xl">Transportation Details</article><br />
                <article>
                We have arranged a bus to ferry our guests to and from Awara Onsen and Fukui City. For our overseas and out-of-state guests who may be arriving early for the wedding (i.e. the previous night or Saturday morning) please note that the bus will be waiting at Awara Yunomachi Station to take you to Asuwa Jinja, on Saturday afternoon.
                </article>
                <br/>
                <article>
                    Once the Shinzenshiki finishes, the bus will transport guests between Asuwa Jinja and Izumo Kinenkan, where the reception will be held. After the reception, the bus will head back to Awara Onsen and will make a pit stop at Fukui Station for those who are planning to return home immediately. Please note that in the evening, the bus will drop everyone off at the after party location, not at Awara Yumoachi station.
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
                                Awara-Yunomachi Station → Asuwa Shrine
                            </div>
                            <div className="flex justify-center mt-1 xl:text-2xl">
                                <table className="w-4/5 table-auto text-center  border-spacing-4 border-4 border-orange-200">
                                    <thead>
                                        <tr>
                                            <th className="w-3/4 xl:w-96">Location</th>
                                            <th className="w-1/4 xl:w-24">Arrival Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Awara-Yunomachi Station</td>
                                            <td>12:55</td>
                                        </tr>
                                        <tr>
                                            <td>JR Fukui station east exit</td>
                                            <td>13:35</td>
                                        </tr>
                                        <tr>
                                            <td>Asuwa Shirine</td>
                                            <td>13:50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                   
                        </div>
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl xl:text-3xl text-md">
                                Reception hall→
                                After-party venue(close to Awara-Yunomachi Station)
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
                                            <td>Izumo-Kinen-Kan</td>
                                            <td>19:15</td>
                                        </tr>
                                        <tr>
                                            <td>After-party venue(close to Awara-Yunomachi Station)</td>
                                            <td>20:00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl xl:text-3xl text-md">
                            After-party venue(close to Awara-Yunomachi Station)
                            </div>
                            <div className="flex justify-center mt-1 xl:text-2xl">
                                <table className="w-4/5 table-auto  border-4 border-orange-200 text-center">
                                    <thead>
                                        <tr>
                                            
                                            <th className="w-40 xl:w-96">Location</th>
                                            <th className="w-12 xl:w-16">Arrival Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>After-party venue(close to Awara-Yunomachi Station)</td>
                                            <td>22:40</td>
                                        </tr>
                                        <tr>
                                            <td>Awara-Onsen Station</td>
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