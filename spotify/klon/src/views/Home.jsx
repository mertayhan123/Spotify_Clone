import React from "react";
import Section from "../components/Section";
export const Home = () => {
  const items = [
    {
      id: 1,
      title: "Mert Ayhan",
      description: "Mert",
      image: "/src/assets/mmm.jpg",
      type:"album",
      src:"/src/assets/music/1.mp3"

    },
    {
      id: 2,
      title: "Mert Ayhan",
      description: "Mert",
      image: "/src/assets/mmm.jpg",
      type:"album",
      src:"/src/assets/music/4.mp3"

    },
    {
      id: 3,
      title: "Mert Ayhan",
      description: "Mert",
      image: "/src/assets/mmm.jpg",
      type:"artist",
      src:"/src/assets/music/3.mp3"

    },
    {
      id: 4,
      title: "Mert Ayhan",
      description: "Mert",
      image: "/src/assets/mmm.jpg",
      type:"album",
      src:"/src/assets/music/2.mp3"

    },
    {
      id: 5,
      title: "Mert Ayhan",
      description: "Mert",
      image: "/src/assets/mmm.jpg",
      type:"artist",
      src:"/src/assets/music/1.mp3"

    },
  ];
  return (
    <div>
      <Section title="Trending" more="/mert" items={items} />
      <Section title="Trending" more="/mert" items={items} />
      <Section title="Trending" more="/mert" items={items} />

    </div>
  );
};
