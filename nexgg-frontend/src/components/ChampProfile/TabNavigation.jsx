import React from "react";

const tabs = ["build", "aram", "abilities"];

const TabNavigation = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex border-b-2 border-[#282A2F] mb-5">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 pt-10 pb-4 text-base font-medium uppercase cursor-pointer hover:scale-105 transition-all ${activeTab === tab
                            ? "text-[#FC555C] border-b-2 border-[#FC555C] -mb-0.5"
                            : "text-[#898989]"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default TabNavigation;
