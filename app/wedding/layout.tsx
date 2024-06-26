import SideNav from '@/app/ui/wedding/sidenav';
import Footer from '../ui/wedding/footer'; 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="w-full flex-none">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}