import { FC } from 'react';

interface Props {
  step: number;
  title: string;
}
export const Header: FC<Props> = ({ step, title }) => (
  <div className="h-fit grid grid-cols-22 content-center justify-items-center w-full bg-neutral-200 py-3">
    <span className="text-neutral-focus text-lg">
      <span className="mx-2 font-semibold text-[#5887DA]">Step {step}:</span>
      {title}
    </span>
  </div>
);
