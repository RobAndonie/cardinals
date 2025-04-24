import { cardenales } from "./cardenales";
import CardenalCard from "./CardenalCard";

export default function App() {
  const randomCardenal =
    cardenales[Math.floor(Math.random() * cardenales.length)];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {" "}
      <CardenalCard cardenal={randomCardenal} />{" "}
    </div>
  );
}
