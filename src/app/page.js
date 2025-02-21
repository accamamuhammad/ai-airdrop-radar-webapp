import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  const airdrop = [
    {
      name: "layerEdge",
      category: "Testnet",
      icon: "layeredge-icon.png",
    },
    {
      name: "Grass",
      category: "DePin",
      icon: "grass-icon.png",
    },
    {
      name: "Midas",
      category: "Telegram",
      icon: "midas-icon.png",
    },
  ];

  return (
    <main className="w-screen h-fit px-10 py-6 gap-6 flex flex-col items-center justify-start">
      <Nav />
      <div className="flex gap-6 my-5 flex-col items-center justify-center">
        <h1 className="font-bold text-5xl">Airdrops</h1>
        <h3 className="font-medium text-slate-500 text-2xl">
          List of the hottest airdrops
        </h3>
      </div>
      <div className="w-full md:w-[88%] flex flex-col gap-5">
        {airdrop.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[68px] cursor-pointer bg-slate-200 pl-3 pr-4 rounded-lg flex flex-row items-center justify-between"
            >
              <div className="flex flex-row gap-3 sm:gap-4 items-center">
                {/* Icon */}
                <Image
                  width={30}
                  height={30}
                  src={`/airdrop-icons/${item.icon}`}
                  alt="icon"
                />
                {/* Airdrop Name */}
                <p className="font-semibold text-lg">{item.name}</p>
              </div>
              <p className=" text-green-900 font-semibold">{item.category}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
