import { Book } from "../types/Book";

export const books: Book[] = [
  {
    id: "1",
    title: "La Voie du Petit Musulman",
    description:
      "Un guide précieux pour l'apprentissage des hadiths du Prophète, adapté aux jeunes musulmans.",
    price: 19.99,
    imageUrl: "../../public/images/la_voie_du_petit_musulman.jpeg",
    priceId: "price_H5ggYwtDq8",
  },

  {
    id: "2",
    title: "50 Questions Réponses sur la Croyance",
    description:
      "Un livre essentiel pour comprendre les fondements de la croyance islamique à travers 50 questions-réponses détaillées.",
    price: 19.99,
    imageUrl: "../../public/images/croyance.jpeg",
    priceId: "price_H5ggYwtDq9",
  },
];
