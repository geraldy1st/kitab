import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BookCard } from './components/BookCard';
import { Footer } from './components/Footer';
import { books } from './data/books';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      
      <section id="livres" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Livres Disponibles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;