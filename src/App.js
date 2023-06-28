import { VStack } from "@chakra-ui/layout";
import Contact from "components/Contact";
import Header from "components/Header";
import Portfolio from "components/Portfolio";

function App() {
  return (
    <VStack p={5}>
      <Contact />
      <Header />
      <Portfolio />
    </VStack>
  );
}

export default App;
