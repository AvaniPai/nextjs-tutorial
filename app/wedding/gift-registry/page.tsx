import Link from "next/link";
import Image from "next/image";

export default function Page() {

    return (
        <main>
            <div className="flex items-center flex-col">
                <Image
                    src="/valley_ill_ss.png"
                    width={600}
                    height={600}
                    alt="hydrangea watercolor"
                />
                <div className="w-96 text-center mb-6">
                    <article className="text-pretty text-lg mt-8">We are very fortunate and grateful to be able to host our wedding this year and have so many of you celebrate our matrimony with us.
                        This is more than enought of a gift for us, however, if you would like to bestow a monetary gift, please visit the link below.
                    </article>
                    <br/>
                    <article className="text-pretty text-lg">As you may know, we currently reside in Tokyo, Japan, and therefore are not accepting any physical gifts, as it is rather difficult for us
                        to transport it back home. In lieu of physical gifts, we have set up two monetary funds via the Hitch&apos;d gift registry platform.
                    </article>
                    <br/>
                    <article className="text-pretty text-lg">The first is a honeymoon fund and the second is a charity fund. If you choose to make a contribution, you are more than welcome to pick one or the other or even split your contribution between the two funds.
                    </article>
                    <br/>
                    <article className="text-lg text-yellow-900">Please enter the following password to view the regsitry page.</article>
                    <br/>
                    <h2 className="text-xl text-bold">Password: Fionashome301</h2>
                </div>

                <Link href="www.hitchd.com/bonvoyagesugirypai"
                    className="flex h-10 items-center rounded-lg bg-yellow-900 px-4 text-md font-medium text-white transition-colors hover:bg-teal-500 mb-4"
                >Make a Contribution</Link>

            </div>
        </main>
    );
}