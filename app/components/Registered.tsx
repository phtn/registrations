'use client';
import { useEffect, useState } from 'react';
import { concealEmail } from '@/utils/register';
import Link from 'next/link';
import { ChevronRightCircle, Message } from 'react-iconly';
import { Toaster } from './Toaster';

export const Registered = () => {
  const [toaster, setToaster] = useState(true);
  const localStore = localStorage.getItem('comptrolla');
  const parsed = JSON.parse(localStore as string);
  const email = parsed.email;
  const concealed = concealEmail(email);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToaster(false);
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <>
      <div className="card flex-shrink w-full max-w-sm shadow-1xl bg-base-100 glass h-full p-8 my-6">
        <div>
          <span className="text-neutral-100">
            <span className="mx-2 text-lg">🎉</span>You have successfully
            registered your account with the email address below.
          </span>
        </div>
        <div className="form-control my-3 mx-0">
          <button className="btn btn-lg bg-[#5FBF81] border-0" type="submit">
            <Message primaryColor="white" set="bulk" size={30} />
            <span className="mx-3 text-neutral-50 bg-neutral-500/25 py-2 px-2 rounded-md">
              {concealed}
            </span>
          </button>
        </div>

        <div className="divider"></div>
        <div className="py-1">
          <span className=" italic text-neutral-100 text-sm text-center flex bg-[moccasin]/30 p-3 rounded-xl ">
            You will also receive an email for instructions to complete the next
            step.
          </span>
        </div>

        <div className="divider"></div>

        <div className="form-control my-3">
          <Link
            className="btn btn-lg bg-[#5887DA] border-0"
            href="/steptwo"
            type="submit"
          >
            <span className="mx-3 text-neutral-100">Proceed to Step 2</span>
            <ChevronRightCircle primaryColor="white" set="bulk" size={30} />
          </Link>
        </div>
      </div>
      {toaster ? (
        <Toaster icon={2} text="Registration Successful" type="success" />
      ) : null}
    </>
  );
};
