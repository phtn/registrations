import { FC, FormEvent, LegacyRef, RefObject } from "react";

interface FormProps {
  nameRef: LegacyRef<HTMLInputElement>;
  emailRef: LegacyRef<HTMLInputElement>;
  phoneRef: LegacyRef<HTMLInputElement>;
  isLoading: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
export const Registered: FC = ({}) => {
  return (
    <div className="card flex-shrink w-full max-w-sm shadow-1xl bg-base-100 glass h-96">
      <div >You have successfully registered your account.</div>
      <div className="form-control mt-6 mx-3">
        <button className="btn btn-info" type="submit">
          Proceed to Next Step
        </button>
      </div>
    </div>
  );
};
