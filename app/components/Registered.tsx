import { concealEmail } from "@/utils/register";
import Link from "next/link";
import { FC, FormEvent, LegacyRef, RefObject } from "react";
import { ChevronLeftCircle, ChevronRightCircle, Message } from "react-iconly";

interface FormProps {
  nameRef: LegacyRef<HTMLInputElement>;
  emailRef: LegacyRef<HTMLInputElement>;
  phoneRef: LegacyRef<HTMLInputElement>;
  isLoading: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
export const Registered: FC = ({}) => {
  const localStore = localStorage.getItem("comptrolla");
  const parsed = JSON.parse(localStore as string);
  const email = parsed.email;
  const concealed = concealEmail(email);
  return (
    <div className="card flex-shrink w-full max-w-sm shadow-1xl bg-base-100 glass h-96 p-8">
      <div>
        <span className="text-neutral-100">
          🎉 You have successfully registered your account with the email
          address below.
        </span>
      </div>
      <div className="form-control my-3 mx-3">
        <button className="btn btn-success" type="submit">
          <Message set="two-tone" primaryColor="papayawhip" size={20} />
          <span className="mx-5">{concealed}</span>
        </button>
      </div>
      <div className="py-1">
        <span className="text-neutral-100 text-xs leading-tight justify-center text-center">
          You will also receive an email for instructions to complete the next
          step.
        </span>
      </div>

      <div className="divider"></div>

      <div className="form-control my-3 mx-3">
        <Link href="/nextstep" className="btn btn-info" type="submit">
          <span className="mx-5">Next Step</span>
          <ChevronRightCircle set="two-tone" primaryColor="papayawhip" />
        </Link>
      </div>
    </div>
  );
};
