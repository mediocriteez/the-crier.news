import { Suspense } from "react";
import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <>
        <Header />
        <Suspense>
          {children}
        </Suspense>
    </>
  );
}
