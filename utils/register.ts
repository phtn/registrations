import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "@/lib/db";

interface MemberData {
  name: string;
  email: string;
  phone: string;
}

export const register = async (memberData: MemberData) => {
  await setDoc(doc(db, "bookkeepers", memberData.email), { ...memberData });
};
