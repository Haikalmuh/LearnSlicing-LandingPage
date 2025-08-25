import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="section flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/icons/LogoMark.svg" alt="Logo" width={28} height={28} />
          <span className="font-bold text-lg">
            Landing <span className="text-[#009379] font-normal">Page</span>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="contact"
            className="font-semibold text-[#009379] hover:text-gray-900 mr-5"
          >
            Contact
          </Link>
          <Link
            href="#how-it-works"
            className="gap-2 rounded-2xl px-5 py-2 w-[202px] h-[60px] font-semibold text-[#009379] bg-[#E5F4F2] hover:text-gray-900 flex justify-center items-center"
          >
            How it works
          </Link>
          <Link
            href="#get-started"
            className="inline-flex gap-2 rounded-2xl w-[202px] h-[60px] bg-[#009379] px-5 py-2 text-white font-semibold hover:bg-[] transition justify-center items-center"
          >
            <Image
              src="/icons/RocketLaunch.svg"
              alt="Rocket Launch"
              width={18}
              height={18}
            />
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
