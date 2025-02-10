import Header from "@/components/Header";
import CreditCard from "./_components/CreditCard";
import Actions from "./_components/Actions";

export default function Home() {
  return (
    <div className="w-full">
      <Header title="Dashboard" />
      <div className="grid grid-cols-[1fr,2fr,1fr] gap-x-5 mt-5">
        <div>
          <CreditCard />
          <Actions />
        </div>
      </div>
    </div>
  );
}
