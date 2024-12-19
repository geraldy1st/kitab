import React from 'react';
import { BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="text-white" style={{
      backgroundColor: '#457745',
      backgroundImage: 'linear-gradient(160deg, #457745 0%, #80D0C7 100%)'
    }}>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center mb-4">
              <BookOpen size={32} className="mr-2" />
              <h1 className="text-4xl font-bold">Kitab</h1>
            </div>
            <p className="text-2xl font-semibold mb-2">
              Au nom d'Allah, l'Infiniment miséricordieux, Celui qui fait largement miséricorde.
            </p>
            <div className="text-xl text-gray-100 mb-8 space-y-4">
              <p>
                Toutes louanges reviennent de droit à Allah Seul, et que les éloges et le salut recouvrent celui après qui il n'y a plus eu de Prophète. Ceci étant dit. L'étude de ce noble livre sera pour tout un chacun une manière simple et ludique d'acquérir l'amour d'Allah, Le Seigneur des mondes.
              </p>
              <p>
                En effet, Le Seigneur des mondes dit : ﴾ Dis [ô Mohamed] : si vous aimez réellement Allah, suivez-moi et Allah vous aimera et vous pardonnera vos péchés. Allah est pardonneur et miséricordieux. ﴿ [Sourate Âli-'Imrân, v 31]
              </p>
              <p>
                Existe-t-il une plus belle manière de suivre le Prophète que d'apprendre ses Hadiths et de les mettre en pratique?
              </p>
              <p className="italic">
                Abou Abd Ar-Rahmân Issam.
              </p>
            </div>
            <a 
              href="#books"
              className="bg-white text-[#457745] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Explore Books
            </a>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2400"
              alt="Books Collection"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};