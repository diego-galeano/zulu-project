import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen">
      <main className="home-background h-full w-full">
        <div className="flex flex-col items-center mx-auto logo-container">
          <div className="flex flex-col items-center mx-auto logo-container">
            <Image src="/logo.png" alt="Zulu" width={100} height={100} priority />
          </div>
        </div>
        <div className="background-base">
        </div>
          <div className="buttons-container flex flex-row items-center gap-4 w-full justify-evenly absolute bottom-10">
            <button>Iniciar Sesión</button>
            <button>Registrarse</button>
        </div>
      </main>

    </div>
  );
}
