"use client";
import {
  CardsIcon,
  DashboardIcon,
  InboxIcon,
  InsightsIcon,
  InvestmentsIcon,
  InvoicesIcon,
  PayementsIcon,
  PromosIcon,
  SavingPlansIcon,
  TransactionsIcon,
  LockOpenIcon,
} from "@/assets/iconsComponents";
import logo from "../assets/icons/Logo.svg";
import symbol from "../assets/icons/symbol.svg";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { ChevronDown } from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    link: "/",
    icon: DashboardIcon,
  },
  {
    name: "Payments",
    icon: PayementsIcon,
    link: "/payments",
    subMenu: [
      {
        name: "Transfer",
        link: "/payments/transfer",
      },
      {
        name: "Payment",
        link: "/payments/payment",
      },
    ],
  },
  {
    name: "Transactions",
    link: "/transactions",
    icon: TransactionsIcon,
  },
  {
    name: "Invoices",
    link: "/invoices",
    icon: InvoicesIcon,
  },
  {
    name: "Cards",
    link: "/cards",
    icon: CardsIcon,
  },
  {
    name: "Saving Plans",
    link: "/saving-plans",
    icon: SavingPlansIcon,
  },
  {
    name: "Investments",
    link: "/investments",
    icon: InvestmentsIcon,
  },
  {
    name: "Inbox",
    link: "/inbox",
    icon: InboxIcon,
  },
  {
    name: "Promos",
    link: "/promos",
    icon: PromosIcon,
  },
  {
    name: "Insights",
    link: "/insights",
    icon: InsightsIcon,
  },
];

const SideBar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className="px-4 py-8 bg-green-bg  h-full flex flex-col">
      <Image src={logo} alt="logo" width={141} height={38} className="mb-7" />
      <div className="flex flex-col justify-between  flex-1 ">
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = pathname.includes(item.link);
            return (
              <React.Fragment key={index}>
                <div
                  onClick={() => item.subMenu && setCollapsed(!collapsed)}
                  className={cn(
                    "flex justify-between items-center text-gray-30 h-10 w-40 pl-5 rounded-3xl cursor-pointer text-sm font-semibold hover:bg-green-light/30",
                    isActive && "bg-green-light text-black",
                    item.subMenu && "hover:bg-transparent hover:text-black"
                  )}
                >
                  <div className="flex gap-x-3 items-center">
                    <item.icon width={24} height={24} />
                    <span>{item.name}</span>
                  </div>
                  {item.subMenu && <ChevronDown width={16} height={16} />}
                </div>
                {collapsed &&
                  item.subMenu &&
                  item.subMenu.map((m) => (
                    <div
                      key={m.name}
                      className={cn(
                        "flex gap-x-6 items-center text-gray-30 pl-7 rounded-3xl h-10 w-40 cursor-pointer text-sm font-semibold",
                        isActive && "bg-green-light text-black "
                      )}
                    >
                      <span
                        className={cn(
                          "h-full w-[1px] bg-gray-20",
                          isActive && "bg-black w-[3px] h-[60%] "
                        )}
                      />
                      {m.name}
                    </div>
                  ))}
              </React.Fragment>
            );
          })}
        </div>
        <div className="bg-green-dark rounded-2xl p-4 w-[154px] text-xs  relative">
          <div className="w-8 h-8 rounded-lg bg-green-bg flex justify-center items-center">
            <LockOpenIcon width={18} height={18} />
          </div>
          <Image
            src={symbol}
            alt="symbol"
            className="absolute -right-[1px] -top-[1px] "
            width={65}
            height={65}
          />
          <p className="mb-5 mt-[38px] text-green-bg">
            Gain full access to your finances with detailed analytics and graphs
          </p>
          <Button>Get Pro</Button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
