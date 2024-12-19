import React from 'react';
import { Book } from '../types/Book';
import { loadStripe } from '@stripe/stripe-js';

interface BookCardProps {
  book: Book;
}

const stripePromise = loadStripe('your_publishable_key');

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const handlePurchase = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    // Here you would typically make a call to your backend to create a Checkout Session
    alert('Dans un environnement de production, ceci redirigerait vers Stripe Checkout');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={book.imageUrl} 
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{book.title}</h3>
        <p className="text-gray-600 mb-4">{book.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{book.price}€</span>
          <button
            onClick={handlePurchase}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
};