import { Text, Link, Flex } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <>
      <Text display={"inline"}>Developed by </Text>
      <Link href="https://hemantsharma.dev" isExternal display={"inline-block"}>
        <Flex direction={"row"} alignItems={"center"} justifyContent={"center"}>
          <Text>Hemant Sharma</Text>
          <ExternalLinkIcon mx={"2px"} />
        </Flex>
      </Link>
    </>
  );
};

export default Footer;
