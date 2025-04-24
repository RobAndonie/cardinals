import type { Cardenal } from "./cardenales";

interface Props {
  cardenal: Cardenal;
}

export default function CardenalCard({ cardenal }: Props) {
  return (
    <div className="rounded-2xl shadow-md p-6 bg-white max-w-md mx-auto border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {cardenal.nombre}
      </h2>
      <p className="text-gray-600">
        <span className="font-medium">País:</span> {cardenal.pais}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Cargo:</span> {cardenal.cargo}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Edad:</span> {cardenal.edad} años
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Creado por:</span> {cardenal.creadoPor}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Fecha de creación:</span>{" "}
        {cardenal.fechaCreacion}
      </p>
      {cardenal.notas && (
        <p className="text-gray-700 mt-4">
          <span className="font-medium">Notas:</span> {cardenal.notas}
        </p>
      )}
    </div>
  );
}
