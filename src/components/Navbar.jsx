import { Flex, List, ListItem, Link } from "@chakra-ui/react";

import data from "../data.json";

const Navbar = () => {
  return (
    <Flex direction={"column"}>
      <List>
        {data.navbarOptions.map((item, index) => {
          return (
            <ListItem key={index} className="navbar-item">
              <Link href={item.link} className="navbar-link">
                {item.label}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};

export default Navbar;
