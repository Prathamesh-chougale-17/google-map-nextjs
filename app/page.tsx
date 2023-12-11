import dynamic from "next/dynamic";

const ExpMap = dynamic(() => import("../Components/ui/ExpMap"), {
  ssr: false,
});
export default function Home() {
  return (
    <main>
      <ExpMap />
    </main>
  );
}
