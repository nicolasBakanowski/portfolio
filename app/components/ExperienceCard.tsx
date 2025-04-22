"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaTrophy } from "react-icons/fa";

interface ExperienceCardProps {
    role: string;
    company: string;
    achievements: string[];
    startDate: string;
    endDate?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    role,
    company,
    achievements,
    startDate,
    endDate,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:max-w-sm bg-black/75 border-2 border-ciberpink text-white pt-4 pb-4 pl-2 pr-3 md:p-6 rounded-lg shadow-lg"
        >
            {/* Título */}
            <h3 className="text-lg md:text-lg font-[Orbitron]   font-semibold neon-text-white flex items-center gap-3 sm:gap-4">
                <FaBuilding className="w-5 h-5 sm:w-6 sm:h-6 text-ciberpink flex-shrink-0" />
                {role}
            </h3>

            {/* Fechas */}
            <p className="mt-3 text-gray-300 font-[Inter] text-sm md:text-base flex items-center gap-3 sm:gap-4">
                <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6 text-ciberpink flex-shrink-0" />
                <span className="ml-1">{startDate} - {endDate || "Presente"}</span>
            </p>

            {/* Logros */}
            <ul className="mt-3 text-gray-300 font-[Inter] text-sm md:text-base list-disc list-inside space-y-2">
                {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-3 sm:gap-4">
                        <FaTrophy className="w-5 h-5 sm:w-6 sm:h-6 text-ciberpink flex-shrink-0" />
                        {achievement}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default ExperienceCard;
