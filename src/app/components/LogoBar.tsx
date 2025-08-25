import Image from "next/image";

export default function LogoBar() {
    const logos = [
        { src: "/logos/airbnb.svg", alt: "Airbnb" },
        { src: "/logos/Google.svg", alt: "Google" },
        { src: "/logos/Amazon.svg", alt: "Amazon" },
        { src: "/logos/Microsoft.svg", alt: "Microsoft" },
        { src: "/logos/FedEx.svg", alt: "FedEx" },
        { src: "/logos/HubSpot.svg", alt: "HubSpot" },
    ];

    return (
    <section className="mt-15 border-y border-gray-200 bg-white py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-24">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={90}
            height={28}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
}