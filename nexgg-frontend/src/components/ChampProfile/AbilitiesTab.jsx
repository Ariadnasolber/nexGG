import React from "react";
import AbilitySelector from "./AbilitySelector";
import AbilityDetail from "./AbilityDetail";

const AbilitiesTab = ({ abilities, activeAbility, setActiveAbility }) => {
    return (
        <div>
            <AbilitySelector
                abilities={abilities}
                activeAbility={activeAbility}
                setActiveAbility={setActiveAbility}
            />
            <AbilityDetail ability={abilities[activeAbility]} activeKey={activeAbility} />
        </div>
    );
};

export default AbilitiesTab;
