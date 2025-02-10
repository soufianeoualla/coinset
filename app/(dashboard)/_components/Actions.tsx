import { Clock, PlusCircle, Request } from "@/assets/iconsComponents";
import React from "react";

const ActionItem = ({
  title,
  Icon,
}: {
  title: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}) => {
  return (
    <div className="flex items-center flex-col gap-y-1.5 text-green-dark w-full">
      <Icon width={20} height={20} />
      <span className="text-[10px] font-semibold">{title} </span>
    </div>
  );
};

const Actions = () => {
  const actionsList = [
    {
      title: "Top Up",
      icon: PlusCircle,
    },
    {
      title: "Transfer",
      icon: Request,
    },
    {
      title: "Request",
      icon: Request,
    },
    {
      title: "History",
      icon: Clock,
    },
  ];
  return (
    <div className="bg-green-bg rounded-2xl py-3 px-2 flex items-center justify-between gap-x-2 h-[72px] mt-5">
      {actionsList.map((action, index) => (
        <div key={index} className="flex gap-x-2 items-center w-1/4">
          <ActionItem title={action.title} Icon={action.icon} />
          {index !== actionsList.length - 1 && (
            <div className="w-[1px] h-12 bg-white " />
          )}
        </div>
      ))}
    </div>
  );
};

export default Actions;
