import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <nav className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-to-r from-gray-950 to-gray-700">
      <Navbar />
      {children}
    </nav>
  );
};

export default ProtectedLayout;
