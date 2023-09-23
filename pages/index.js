import React from "react";
import Title from "@/components/title";
import SignupForm from "@/components/signup";
import SplineViewer from "@/components/splineviewer";
// import RouteIDContent from "./content";
import NavBar from "./navbar";
import Link from "next/link";

export default function App() {
  return (
    <div className="flex">
      <div className="w-1/2 p-8">
        <Title />
        <SignupForm />
      </div>
      {/* <div className="w-1/2 pt-[225px]">
          <SplineViewer />
      </div> */}
    </div>
  );
}
