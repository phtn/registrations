'use client';
import { Footer, Header } from '../components';
import Link from 'next/link';
import {
  Calling,
  ChevronRightCircle,
  Location,
  Message,
  Work,
} from 'react-iconly';

export default function StepThree() {
  return (
    <main>
      <div className="h-full bg-neutral-100 content-center justify-items-center w-full">
        <Header step={3} title="Submit Requirements" />

        <div className="h-fit grid grid-cols-22 content-center justify-items-center bg-neutral-100">
          <div className="card bg-base-100 glass my-2 mx-2 max-w-xl">
            <div className="card-body mb-0">
              <span className="text-neutral-100 text-lg">
                Once you have completed all the requirements, you can drop by at
                &nbsp;
                <span className="font-semibold text-[rgb(0,208,130)]">
                  Comptrolla Office
                </span>{' '}
                in Quezon City and submit all your requirements.
              </span>
              <div className="divider"></div>
              <span className="text-neutral-100 italic text-sm bg-[moccasin]/30 border-0 p-4 text-center rounded-xl mx-4">
                {' '}
                If you have any questions regarding the process, please feel
                free to contact us by phone and email.
              </span>
              <div className="divider"></div>
            </div>
            <div className="flex flex-row m-4 align-middle content-center">
              <Work primaryColor="#5FBF81" set="bulk" size={25} />
              <span className="text-[moccasin] font-semibold mx-4">
                Comptrolla Technologies, Inc
              </span>
            </div>
            <div className="flex flex-row m-4">
              <Location primaryColor="#5FBF81" set="bulk" size={25} />
              <span className="text-[moccasin] mx-4">
                Suite 204, 2nd Floor, Tomasca Bldg. <br />
                273 Col. Bonny Serrano Avenue <br />
                Cubao, QC 1109 PH
              </span>
            </div>
            <div className="flex flex-row m-4">
              <Calling primaryColor="#5FBF81" set="bulk" size={25} />
              <span className="text-[moccasin] mx-4">
                7004-3581 <br />
              </span>
            </div>
            <div className="flex flex-row m-4">
              <Message primaryColor="#5FBF81" set="bulk" size={25} />
              <span className="text-[moccasin] mx-4">
                hello@comptrolla.com <br />
              </span>
            </div>

            <div className="divider"></div>
            <div className="form-control my-6 mx-3">
              <Link
                className="btn btn-lg bg-[#5887DA] border-0"
                href="https://comptrolla.com"
                type="submit"
              >
                <span className="mx-5 text-neutral-100">Learn More</span>
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
