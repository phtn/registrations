import { FC, FormEvent, LegacyRef } from 'react';

interface FormProps {
  emailRef: LegacyRef<HTMLInputElement>;
  isLoading: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  nameRef: LegacyRef<HTMLInputElement>;
  phoneRef: LegacyRef<HTMLInputElement>;
}
export const Form: FC<FormProps> = ({
  emailRef,
  isLoading,
  handleSubmit,
  nameRef,
  phoneRef,
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
              className="input input-bordered placeholder:text-slate-600 text-neutral-100"
              maxLength={25}
              placeholder=" Name"
              ref={nameRef}
              type="text"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[rgb(0,208,130)]">
                Email Address
              </span>
            </label>
            <input
              className="input input-bordered placeholder:text-slate-600 text-neutral-100"
              maxLength={25}
              placeholder=" Email"
              ref={emailRef}
              type="text"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[rgb(0,208,130)]">
                Phone Number
              </span>
            </label>
            <input
              className="input input-bordered placeholder:text-slate-600 text-neutral-100"
              maxLength={11}
              pattern="\d*"
              placeholder=" 09XXXXXXXXX"
              ref={phoneRef}
              type="text"
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
