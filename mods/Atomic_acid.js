elements.Reinforced_Steel = {
    color: "#807575",
    behavior: behaviors.WALL,
    category: "solids",
    state:  "solid",
    density: 720,
    tempHigh: 10000,
    stateHigh: "Molten_Reinforced_Steel",
};
elements.Molten_Reinforced_Steel = {
    color: "#e64e17",
    behavior: behaviors.SUPERFLUID,
    category: "states",
    state:  "liquid",
    density: 7200,
    stateLow: "Reinforced_Steel",
    tempLow: 9980,
    hidden:true,
};
elements.Atomic_Acid = {
    color: "#22ff00",
    ignore: ["Atomic_Acid"],
    behavior: [
		"CH:Atomic_Acid|DL AND CH:Atomic_Acid|CH:Atomic_Acid",
		"DL AND M2 AND CH:Atomic_Acid|XX|DL AND M2 AND CH:Atomic_Acid",
		"M1 AND CH:Atomic_Acid|DL AND M1 AND CH:Atomic_Acid|M1 AND CH:Atomic_Acid",
	],
    category: "liquids",
    state:  "liquid",
    density: 1,
    stateHigh: "supernova",
    tempHigh: 10000,
    stateLow: "plasma",
    tempLow: -273,
};
elements.Atomic_acid_catalyst = {
    color: ["#22ff00", "#5af542"],
    behavior: behaviors.POWDER,
    category: "powders",
    state:  "solid",
    density: 7200,
    tempHigh: 200,
    stateHigh: "Burntpowder",
    reactions:{
        "water": {elem1: "Atomic_Acid", elem2: null}
    },
};
elements.Burntpowder = {
    color: "#7c838f",
    behavior: behaviors.POWDER,
    category: "powders",
    state:  "solid",
    density: 7200,
    tempLow: 10,
    stateLow: "Atomic_Acid_Powder",
    hidden:true,
    reactions:{
        "water": {elem1: null, elem2: null}
    },
};
