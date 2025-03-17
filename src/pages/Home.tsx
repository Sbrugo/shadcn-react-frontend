import { Button } from "@/components/ui/button";
import { routes } from "@/routes/routes";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center p-4 h-screen gap-2">
      <Link className="underline" to={routes.register}>
        <Button>Register</Button>
      </Link>
      <Link className="underline" to={routes.login}>
        <Button>Log in</Button>
      </Link>
    </div>
  );
};

export default Home;
