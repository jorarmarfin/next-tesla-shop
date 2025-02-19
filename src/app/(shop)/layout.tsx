import {TopMenu} from "@/components/components";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <header>
                <TopMenu />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </main>
    );
}