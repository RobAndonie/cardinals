export interface Cardenal {
  nombre: string;
  pais: string;
  cargo: string;
  edad: number;
  creadoPor: string;
  fechaCreacion: string;
  notas?: string;
}

export const cardenales: Cardenal[] = [
  {
    nombre: "Pietro Parolin",
    pais: "Italia",
    cargo: "Secretario de Estado del Vaticano",
    edad: 70,
    creadoPor: "Papa Francisco",
    fechaCreacion: "22 de febrero de 2014",
    notas:
      "Diplomático con amplia experiencia, considerado uno de los principales candidatos.",
  },
  {
    nombre: "Matteo Zuppi",
    pais: "Italia",
    cargo: "Arzobispo de Bolonia",
    edad: 69,
    creadoPor: "Papa Francisco",
    fechaCreacion: "5 de octubre de 2019",
    notas: "Conocido por su enfoque pastoral y mediación en conflictos.",
  },
  {
    nombre: "Luis Antonio Tagle",
    pais: "Filipinas",
    cargo: "Prefecto del Dicasterio para la Evangelización",
    edad: 67,
    creadoPor: "Papa Benedicto XVI",
    fechaCreacion: "24 de noviembre de 2012",
    notas:
      "Figura destacada en Asia, cercano a los pobres y con experiencia en evangelización.",
  },
  {
    nombre: "Robert Sarah",
    pais: "Guinea",
    cargo: "Prefecto emérito de la Congregación para el Culto Divino",
    edad: 79,
    creadoPor: "Papa Benedicto XVI",
    fechaCreacion: "20 de noviembre de 2010",
    notas: "Asociado a posturas conservadoras dentro de la Iglesia.",
  },
  {
    nombre: "Pierbattista Pizzaballa",
    pais: "Italia",
    cargo: "Patriarca Latino de Jerusalén",
    edad: 60,
    creadoPor: "Papa Francisco",
    fechaCreacion: "30 de septiembre de 2023",
    notas: "Representa una figura simbólica por su posición en Tierra Santa.",
  },
  {
    nombre: "Kevin Farrell",
    pais: "Estados Unidos",
    cargo: "Camerlengo de la Santa Iglesia Romana",
    edad: 78,
    creadoPor: "Papa Francisco",
    fechaCreacion: "19 de noviembre de 2016",
    notas: "Actualmente administra la Iglesia durante la sede vacante.",
  },
  {
    nombre: "Mykola Bychok",
    pais: "Ucrania",
    cargo: "Eparca de los Santos Pedro y Pablo de Melbourne",
    edad: 45,
    creadoPor: "Papa Francisco",
    fechaCreacion: "7 de diciembre de 2024",
    notas:
      "El cardenal elector más joven, miembro de la Iglesia greco-católica ucraniana.",
  },
];
