


import React from "react";
import { Box, Flex, Image, Link , Spacer, IconButton, useDisclosure, useBreakpointValue, Stack, Button} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Import Router Link
import logo from "../assets/logo_bg_removed.png"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import { ColorModeButton } from "@/components/ui/color-mode"

const Navbar = () => {

  // const { isOpen, onToggle } = useDisclosure();
  const [menu, setmenu] = useState(false)

  const toggleMenu = () => {
      if(menu == true)
      {
        setmenu(false)
      }
      else{
        setmenu(true)
      }
  }

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg="gray.100" px={4} py={2}>
      <Flex align="center" maxW="1200px" mx="auto">
        {/* Logo */}
        <Box>
          <Image src={logo} alt="IEEE Logo" h={10} />
          
        </Box>
       
        <Spacer />

        {/* Hamburger Menu Button (Mobile Only) */}
        {isMobile && (
          <Button
            
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            variant="outline"
          >{ menu ? <FaTimes /> : <FaBars /> }</Button>
        )}

        {/* Links (Desktop) */}
        {!isMobile && (
          <Flex as="nav" spacing={4} align="center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/members">Members</NavLink>
            <NavLink to="/events">Upcoming Events</NavLink>
            <NavLink to="/pastevents">Past Events</NavLink>
            <NavLink to="/positions">Open Positions</NavLink>
          </Flex>
        )}
      </Flex>

      {/* Mobile Menu (Collapsible) */}
      {isMobile && menu && (
        <Box mt={4}>
          <Stack as="nav" spacing={2}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/members">Members</NavLink>
            <NavLink to="/events">Upcoming Events</NavLink>
            <NavLink to="/pastevents">Past Events</NavLink>
            <NavLink to="/positions">Open Positions</NavLink>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

// Reusable NavLink Component (using react-router-dom's Link)
const NavLink = ({ to, children }) => (
  <Link
    as={RouterLink} // Use RouterLink instead of <a>
    px={4}
    py={2}
    rounded="md"
    fontWeight="medium"
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    to={to} // Use "to" instead of "href"
  >
    {children}
  </Link>
);

export default Navbar;