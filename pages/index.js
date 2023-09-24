import React from "react";
import Title from "@/components/title";
import SignupForm from "@/components/signup";
import SplineViewer from "@/components/splineviewer";
// import RouteIDContent from "./content";
import NavBar from "./navbar";
import Link from "next/link";
import Landing_Page from "@/components/signup";


export default function App() {
  return (
    <div className="flex">
      <div className="w-1/2 p-8">
        <Title />
        <Landing_Page />
      </div>
      {/* <div className="w-1/2 pt-[225px]">
          <SplineViewer />
      </div> */}
    </div>
  );
}
