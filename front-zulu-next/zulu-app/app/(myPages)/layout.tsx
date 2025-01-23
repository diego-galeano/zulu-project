import Navbar from "@/components/navbar/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <Navbar />
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col items-center h-full justify-center p-4 bg-foreground text-background">
                {children}
            </main>
        </div>
        </>
    );
}