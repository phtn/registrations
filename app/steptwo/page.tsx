'use client';

import { requirements } from '@/assets';
import { Footer, Header } from '../components';
import Link from 'next/link';
import { ChevronRightCircle } from 'react-iconly';

const Table = () => {
  return (
    <table className="table">
      {/* head */}
      <thead className="bg-[#5FBF81]/20 ">
        <tr className="border-0">
          <th></th>
          <th className="text-neutral-focus/75 text-[16px]">Name</th>
          <th className="text-neutral-focus/75 text-[16px]">Description</th>
        </tr>
      </thead>
      <tbody>
        {requirements.map((item, index) => {
          return (
            <tr
              className="border-b-1 border-neutral-300"
              key={`${item.name}_${index}`}
            >
              <th className="text-neutral-focus/50">{index + 1}</th>
              <td className="text-[#5887DA] font-semibold">{item.name}</td>
              <td className="text-neutral-500">{item.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default function StepTwo() {
  return (
    <main>
      <div className="h-screen bg-neutral-100 content-center justify-items-center w-full">
        <Header step={2} title="Gather Requirements" />

        <div className="h-fit grid grid-cols-22 content-center justify-items-center bg-neutral-100">
          <div className="overflow-x-auto max-w-2xl ">
            <div className="mockup-window border bg-[#5FBF81] max-w-2xl">
              <div className="flex justify-center bg-neutral-100">
                <Table />
              </div>
            </div>
          </div>
          <div className="card bg-base-100 glass my-12 mx-2 p-2 max-w-lg">
            <div className="card-body">
              <span className="text-neutral-100 text-lg">
                Complete all the requirements then proceed to{' '}
                <span className="font-semibold">Step 3.</span>
              </span>
            </div>
            <div className="form-control my-3 mx-3">
              <Link
                className="btn btn-lg bg-[#5887DA] border-0"
                href="/stepthree"
                type="submit"
              >
                <span className="mx-5 text-neutral-100">Proceed to Step 3</span>
                <ChevronRightCircle primaryColor="white" set="bulk" size={30} />
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
