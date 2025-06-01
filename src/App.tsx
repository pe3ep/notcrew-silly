import React from "react";
export const useWithSound = (audioSource: string) => {
  const soundRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    soundRef.current = new Audio(audioSource);
  }, []);

  const playSound = () => {
    soundRef.current?.play();
  };

  const pauseSound = () => {
    soundRef.current?.pause();
  };

  return {
    playSound,
    pauseSound,
  };
};
function App() {
  const [clicked, setClicked] = React.useState(false);
  const { playSound } = useWithSound("https://6ipf0dh0ke.ufs.sh/f/3WRmNuZIyAZYwzU7tu8F8dHxXkBK6JRC0vI7hApna1GMPujl");
  function handleFunny() {
    setClicked(true);
    playSound();
  }

  if (clicked) {
    return (
      <main className="grid w-full h-screen bg-black place-content-center">
        <img
          width={498}
          height={498}
          src="https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
          alt="get rickrolled"
        />
      </main>
    );
  }
  return (
    <main className="p-4">
      <h1 className="text-5xl font-semibold">Woah there!</h1>
      <p>
        You probably meant to type{" "}
        <a href="https://noxcrew.com/" className="text-blue-600 underline">
          noxcrew.com
        </a>
        . But whilst you are here, you should enjoy some relaxing music
      </p>
      <button
        onClick={() => handleFunny()}
        className="mt-4 py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition-colors cursor-pointer"
      >
        Play relaxing music
      </button>
      <p className="mt-4 text-neutral-600">
        made by{" "}
        <a href="https://pe3epwithyou.vercel.app" className="text-blue-600 underline">
          pe3epwithyou
        </a>{" "}
        source on{" "}
        <a href="https://github.com/pe3ep/notcrew-silly" className="text-blue-600 underline">
          github
        </a>{" "}
      </p>
    </main>
  );
}

export default App;
