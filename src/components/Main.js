import ContentHeader from "./ContentHeader";
import EmailDetails from "./EmailDetails";
import EmailList from "./EmailList";

export default function Main() {
  return (
    <main className="flex flex-col w-full bg-white-600 h-full">
      <ContentHeader />
      <div className="flex flex-row" style={{ height: "calc(100% - 84px)" }}>
        <EmailList />
        <EmailDetails />
      </div>
    </main>
  );
}