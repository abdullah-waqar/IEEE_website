import React from "react";
import { Box, Heading, Text, VStack, Container, Image, Flex } from "@chakra-ui/react";
import abdullah_waqar_img from "../assets/members_images/abdullah_waqar.jpg";
import ahmad_ghani_img from "../assets/members_images/ahmad_ghani.jpg";
import ahmad_jawad_img  from "../assets/members_images/ahmad_jawad.jpg";
import aleena_amjad_img from "../assets/members_images/aleena_amjad.jpeg";
import ayesha_liaqat_img from "../assets/members_images/ayesha_liaqat.jpg";
import ayesha_img from "../assets/members_images/ayesha.jpg";
import farheen_jadoon_img from "../assets/members_images/farheen_jadoon.jpg";
import harbaz_khan_img from "../assets/members_images/harbaz_khan.jpg";
import hijab_fatima_img from "../assets/members_images/hijab_fatima.jpg";
// import saifullah_sajid_img from "../assets/members_images/saifullah_sajid.HEIC";
import zaviyar_ali_img from "../assets/members_images/zaviyar_ali.jpg";
// Dummy data for members
const members = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Branch Chair",
    department: "Artificial Intelligence",
    image: ayesha_img,
  },
  {
    id: 2,
    name: "Ubaid",
    role: "Vice President",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 3,
    name: "Abdullah Waqar Lodhi",
    role: "IT HEAD",
    department: "Software Engineering",
    image: abdullah_waqar_img,
  },

  {
    id: 4,
    name: "Ahmad Ghani",
    role: "Industry Liaison Coordinator",
    department: "Artificial Intelligence",
    image: ahmad_ghani_img,
  },

  {
    id: 5,
    name: "Gulalai Zafar",
    role: "Documentation Head",
    department: "Artificial Intelligence",
    image: "",
  },

  {
    id: 6,
    name: "Aleena Amjad",
    role: "Sub Lead Graphic Designer",
    department: "Software Engineering",
    image: aleena_amjad_img,
  },

  {
    id: 7,
    name: "Saifullah Sajid",
    role: "Media Head",
    department: "Artificial Intelligence",
    image: "",
  },

  {
    id: 8,
    name: "Harbaz Khan Jadoon ",
    role: "Director Security ",
    department: "Electrical Engineering",
    image: harbaz_khan_img,
  },
  {
    id: 9,
    name: "Farheen Jadoon",
    role: "Director PR",
    department: "Software Engineering",
    image: farheen_jadoon_img,
  },

  {
    id: 10,
    name: "Ahmad Jawad",
    role: "Director Graphics",
    department: "Computer Science",
    image: ahmad_jawad_img,
  },

  {
    id: 11,
    name: "Ayesha Liaqat",
    role: "Sublead graphic Designer",
    department: "Artificial Intelligence",
    image: ayesha_liaqat_img,
  },

  {
    id: 12,
    name: "Zaviyar Ali ",
    role: "Media cabinet holder ",
    department: "Business Management System",
    image: zaviyar_ali_img,
  },
  
];

const Members = () => {
  return (
    <Box>
      {/* Header Section */}
      <Box bg="gray.600" height={"50"} py={20} textAlign="center" color="white">
        <Heading as="h1" size="2xl" mb={4}>
          Our Members
        </Heading>
        <Text fontSize="xl">
          Meet the talented individuals who make up our society.
        </Text>
      </Box>

      {/* Members Section */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={8} align="stretch">
          {members.map((member) => (
            <Box
              key={member.id}
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              p={6}
            >
              <Flex direction={{ base: "column", md: "row" }} align="center">
                {/* Left Side: Image */}
                <Box flexShrink={0} mr={{ base: 0, md: 6 }} mb={{ base: 4, md: 0 }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    borderRadius="full"
                    boxSize="150px"
                  
                  />
                  <img src="" alt="" />
                </Box>

                {/* Right Side: Details */}
                <Box flex={1}>
                  <Heading as="h2" size="lg" mb={2}>
                    {member.name}
                  </Heading>
                  <Text fontSize="md" color="gray.600" mb={2}>
                    <strong>Role:</strong> {member.role}
                  </Text>
                  <Text fontSize="md" color="gray.600">
                    <strong>Department:</strong> {member.department}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Members;