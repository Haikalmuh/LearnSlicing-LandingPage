import Image from "next/image";
import Link from "next/link";

export default function Features() {
    const features = [
        {
            icon: "/icons/MagicWand.svg",
            bg: "bg-red-100",
            title: "Fast building",
            desc: "Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!",
            link: "#",
        },
        {
            icon: "/icons/BoundingBox.svg",
            bg: "bg-green-100",
            title: "Responsive Design",
            desc: "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
            link: "#",
        },
        {
            icon: "/icons/Confetti.svg",
            bg: "bg-yellow-100",
            title: "No Code Needed",
            desc: "Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.",
            link: "#",
        },
    ];

    return (
        <section className="section mx-auto py-20 text-center mt-15">
            <div className="mb-12">
                <h2 className="text-4xl font-extrabold">Features</h2>
                <p className="text-black mt-2">
                    Explore our features and see how they make your work easier.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {features.map((feature, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md trasition"
                    >
                        <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${feature.bg} mb-6`}
                        >
                            <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={28}
                            height={28}
                            />
                        </div>

                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-gray-600 mb-6">{feature.desc}</p>

                        <Link href={feature.link} className="text-[#009379] font-semibold inline-flex items-center gap-2 hover:underline"
                        >
                            Learn More
                            <Image
                            src="/icons/ArrowRight.svg"
                            alt="Arrow"
                            width={16}
                            height={16}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}