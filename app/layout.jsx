"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { persistor, store } from "./lib/store";
import { PersistGate } from "redux-persist/integration/react";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import TopHeader from "./components/TopHeader/TopHeader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ScrollToTopButton />
            <TopHeader />
            <Header />
            {children}
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
