import { Mail } from "lucide-react";

export const navItems = [
  {
    name: "Contact",
    action: (action?: any) => {
      action?.();
    },
    Icon: Mail,
  },
];
