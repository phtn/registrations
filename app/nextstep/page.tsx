"use client";

import { requirements } from "@/assets";
import { Footer } from "../components";

export default function NextStep() {
  return (
    <main>
      <div className="h-screen bg-neutral-100">
        <div className="h-fit grid grid-cols-22 content-center justify-items-center py-2 bg-neutral-200">
          <span className="text-neutral-focus text-lg">
            <span className="font-semibold text-sky-600 mx-3">Next Step:</span>{" "}
            Requirements to Prepare
          </span>
        </div>
        <div className="h-fit grid grid-cols-22 justify-items-center bg-neutral-100">
          <div className="overflow-x-auto my-6">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-neutral-focus">Name</th>
                  <th className="text-neutral-focus">Description</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((item, index) => {
                  return (
                    <tr key={`${item.name}_${index}`} className="hover">
                      <th className="text-sky-500">{index + 1}</th>
                      <td className="text-sky-700 hover:text-neutral-100">
                        {item.name}
                      </td>
                      <td className="text-neutral-content">
                        {item.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-full border-t-2 border-neutral-200">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
