import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
             <Image
               src="/as_logo_white.png"
               width={200}
               height={200}
               alt="Avani and Shusuke's wedding logo"
               className="place-self-center sm:w-50 sm:h-50"
               />
        <LoginForm />
      </div>
    </main>
  );
}