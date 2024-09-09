import { GoLaw } from "react-icons/go";
import Link from "next/link";

const siteName = process.env.SITE_NAME

const Logo = () => {
  return (
    <Link href='/' className="flex max-w-fit  items-center justify-center gap-2">
      <p className="hidden sm:flex tracking-wide text-lg font-bold ">{siteName}  </p>
      <GoLaw size={26} />
    </Link>
  )
}
export default Logo