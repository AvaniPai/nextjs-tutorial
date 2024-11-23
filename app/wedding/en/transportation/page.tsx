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
            <div className="flex xl:flex-row justify-center">
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
                                            <td>Oedo Onsen Monogatari Awara</td>
                                            <td>12:10</td>
                                        </tr>                                        
                                        <tr>
                                            <td>Yuraku</td>
                                            <td>12:15</td>
                                        </tr>
                                        <tr>
                                            <td>Awara Onsen Minoya Taiheikan</td>
                                            <td>12:20</td>
                                        </tr>

                                        <tr>
                                            <td>Awara Onsen Grand Hotel</td>
                                            <td>12:25</td>
                                        </tr>                                           
                                        <tr>
                                            <td>JR Fukui Station (East Exit)</td>
                                            <td>13:10</td>
                                        </tr>
                                        <tr>
                                            <td>Asuwa Shrine</td>
                                            <td>13:25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <div className="pt-10"/>
                            <div className="flex justify-center text-xl">Shinzenshiki 14:00-14:30</div>
                            <div className="flex justify-center text-xl">Photos & Mingling 14:30-15:00</div>
                        </div>
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl xl:text-3xl text-md">
                                Shrine → Reception Hall
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
                                            <td>Asuwa Shrine</td>
                                            <td>15:10</td>
                                        </tr>
                                        <tr>
                                            <td>Izumo Kinenkan</td>
                                            <td>15:25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <div className="pt-10"></div>
                            <div className="flex justify-center text-xl">Reception Check-in  15:45</div>
                            <div className="flex justify-center text-xl">Reception 16:30-19:00</div>
                        </div>
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl xl:text-3xl text-md">
                                Reception Hall→
                                Hotel(For check-in)
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
                                            <td>Fukui Station</td>
                                            <td>19:30</td>
                                        </tr>
                                        <tr>
                                            <td>Awara Onsen Grand Hotel</td>
                                            <td>20:10</td>
                                        </tr>
                                        <tr>
                                            <td>Awara Onsen Minoya Taiheikan</td>
                                            <td>20:20</td>
                                        </tr>
                                        <tr>
                                            <td>Yuraku</td>
                                            <td>20:25</td>
                                        </tr>
                                        <tr>
                                            <td>Oedo Onsen Monogatari Awara</td>
                                            <td>20:30</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="flex justify-center xl:mt-8 mt-4 xl:text-2xl xl:text-3xl text-md">
                            Hotel → Yume (After-party venue)
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
                                            <td>Awara Onsen Grand Hotel</td>
                                            <td>20:40</td>
                                        </tr>
                                        <tr>
                                            <td>Awara Onsen Minoya Taiheikan</td>
                                            <td>20:45</td>
                                        </tr>
                                        <tr>
                                            <td>Yuraku</td>
                                            <td>20:50</td>
                                        </tr>
                                        <tr>
                                            <td>Oedo Onsen Monogatari Awara</td>
                                            <td>20:55</td>
                                        </tr>
                                        <tr>
                                            <Link href="https://maps.app.goo.gl/hEdfUvPMQbnmaLCU8" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
							                    <td>Yume</td>
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
