"use client";
import { concealEmail } from "@/utils/register";
import Link from "next/link";
import { FC, FormEvent, LegacyRef, useEffect, useState } from "react";
import { ChevronRightCircle, Message } from "react-iconly";
import { Toaster } from "./Toaster";

interface FormProps {
  nameRef: LegacyRef<HTMLInputElement>;
  emailRef: LegacyRef<HTMLInputElement>;
  phoneRef: LegacyRef<HTMLInputElement>;
  isLoading: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
export const Registered: FC = ({}) => {
  const [toaster, setToaster] = useState(true);
  const localStore = localStorage.getItem("comptrolla");
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
        <div className="form-control my-3 mx-3">
          <button className="btn bg-[rgb(0,208,130)] border-0" type="submit">
            <Message set="bold" primaryColor="moccasin" size={20} />
            <span className="mx-5 text-neutral-50 bg-neutral-500/25 py-2 px-4 rounded-md">
              {concealed}
            </span>
          </button>
        </div>

        <div className="divider"></div>
        <div className="py-1">
          <span className="text-neutral-100 text-sm text-center flex bg-[moccasin]/25 p-3 rounded-xl ">
            You will also receive an email for instructions to complete the next
            step.
          </span>
        </div>

        <div className="divider"></div>

        <div className="form-control my-3 mx-3">
          <Link
            href="/steptwo"
            className="btn bg-[rgb(40,116,252)] border-0"
            type="submit"
          >
            <span className="mx-5 text-neutral-100">Proceed to Step 2</span>
            <ChevronRightCircle set="bold" primaryColor="moccasin" />
          </Link>
        </div>
      </div>
      {toaster ? (
        <Toaster icon={2} text="Registration Successful" type="success" />
      ) : null}
    </>
  );
};
