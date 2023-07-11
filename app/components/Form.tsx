import { FC, FormEvent, LegacyRef, RefObject } from "react";
import { ArrowRight, ChevronRight, ChevronRightCircle } from "react-iconly";

interface FormProps {
  nameRef: LegacyRef<HTMLInputElement>;
  emailRef: LegacyRef<HTMLInputElement>;
  phoneRef: LegacyRef<HTMLInputElement>;
  isLoading: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
export const Form: FC<FormProps> = ({
  nameRef,
  emailRef,
  phoneRef,
  isLoading,
  handleSubmit,
}) => {
  return (
    <div className="card flex-shrink w-full max-w-sm shadow-1xl bg-base-100 glass my-6 mx-2">
      <form onSubmit={handleSubmit}>
        <div className="card-body content-center justify-items-center px-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[rgb(0,208,130)]">
                Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder=" Name"
              className="input input-bordered placeholder:text-slate-600 text-neutral-100"
              ref={nameRef}
              maxLength={25}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[rgb(0,208,130)]">
                Email Address
              </span>
            </label>
            <input
              type="text"
              placeholder=" Email"
              className="input input-bordered placeholder:text-slate-600 text-neutral-100"
              ref={emailRef}
              maxLength={25}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[rgb(0,208,130)]">
                Phone Number
              </span>
            </label>
            <input
              type="text"
              pattern="\d*"
              placeholder=" 09XXXXXXXXX"
              className="input input-bordered placeholder:text-slate-600 text-neutral-100"
              ref={phoneRef}
              maxLength={11}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[rgb(40,116,252)] border-0" type="submit">
              {isLoading ? (
                <span className="loading loading-ring loading-lg text-[moccasin]"></span>
              ) : (
                <span className="text-neutral-100 text-lg">submit</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
