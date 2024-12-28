import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from 'next/image'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIN={firstName:'Divy', lastName:'Rai'}
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIN} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIN} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
