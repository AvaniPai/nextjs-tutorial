import { getUserEmail } from '@/app/lib/actions';

export default async function Page() {
    const currUserEmail = await getUserEmail();
    return (
        <main className="h-full">
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                confirmation
            </h1>
        </main>
    );
}