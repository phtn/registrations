'use client';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { emailValidator, phoneValidator, register } from '@/utils';
import { Footer, Form, Header, Nav, Registered, Toaster } from './components';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    if (!emailValidator(emailRef.current?.value as string)) {
      setInvalidEmail(true);
      setIsLoading(false);
      setTimeout(() => setInvalidEmail(false), 3000);
    }
    if (!phoneValidator(phoneRef.current?.value as string)) {
      setInvalidPhone(true);
      setIsLoading(false);
      setTimeout(() => setInvalidPhone(false), 3000);
    }
    const member = {
      name: nameRef.current?.value as string,
      email: emailValidator(emailRef.current?.value as string)
        ? (emailRef.current?.value as string)
        : '',
      phone: phoneValidator(phoneRef.current?.value as string)
        ? (phoneRef.current?.value as string)
        : '',
      // * Member Type
      type: 'bookkeeper',
    };

    const validMemberData = !Object.values(member).includes('');

    if (validMemberData) {
      register(member).then(() => {
        setIsLoading(false);
        setIsRegistered(true);
        const storeValue = {
          isRegistered: true,
          email: emailRef.current?.value,
        };
        localStorage.setItem('comptrolla', JSON.stringify(storeValue));
      });
    }
  };

  useEffect(() => {
    const inStore = localStorage.getItem('comptrolla');
    if (inStore !== null) {
      setIsRegistered(true);
    } else {
      setIsRegistered(false);
    }
  }, [isRegistered]);

  return (
    <main>
      <Nav />
      <div className="bg-neutral-100 h-screen">
        <Header step={1} title="Bookkeeper Registration" />
        <div className="h-fit grid grid-cols-22 content-center justify-items-center mx-2">
          {isRegistered ? (
            <Registered />
          ) : (
            <Form
              emailRef={emailRef}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              nameRef={nameRef}
              phoneRef={phoneRef}
            />
          )}

          <Footer />
          {invalidEmail ? (
            <Toaster
              icon={0}
              text="Enter a valid Email Address."
              type="warning"
            />
          ) : null}
          {invalidPhone ? (
            <Toaster
              icon={1}
              text="Enter a valid Phone Number."
              type="warning"
            />
          ) : null}
        </div>
      </div>
    </main>
  );
}
