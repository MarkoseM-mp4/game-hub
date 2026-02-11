// src/Data/games.js

// Automatically import all images inside ./images
const imageModules = import.meta.glob("./images/*", {
  eager: true,
  import: "default",
});

// Convert to simple filename → image URL map
const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, module]) => {
    const fileName = path.split("/").pop(); // sushi-snatch.png
    return [fileName, module];
  })
);

const games = [
  {
    id: 1,
    name: "Sushi Snatch",
    description:
      "A gesture-controlled game where you grab flying sushi using virtual chopsticks. 🍣🥢",
    image: images["sushi-snatch.png"],
    link: "https://sushi-snatch.netlify.app/",
  },
];

export default games;
