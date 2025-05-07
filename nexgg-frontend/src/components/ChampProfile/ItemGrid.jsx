import React from "react";

const ItemGrid = ({ items }) => {
    return (
        <div className="flex flex-wrap gap-4">
            {items.map((item, index) => (
                <div key={item.id} className="relative w-20 text-center">
                    <div className="absolute -top-2 -left-2 w-5 h-5 bg-[#FC555C] rounded-full flex items-center justify-center text-xs font-semibold">
                        {index + 1}
                    </div>
                    <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-[50px] h-[50px] rounded-md mb-1 mx-auto bg-[#282A2F]"
                    />
                    <div className="text-xs text-[#898989]">{item.name}</div>
                </div>
            ))}
        </div>
    );
};

export default ItemGrid;
