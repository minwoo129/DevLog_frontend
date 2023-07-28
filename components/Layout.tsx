import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
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
