import { Button } from "@/components/ui/button";
import { LoginButton } from "@components/auth/login-button";
// import Navbar from "@components/navbar";

const Home = () => {
  return (
    <main className="flex flex-col h-full items-center justify-center bg-gradient-to-r from-gray-950 to-gray-700">
      {/* <Navbar /> */}
      <LoginButton mode="modal" asChild>
        <Button variant="outline" size="lg">
          Sign In
        </Button>
      </LoginButton>
    </main>
  );
};

export default Home;
