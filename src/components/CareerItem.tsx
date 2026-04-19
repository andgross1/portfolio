import { useState } from "react";
import { ChevronRight } from "lucide-react";

const CareerItem = ({ data }: any) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="py-6">

            {/* Linha principal */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left bg-transparent border-none outline-none focus:outline-none active:outline-none p-0 m-0 cursor-pointer transition-all duration-200 hover:shadow-[0_2px_0_rgba(0,0,0,0.08)]"
            >

                {/* ESQUERDA (ícone + título) */}
                <div className="flex items-center gap-3 flex-1 min-w-0">

                    <ChevronRight
                        size={25}
                        className={`text-gray-400 shrink-0 transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"
                            }`}
                    />

                    <h3 className="text-base md:text-lg text-gray-900 min-w-0 break-words">
                        {data.role}, {data.company}
                    </h3>

                </div>

                {/* DIREITA (data) */}
                <span className="text-sm text-gray-400 shrink-0">
                    {data.period}
                </span>

            </button>

            {/* Conteúdo */}
            {open && (
                <div className="mt-4 max-w-2xl text-gray-600 text-sm space-y-3">
                    <p><strong>Tempo:</strong> {data.duration}</p>
                    <p><strong>Local:</strong> {data.city}</p>
                    <p><strong>Descrição:</strong> {data.description}</p>
                </div>
            )}

        </div>
    );
};

export default CareerItem;