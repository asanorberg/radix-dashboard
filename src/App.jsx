import "./App.css";
import { Flex, Text, Button, Avatar } from "@radix-ui/themes";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";

export default function App() {
  return (
    <div
      className="overflow-hidden md:min-w-fit mx-auto sm:mx-8 mt-6 rounded-[0.5rem] border bg-background shadow-md md:shadow-xl  lg:max-w-screen-2xl
  "
    >
      <Flex direction="column">
        <Navbar />
        <Dashboard />
      </Flex>
    </div>
  );
}
