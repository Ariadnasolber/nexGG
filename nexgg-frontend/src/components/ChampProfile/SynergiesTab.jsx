import React from "react";
import SynergyList from "./SynergyList";

const SynergiesTab = ({ synergies }) => {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-[#D9D9D9]">Strong With</h2>
                <SynergyList champions={synergies.strongWith} />
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4 text-[#D9D9D9]">Weak Against</h2>
                <SynergyList champions={synergies.weakAgainst} />
            </div>
        </div>
    );
};

export default SynergiesTab;
