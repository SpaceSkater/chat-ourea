import Head from "./components/head/Head";
import Chat from "./components/chat/Chat";
import Input from "./components/input/Input";
export default function Home() {
  return (
    <main className="h-screen grid grid-rows-[auto_1fr_auto] ">
      <Head />
      <Chat />
      <Input />
    </main>
  );
}
