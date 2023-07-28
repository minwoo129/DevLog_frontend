import React, { useContext } from "react";
import Button from "@mui/material/Button";
import DrawerMenu from "./DrawerMenu";
import MenuContext from "@/contexts/MenuContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isOpen, setOpen } = useContext(MenuContext);
  return (
    <>
      <Button onClick={() => setOpen(true)}>{"open"}</Button>
      <DrawerMenu isOpen={isOpen} setOpen={setOpen} />
      <div>{children}</div>
    </>
  );
}
