import { GoLaw } from "react-icons/go";
import Link from "next/link";

const siteName = process.env.SITE_NAME_TO_DISPLAY;

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 max-w-fit group animate-fade-in">
      {/* Logo hidden on small screens */}
      <div className="p-2 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-all duration-300 ease-in-out hidden sm:flex">
        <GoLaw className="text-4xl text-blue-600 group-hover:text-blue-800 transition-colors duration-300 ease-in-out" />
      </div>
      {/* Text responsive for different screen sizes */}
      <p className="text-xl sm:text-2xl font-semibold tracking-wide text-blue-600 group-hover:text-blue-800 transition-colors duration-300 ease-in-out">
        {siteName}
      </p>
    </Link>
  );
};

export default Logo;