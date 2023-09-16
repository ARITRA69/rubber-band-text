import RubberBand from "@/components/TextSpan";

export default function Home() {
  const sentence1 = "Hi, I'm ".split("");
  const sentence2 = "RUBBER BAND TEXT".split("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-full text-center items-center text-[90px] font-bold">
        <h1 className="text-gray-50 py-4">
          {sentence1.map((letter, index) => {
            return (
              <RubberBand key={index}>
                {letter == " " ? "\u00A0" : letter}
              </RubberBand>
            );
          })}
        </h1>
        <h1 className="text-red-500 py-4">
          {sentence2.map((letter, index) => {
            return (
              <RubberBand key={index}>
                {letter == " " ? "\u00A0" : letter}
              </RubberBand>
            );
          })}
        </h1>
      </div>
    </main>
  );
}
