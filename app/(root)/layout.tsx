import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIN={firstName:'Divy', lastName:'Rai'}
  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedIN}/>
        {children}
    </main>
  );
}
