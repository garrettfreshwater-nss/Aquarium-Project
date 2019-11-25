/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [{
        name: "Bart",
        food: ["algae", "crustaceans"],
        species: "Goldfish",
        size: 3,
        location: "The Ocean",
        image: "/images/Shark.png"
    },

    {
        name: "Bret",
        food: ["Fish food", "algae"],
        species: "Fish",
        size: 12,
        location: "The Ocean",
        image: "/images/Clown-Fish-PNG-Image-File.png"


    },

    {
        name: "Brandon",
        food: ["Small fish", "crustaceans"],
        species: "Baracuda",
        size: 24,
        location: "Gulf Coast",
        image: "/images/fish_PNG25141.png"

    },

    {
        name: "Chad",
        food: ["Seals", "Surfers", "Small Children"],
        species: "Great White Shark",
        size: 96,
        location: "Atlantic Ocean",
        image: "/images/fish-png-gold-8.png"
    },

    {
        name: "Chandler",
        food: ["sushi", "sashimi"],
        species: "Blue fin tuna",
        size: 72,
        location: "Pacific Ocean",
        image: "/images/cybertruck.png"
    },

    {
        name: "Dan",
        food: ["krill", "small fish"],
        species: "Angler Fish",
        size: 38,
        location: "Deep sea",
        image: '/images/EEL.png'
    },
    {
        name: "Dan",
        food: ["krill", "small fish"],
        species: "Angler Fish",
        size: 38,
        location: "Deep sea",
        image: '/images/cybertruck.png'
    }
]

// Immutability: our ConvolverNode, raw data should be private and hidden and should not be changed by other modules

export const useFish = () => {
    return fishCollection
}