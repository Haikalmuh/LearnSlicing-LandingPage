import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section grid gap-10 py-20 md:grid-cols-2 md:items-center">
      {/* Left Side: Text */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Create Engaging <br />
          <span className="text-brand">Landing Pages</span>
        </h1>
        <p className="mt-[20px] text-lg text-gray-600 max-w-lg">
          Build beautiful landing pages in record time with Anima's Landing Page
          UI Kit for Figma. No code required!
        </p>

        <div className="mt-[40px] flex gap-[18px]">
          <Link
            href="#get-started"
            className="rounded-2xl bg-[#009379] px-6 py-3 text-white font-semibold text-base transition w-[221px] h-[60px] flex justify-center items-center gap-x-2"
          >
            <Image
              src="/icons/RocketLaunch.svg"
              alt="Rocket Launch"
              width={20}
              height={20}
            />
            Get Started
          </Link>
          <Link
            href="#how-it-works"
            className="rounded-2xl border border-[#009379] px-6 py-3 text-[#009379] font-semibold text-base transition w-[202px] h-[60px] flex justify-center items-center"
          >
            How it works
          </Link>
        </div>
      </div>

      {/* Right side: image + shapes */}
      <div className="relative flex justify-center md:justify-end">
        {/* Ellipse 3 (besar belakang HP) */}
        <div className="absolute -z-10 w-[340px] h-[340px] rounded-full bg-[#F2C6B4] top-12 right-6" />

        {/* Ellipse 2 (hijau, kanan atas) */}
        <div className="absolute -z-10 w-[140px] h-[140px] rounded-full border-[22px] border-[#009379] -top-6 right-0" />

        {/* Ellipse 1 (merah kiri bawah) */}
        <div className="absolute -z-10 w-[90px] h-[90px] rounded-full bg-[#FF6250] bottom-10 -left-6 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-white" />
        </div>

        {/* Star 1 (kanan atas) */}
        <svg
          className="absolute w-5 h-5 text-white top-20 right-20"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847L19.335 24 12 20.012 4.665 24 6 15.597 0 9.75l8.332-1.595z" />
        </svg>

        {/* Star 2 (bawah kiri) */}
        <svg
          className="absolute w-4 h-4 text-white bottom-16 left-12"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847L19.335 24 12 20.012 4.665 24 6 15.597 0 9.75l8.332-1.595z" />
        </svg>

        {/* HP image */}
        <Image
          src="/images/hero-phone.png"
          alt="App Preview"
          width={219}
          height={422}
          priority
          className="drop-shadow-2xl relative"
        />
      </div>
    </section>
  );
}
