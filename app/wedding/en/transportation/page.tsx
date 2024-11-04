import Link from "next/link";
import Image from "next/image";

export default function Page() {

    return (
        <main className="items-center justify-center mx-auto xl:w-4/5 h-auto xl:text-xl">
            <div className="xl:w-2/3 xl:mx-auto text-center mb-6 text-pretty xl:text-3xl text-sm">
                <article className="xl:text-5xl text-xl">Chartered Bus Details</article><br />
                <article>
                We have arranged a bus to ferry our guests to and from Awara Onsen and Fukui City. For our overseas and out-of-state guests who may be arriving early for the wedding (i.e. the previous night or Saturday morning) please note that the bus will be waiting at Awara Yunomachi Station to take you to Asuwa Shrine, on Saturday afternoon.
                </article>
                <br/>
                <article>
                    Once the Shinzenshiki finishes, the bus will transport guests between Asuwa Shrine and Izumo Kinenkan, where the reception will be held. After the reception, the bus will head back to Awara Onsen and will make a pit stop at Fukui Station for those who are planning to return home immediately. Please note that in the evening when heading back to Awara Onsen, the bus will drop everyone off at the after party location, not at Awara-Yunomoachi Station.
                </article>
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-self-center">
                <div className="xl:pr-2 flex justify-center items-center xl:w-1/2">
                    <Image
                        className=""
                        src="/shukuhaku.png"
                        width={1200}
                        height={800}
                        alt="illustration of a Japanese ryokan"
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
                                            <td>Yuraku</td>
                                            <td>12:40</td>
                                        </tr>
                                        <tr>
                                            <td>Minoroya Taihei Pavilion</td>
                                            <td>12:45</td>
                                        </tr>

                                        <tr>
                                            <td>Awara Onsen Grand Hotel</td>
                                            <td>12:50</td>
                                        </tr>                                           
                                        <tr>
                                            <td>JR Fukui Station (East Exit)</td>
                                            <td>13:30</td>
                                        </tr>
                                        <tr>
                                            <td>Asuwa Shrine</td>
                                            <td>13:45</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                   
                        </div>
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl xl:text-3xl text-md">
                                Reception Hall→
                                After-party Venue (close to Awara-Yunomachi Station)
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
                                            <td>Izumo Kinenkan</td>
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
                            After-party Venue→ Awara Onsen Station
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
                                            <td>Awara Onsen Station</td>
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
