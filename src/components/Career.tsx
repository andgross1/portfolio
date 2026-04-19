import CareerItem from "./CareerItem";
import { careerData } from "../data/careerData";

const Career = () => {
    return (
        <section className="min-h-screen flex items-center py-24">

            <div className="w-full px-[5%] box-border pt-24">

                <h2 className="text-2xl font-semibold mb-12">
                    Carreira
                </h2>

                <div className="w-full max-w-full overflow-hidden">
                    {careerData.map((item: any, index: number) => (
                        <CareerItem key={index} data={item} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Career;