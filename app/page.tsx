import dynamic from "next/dynamic";

const LeafMap = dynamic(() => import("../Components/ui/LeafMap"), {
  ssr: false,
});
export default function Home() {
  return (
    <main>
      <LeafMap />
    </main>
  );
}
