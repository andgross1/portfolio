import { useEffect, useState } from "react";

const skills = [
    { name: "Node.js", color: "#22c55e" },
    { name: "React", color: "#f97316" },
    { name: "HTML", color: "#ef4444" },
    { name: "CSS", color: "#3b82f6" },
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(index);
            setIndex((prev) => (prev + 1) % skills.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <section className="min-h-screen flex items-center py-24">
            <div className="mx-auto text-center max-w-3xl px-6">

                <h1 className="text-4xl md:text-6xl font-semibold mb-4">
                    André Gross
                </h1>

                <h2 className="text-xl md:text-2xl text-gray-600 text-center">
                    Construindo experiências digitais com{" "}

                    <span className="relative h-[1.5em] inline-flex items-center justify-center align-middle min-w-[90px]">

                        {/* Skill atual */}
                        <span
                            key={index}
                            className="absolute inset-0 flex items-center justify-center animate-slide-in"
                        >
                            <span
                                className="font-bold"
                                style={{ color: skills[index].color }}
                            >
                                {skills[index].name}
                            </span>
                        </span>

                        {/* Skill anterior */}
                        {prevIndex !== null && (
                            <span
                                className="absolute inset-0 flex items-center justify-center animate-slide-out"
                            >
                                <span
                                    className="font-bold"
                                    style={{ color: skills[prevIndex].color }}
                                >
                                    {skills[prevIndex].name}
                                </span>
                            </span>
                        )}

                    </span>
                </h2>
            </div>
        </section>
    );
};

export default Hero;