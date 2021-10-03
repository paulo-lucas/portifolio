import { VStack } from "@chakra-ui/layout";
import Contact from "components/Contact";
import Header from "components/Header";
import Portifolio from "components/Portifolio";

function App() {
  return (
    <VStack p={5}>
      <Contact />
      <Header />
      <Portifolio />
    </VStack>
  );
}

export default App;
