"use client";

import { requirements } from "@/assets";
import { Footer } from "../components";
import Link from "next/link";
import { ChevronRightCircle } from "react-iconly";

export default function StepTwo() {
  return (
    <main>
      <div className="h-screen bg-neutral-100 content-center justify-items-center w-full">
        <div className="h-fit grid grid-cols-20 justify-items-center bg-neutral-300 py-3 mb-6">
          <span className="text-neutral-focus text-lg">
            <span className="mx-2 font-semibold text-[rgb(40,116,252)]">
              Step 2:
            </span>
            Prepare All Requirements
          </span>
        </div>
        <div className="h-fit grid grid-cols-22 content-center justify-items-center bg-neutral-100">
          <div className="overflow-x-auto max-w-2xl ">
            <table className="table border-collapse border border-[rgb(0,208,130)] rounded-lg">
              {/* head */}
              <thead className="bg-[rgb(0,208,130)]">
                <tr className="border-0">
                  <th></th>
                  <th className="text-neutral-focus">Name</th>
                  <th className="text-neutral-focus">Description</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((item, index) => {
                  return (
                    <tr
                      key={`${item.name}_${index}`}
                      className="border-b-1 border-neutral-300"
                    >
                      <th className="text-sky-500">{index + 1}</th>
                      <td className="text-[rgb(40,116,252)] font-semibold">
                        {item.name}
                      </td>
                      <td className="text-neutral-500">{item.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="card bg-base-100 glass my-10 mx-2 max-w-xl">
            <div className="card-body">
              <span className="text-neutral-100 text-lg">
                Complete all the requirements then proceed to{" "}
                <span className="font-semibold">Step 3.</span>
              </span>
            </div>
            <div className="form-control my-3 mx-3">
              <Link
                href="/stepthree"
                className="btn bg-[rgb(40,116,252)] border-0"
                type="submit"
              >
                <span className="mx-5 text-neutral-100">Proceed to Step 3</span>
                <ChevronRightCircle set="bold" primaryColor="moccasin" />
              </Link>
            </div>
          </div>

          <div className="w-full border-t-2 border-neutral-200">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
