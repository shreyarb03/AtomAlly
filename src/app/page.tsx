import DefaultLayout from "@/components/Layout/DefaultLayout";

import { Metadata } from "next";  //metadata helps in search engine optimization
import Index from "@/components/Dashboard";

export const metadata:Metadata={
  title:"AtomAlly - educational and research platform",
  description:"Description for AtomAlly",
}; //helps with SEO

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index/>
      </DefaultLayout>
    </>
  );
}
