import { FormEvent, forwardRef, Ref } from 'react';

interface FormProps {
  emailRef: Ref<HTMLInputElement>;
  isLoading: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  nameRef: Ref<HTMLInputElement>;
  phoneRef: Ref<HTMLInputElement>;
}
interface TextInputProps {
  label: string;
  maxLength: number;
  pattern?: string;
  placeholder: string;
}
const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { label, maxLength, pattern, placeholder } = props;
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-[#5FBF81] font-semibold">{label}</span>
      </label>
      <input
        className="input input-bordered placeholder:text-slate-600 text-neutral-100"
        maxLength={maxLength}
        pattern={pattern}
        placeholder={placeholder}
        ref={ref}
        type="text"
      />
    </div>
  );
});
export const Form = ({
  emailRef,
  isLoading,
  handleSubmit,
  nameRef,
  phoneRef,
}: FormProps) => {
  return (
    <div className="card flex-shrink w-full max-w-sm shadow-1xl bg-base-100 glass my-6 mx-2">
      <form onSubmit={handleSubmit}>
        <div className="card-body content-center justify-items-center px-3">
          <TextInput
            label="Your Name"
            maxLength={25}
            placeholder=" Name"
            ref={nameRef}
          />
          <TextInput
            label="Email Address"
            maxLength={25}
            placeholder=" Email"
            ref={emailRef}
          />
          <TextInput
            label="Phone Number"
            maxLength={11}
            pattern="\d*"
            placeholder=" 09XXXXXXXXX"
            ref={phoneRef}
          />

          <div className="form-control mt-6">
            <button className="btn btn-lg bg-[#5887DA] border-0" type="submit">
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
