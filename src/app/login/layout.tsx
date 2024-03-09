
export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        {/* Include shared UI here e.g. a logo or a title */}
        <h1 className="font-semibold text-2xl">Login</h1>
        {children}
      </div>
    </div>
  );
}
