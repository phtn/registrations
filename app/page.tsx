"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { register } from "@/utils/register";
import { Header, Form, Footer, Nav, Registered } from "./components";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    const member = {
      name: nameRef.current?.value as string,
      email: emailRef.current?.value as string,
      phone: phoneRef.current?.value as string,
      // * Member Type
      type: "bookkeeper",
    };

    const validMemberData = !Object.values(member).includes("");

    if (validMemberData) {
      register(member).then(() => {
        setIsLoading(false);
        const storeValue = {
          isRegistered: true,
          email: emailRef.current?.value,
        };
        localStorage.setItem("comptrolla", JSON.stringify(storeValue));
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const inStore = localStorage.getItem("comptrolla");
    if (inStore !== null) {
      setIsRegistered(true);
    } else {
      setIsRegistered(false);
    }
  }, []);

  return (
    <main>
      <Nav />
      <div className="bg-neutral-100 h-screen">
        <div className="h-fit grid grid-cols-22 content-center justify-items-center px-2">
          <Header />

          {isRegistered ? (
            <Registered />
          ) : (
            <Form
              nameRef={nameRef}
              emailRef={emailRef}
              phoneRef={phoneRef}
              isLoading={isLoading}
              handleSubmit={handleSubmit}
            />
          )}

          <Footer />
        </div>
      </div>
    </main>
  );
}
