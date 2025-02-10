import symbol from "../../../assets/images/symbolCreditCard.svg";
import union from "../../../assets/images/Union.svg";
import Image from "next/image";
const CreditCard = () => {
  return (
    <div className="p-4 flex flex-col items-start gap-y-[27px] rounded-2xl bg-green-dark text-white">
      <div className="flex items-center justify-between w-full">
        <Image src={symbol} alt="symbol" width={24} height={24} />
        <Image src={union} alt="union" width={24} height={24} />
      </div>
      <strong className="text-xl text-green-bg">Andrew Forbist</strong>

      <div className="flex justify-between items-end w-full">
        <div className="flex flex-col gap-y-0.5">
          <span className="text-green-bg text-[10px]">Balance Account</span>
          <strong className="text-[22px]">$ 1,500.00</strong>
        </div>
        <div className="flex gap-x-[18px]">
          <div className="flex flex-col gap-y-0.5">
            <span className="text-green-bg text-[10px]">EXP</span>
            <span className="text-xs font-semibold">11/29</span>
          </div>
          <div className="flex flex-col gap-y-0.5">
            <span className="text-green-bg text-[10px]">CVV</span>
            <span className="text-xs font-semibold">323</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
