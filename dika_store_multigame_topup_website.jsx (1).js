import React from 'react';

export default function DikaStore() {
  const [selectedGame, setSelectedGame] = React.useState(null);
  const [playerId, setPlayerId] = React.useState('');

  const games = [
    {
      name: 'Free Fire',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Mobile Legends',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'PUBG Mobile',
      image:
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Valorant',
      image:
        'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const whatsappNumber = '6283829878790';

  const gamePrices = {
    'Free Fire': ['5 Diamond - Rp1.000', '70 Diamond - Rp10.000', '140 Diamond - Rp20.000'],
    'Mobile Legends': ['86 Diamond - Rp20.000', '172 Diamond - Rp40.000', '257 Diamond - Rp60.000'],
    'PUBG Mobile': ['60 UC - Rp15.000', '325 UC - Rp75.000', '660 UC - Rp150.000'],
    Valorant: ['125 VP - Rp15.000', '420 VP - Rp50.000', '700 VP - Rp80.000']
  };

  const orderNow = (game, payment) => {
    if (!playerId) {
      alert('Masukkan ID Player terlebih dahulu');
      return;
    }

    const message = `Halo Admin Dika Store,%0A%0ASaya ingin topup:%0A${game}%0A%0AMetode Pembayaran : ${payment}%0A%0ATransfer DANA ke : 083142324267%0A%0AID Player : ${playerId}%0A%0ATerima kasih.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white">
      <header className="px-6 py-5 flex justify-between items-center border-b border-blue-900">
        <h1 className="text-3xl font-bold text-cyan-400">Dika Store</h1>

        <button
          onClick={() =>
            window.open(`https://wa.me/${whatsappNumber}`, '_blank')
          }
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-xl transition"
        >
          WhatsApp Admin
        </button>
      </header>

      <section className="text-center py-16 px-6">
        <h2 className="text-5xl font-extrabold mb-4">
          Top Up Game Cepat & Murah
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Melayani top up berbagai game populer dengan proses cepat dan pembayaran mudah.
        </p>
      </section>

      <section className="px-6 pb-16">
        <h3 className="text-3xl font-bold mb-8 text-cyan-400">
          Game Populer
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-blue-950 border border-blue-800 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={game.image}
                alt={game.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h4 className="text-2xl font-bold mb-3">{game.name}</h4>

                <button
                  onClick={() =>
                    setSelectedGame(
                      selectedGame === game.name ? null : game.name
                    )
                  }
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-2xl transition cursor-pointer"
                >
                  Top Up Sekarang
                </button>

                {selectedGame === game.name && (
                  <div className="mt-4 space-y-4">
                    <input
                      type="text"
                      placeholder="Masukkan ID Player"
                      value={playerId}
                      onChange={(e) => setPlayerId(e.target.value)}
                      className="w-full bg-black border border-cyan-500 rounded-2xl px-4 py-3 text-white outline-none"
                    />

                    <div className="bg-blue-900 rounded-2xl p-4 text-sm text-gray-200 border border-cyan-500">
                      <p className="font-bold text-cyan-400 mb-2">
                        Pembayaran DANA
                      </p>

                      <p>Transfer ke:</p>

                      <p className="text-lg font-bold">083142324267</p>
                    </div>

                    {gamePrices[game.name].map((price, idx) => (
                      <div
                        key={idx}
                        className="bg-black border border-cyan-500 rounded-2xl p-3"
                      >
                        <p className="font-bold mb-3">{price}</p>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() =>
                              orderNow(`${game.name} - ${price}`, 'DANA')
                            }
                            className="bg-cyan-500 hover:bg-cyan-400 text-black py-2 rounded-xl font-semibold cursor-pointer"
                          >
                            DANA
                          </button>

                          <button
                            onClick={() =>
                              orderNow(`${game.name} - ${price}`, 'QRIS')
                            }
                            className="bg-cyan-500 hover:bg-cyan-400 text-black py-2 rounded-xl font-semibold cursor-pointer"
                          >
                            QRIS
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="bg-blue-950 border border-blue-800 rounded-3xl p-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-cyan-400">
            Cara Order
          </h3>

          <div className="grid md:grid-cols-3 gap-5 text-center">
            <div className="bg-black/40 p-5 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">1. Pilih Game</h4>

              <p className="text-gray-300">
                Pilih game dan nominal top up yang diinginkan.
              </p>
            </div>

            <div className="bg-black/40 p-5 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">2. Pembayaran</h4>

              <p className="text-gray-300">
                Transfer menggunakan DANA atau QRIS.
              </p>
            </div>

            <div className="bg-black/40 p-5 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">3. Proses Cepat</h4>

              <p className="text-gray-300">
                Bot WhatsApp otomatis mengirim order ke admin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-blue-900 py-6 text-center text-gray-400">
        © 2026 Dika Store - All Rights Reserved
      </footer>
    </div>
  );
}
