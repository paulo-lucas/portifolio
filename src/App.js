import { VStack } from "@chakra-ui/layout";
import Contact from "components/Contact";
import Header from "components/Header";
import Profile from "components/Profile";
import Social from "components/Social";

function App() {
  return (
    <VStack p={5}>
      <Contact />
      <Header />
      <Profile />
      <Social />
    </VStack>
  );
}

export default App;
