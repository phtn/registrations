import { concealEmail } from "@/utils/register";
import { FC, FormEvent, LegacyRef, RefObject } from "react";

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
    <div className="card flex-shrink w-full max-w-sm shadow-1xl bg-base-100 glass h-96 p-12">
      <div>
        You have successfully registered your account with the email address
        below.
      </div>
      <div className="form-control mt-6 mx-3">
        <button className="btn btn-success" type="submit">
          {concealed}
        </button>
      </div>
      <div className="py-4">
        Check your email to see instructions on how to proceed to the next step.
      </div>
    </div>
  );
};
