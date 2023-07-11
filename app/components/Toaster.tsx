import { AddUser, CallMissed, Message } from 'react-iconly';
interface Props {
  icon: number;
  type: string;
  text: string;
}
const icons = [
  { name: 'email', icon: <Message primaryColor="tomato" set="bold" /> },
  { name: 'phone', icon: <CallMissed primaryColor="tomato" set="bold" /> },
  { name: 'reg', icon: <AddUser primaryColor="papayawhip" set="bold" /> },
];
export const Toaster = ({ icon, text, type }: Props) => {
  return (
    <div className="toast toast-start px-6">
      <div className={`alert alert-${type} flex flex-row`}>
        {icons[icon].icon}
        <span className="font-semibold">{text}</span>
      </div>
    </div>
  );
};
