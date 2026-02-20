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
  {
    id: 2,
    name: "Ice Knockout",
    description:
      "A multiplayer physics game where you launch balls on ice to knock others off and be the last standing. 🧊.",
    image: images["ice-knockout.png"],
    link: "https://ice-knockout.onrender.com/",
  },
  {
    id: 3,
    name: "Tank Warriors",
    description:
      "A fast-paced 2-player online tank battle of aim, movement, and nonstop fire.",
    image: images["tank-warriors.jpg"],
    link: "https://tank-warriors.onrender.com/",
  },
];

export default games;
