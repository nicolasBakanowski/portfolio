import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    details: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Tarjeta */}
            <div className="relative w-64 h-40">
                <motion.div
                    className="absolute w-full h-full bg-black/75  shadow-[0_0_15px_#c169c0] rounded-md cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsOpen(true)}
                >
                    <div className="absolute top-0 left-0 w-full h-10 shadow-[0_0_10px_#c169c0] flex items-center px-4">
                        <h3 className="text-lg font-bold text-black neon-text-white ">{title}</h3>
                    </div>
                    <div className="p-4 mt-10">
                        <p className="text-gray-300 text-sm">{description}</p>
                    </div>
                </motion.div>
            </div>

            {/* Modal responsive con animación desde el centro de la card */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="bg-gray-900 border border-ciberpink shadow-[0_0_20px_#c169c0] rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col items-center text-center"
                        initial={{ scale: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, x: "0%", y: "0%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <Image src={image} alt={title} width={400} height={200} className="rounded-md mb-4" />
                        <h3 className="text-xl font-bold  mb-2">{title}</h3>
                        <p className="text-gray-300 text-base mb-4">{details}</p>
                        <button
                            className="px-6 py-2 bg-ciberpink text-black font-bold rounded hover:bg-pink-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Cerrar
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default ProjectCard;
