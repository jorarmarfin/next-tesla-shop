import {SideBar, TopMenu} from "@/components/components";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <header>
                <TopMenu />
                <SideBar />
            </header>
            <main className='sm:px-10'>
                {children}
            </main>
        </main>
    );
}