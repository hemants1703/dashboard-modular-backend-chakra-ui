import { useColorMode, Button, Flex, Heading } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        as={"nav"}
        wrap={"wrap"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"5px"}
      >
        <Heading as="h1" size="lg">
          Dashboard
        </Heading>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </>
  );
};

export default Header;
