import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-[72%] mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          link = {item.link}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const items = [
  {
    title: "Housing Price Predictor",
    description: "A machine learning model to predict housing prices based on features like location, size, and amenities with high accuracy.",
    link: "https://github.com/krishang-r/HousingPricePredictor",
  },
  {
    title: "MealMeter",
    description: "An AI-driven app using Google GenAI to estimate meal calories and generate personalized diet plans.",
    link: "https://github.com/krishang-r/MealMeter",
  },
  {
    title: "Cloth-Detector",
    description: "A Python program leveraging computer vision to detect and classify the types of clothing worn by individuals.",
    link: "https://github.com/krishang-r/cloth-detector",
  },
  {
    title: "EcoFolio",
    description: "Developed and deployed a Solidity-based ERC-20 smart contract for “CarbonCoin” on the SepoliaETH Testnet. Built a responsive frontend using Next.js and Tailwind CSS.",
    link: "https://github.com/krishang-r/EcoFolio",
  },
  {
    title: "FaceDetectPy",
    description: "A Python-based application for real-time face detection using OpenCV with over 90% detection accuracy.",
    link: "https://github.com/krishang-r/FaceDetectPy",
  },
  {
    title: "Vehicle Rental Service",
    description: "A full-stack vehicle rental platform with dedicated admin and customer portals for managing bookings, inventory, and user access.",
    link: "https://github.com/krishang-r/vehicle_rental_service",
  },
  {
    title: "Flask Data Inspector",
    description: "A Flask-based data analysis tool capable of processing datasets with 10,000+ rows, enabling real-time error detection, outlier exclusion, and interactive visualizations to improve data accuracy.",
    link: "https://github.com/krishang-r/FlaskDataInspector",
  },
];
