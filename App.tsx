import { StatusBar } from "expo-status-bar";
import React from "react";
import { FavoriteProvider } from "./src/context/FavoritesContext";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <FavoriteProvider>
        <Routes />
      </FavoriteProvider>
    </>
  );
}
