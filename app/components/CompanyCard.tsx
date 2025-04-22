import React from "react";

interface CompanyCardProps {
    company: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
    return (
        <div className="bg-black border border-ciberpink p-4 rounded-2xl shadow-[0_0_15px_#ff00ff] text-white w-full max-w-sm">
            <p className=" text-xl font-[Orbitron] text-ciberpink">{company || "Freelance / Personal"}</p>
        </div>
    );
};

export default CompanyCard;
