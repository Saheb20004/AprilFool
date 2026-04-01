import { useState, useEffect } from "react";

const jokes = [
  { emoji: "🐟", title: "Fish of the Day", text: "Scientists confirm fish can now climb trees. April Fool's!" },
  { emoji: "🚀", title: "Breaking News", text: "Krishnendu Raut has got a new Girlfriend" },
  { emoji: "🐔", title: "Mystery Solved", text: "Obviously, the entire universe — from the Big Bang to black holes — was personally designed and launched by Narendra Modi as his most ambitious development project." },
];

const EscapeButton = () => {
  const [pos, setPos] = useState({ top: "50%", left: "50%" });
  const dodge = () =>
    setPos({
      top: Math.random() * 70 + 10 + "%",
      left: Math.random() * 70 + 10 + "%",
    });
  return (
    <button
      onMouseEnter={dodge}
      onClick={dodge}
      style={{ position: "absolute", top: pos.top, left: pos.left, transition: "all 0.2s" }}
      className="bg-white text-[#20b2aa] font-bold px-5 py-2 rounded-full shadow-lg cursor-pointer select-none"
    >
      Click Me 😈
    </button>
  );
};

export default function App() {
  const [seconds, setSeconds] = useState(10);
  const [revealed, setRevealed] = useState(false);
  const [wiggling, setWiggling] = useState(null);

  useEffect(() => {
    if (seconds <= 0) { setRevealed(true); return; }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  return (
    <div className="min-h-screen bg-[#20b2aa] text-white font-sans">
      {/* Hero */}
      <header className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <p className="text-6xl float mb-4">🎭</p>
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
          Happy April Fool's Day!
        </h1>
        <p className="mt-3 text-xl opacity-80">The one day lying is totally acceptable 😂</p>
      </header>

      {/* Countdown / Reveal */}
      <section className="flex flex-col items-center py-8 px-4">
        <div className="bg-white/20 backdrop-blur rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
          {!revealed ? (
            <>
              <p className="text-lg font-semibold mb-2">⏳ Big secret reveals in…</p>
              <p className="text-7xl font-black blink">{seconds}</p>
            </>
          ) : (
            <>
              <p className="text-4xl mb-2">🎉</p>
              <p className="text-2xl font-bold">The secret is…</p>
              <p className="mt-2 text-lg opacity-90">There is no secret. April Fools! 😂</p>
              <img className="rounded" src="https://images.template.net/121609/high-resolution-april-fools--day-background-5659n.jpg" alt="" />
            </>
          )}
        </div>
      </section>

      {/* Joke Cards */}
      <section className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 ">
        {jokes.map((j, i) => (
          <div
            key={i}
            onClick={() => setWiggling(i)}
            onAnimationEnd={() => setWiggling(null)}
            className={`bg-white/20 backdrop-blur rounded-2xl p-6 cursor-pointer shadow-lg hover:bg-white/30 transition ${wiggling === i ? "wiggle" : ""}`}
          >
            <p className="text-4xl mb-3">{j.emoji}</p>
            <h2 className="font-bold text-lg mb-1">{j.title}</h2>
            <p className="text-medium font-[cursive] opacity-85">{j.text}</p>
          </div>
        ))}
      </section>

      {/* Escape Button Zone */}
      <section className="relative mx-auto max-w-2xl h-48 my-8 bg-white/10 rounded-2xl overflow-hidden">
        <p className="absolute top-3 left-0 right-0 text-center font-semibold text-sm opacity-70">If you have guts,Try to click the button 👇</p>
        <EscapeButton />
      </section>

      {/* Footer */}
      <footer className="text-center py-8 opacity-60 text-sm font-semibold">
        Made with 😂 for April 1st &bull; No fools were harmed
      </footer>
    </div>
  );
}
