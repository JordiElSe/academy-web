const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-gray-950 to-gray-700">
      {children}
    </div>
  );
};

export default AuthLayout;
