"use client";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { HomeOutlined, Person2Outlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE } from "@/constants/navigation";

export const Footer = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        router.push(newValue);
      }}
      sx={{
        width: "100%",
        position: "fixed",
        bottom: { xs: 0, sm: "unset" },
        top: { xs: "unset", sm: 0 },
      }}
    >
      <BottomNavigationAction value={LOGIN_PAGE_ROUTE} label="Login" icon={<Person2Outlined />} />
      <BottomNavigationAction value={HOME_PAGE_ROUTE} label="Home" icon={<HomeOutlined />} />
    </BottomNavigation>
  );
};
