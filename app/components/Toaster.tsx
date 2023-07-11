import { AddUser, CallMissed, Message } from "react-iconly";
interface Props {
  icon: number;
  type: string;
  text: string;
}
const icons = [
  <Message set="bold" primaryColor="tomato" />,
  <CallMissed set="bold" primaryColor="tomato" />,
  <AddUser set="bold" primaryColor="papayawhip" />,
];
export const Toaster = ({ icon, text, type }: Props) => {
  return (
    <div className="toast toast-start px-6">
      <div className={`alert alert-${type} flex flex-row`}>
        {icons[icon]}
        <span className="font-semibold">{text}</span>
      </div>
    </div>
  );
};
