import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer py-16 lg:pb-0  ">
      <div className="flex flex-col items-center justify-center py-6">
        <div className="flex items-center gap-1">
          <Link className=" text-xl lg:text-2xl text-font font-primary " to="/">
            Movieeez
          </Link>
          <div className="text-accent pb-0.5">
            <FaPlay size={16} />
          </div>
        </div>
        <p className="text-xs mt-4">2026. Designed & Built by Rami Balaghi</p>
      </div>
    </footer>
  );
};

export default Footer;
