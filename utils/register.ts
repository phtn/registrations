import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/db";

interface MemberData {
  name: string;
  email: string;
  phone: string;
}

export const register = async (memberData: MemberData) => {
  await setDoc(doc(db, "bookkeepers", memberData.email), { ...memberData });
};

export function concealEmail(email: string): string {
  const emailParts = email.split("@");
  if (emailParts.length !== 2) {
    // Invalid email format, return an empty string or handle the error accordingly
    return "";
  }

  const [prefix, domain] = emailParts;
  const formattedEmail = `***${prefix.substr(-3)}@${domain.substr(0, 3)}***`;
  return formattedEmail;
}
