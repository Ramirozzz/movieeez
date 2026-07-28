import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import { FaPlay } from "react-icons/fa";
const NotFoundPage = () => {
  return (
    <section className="relative">
      <Link to={"/"}>
        <div className="absolute top-0 flex items-center gap-1 py-6 px-16">
          <span className="text-2xl lg:text-3xl text-font font-primary">
            Movieeez
          </span>
          <div className="text-accent pb-0.5">
            <FaPlay size={20} />
          </div>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl max-w-xl text-center font-secondary my-8">
          The page you were looking for cannot be found.
        </h1>
        <Link to={"/"}>
          <Button title={"Home page"} />
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
