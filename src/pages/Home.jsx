import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import join_us from "../assets/join_us.jpg";
import about_us from "../assets/about_us.jpg";
import our_mission from "../assets/our_mission.png";
// Image URLs
const IMAGE_1_URL = "data:image/jpeg;base64,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";
const IMAGE_2_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnFh78QCL50hzTXe6KrI9BCdB5Hm50FkT5yng0ZIKzottmkwQ2Xpylhs&s";
const IMAGE_3_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGXEx8LXbq67d9fikBxyrTUmlxO840jaPqcvS0NytmESIrfBEggkUZ1k&s";

const Home = () => {
  return (
    <Box>
      {/* First Segment: Image on the Right */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        minH="100vh" // Full viewport height
        p={8}
      >
        {/* Left Side: Text Content */}
        <Box flex={1} mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
          <Heading as="h2" size="2xl" mb={6}>
            About IEEE
          </Heading>
          <Text fontSize="xl" color="gray.600">
            The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Join us to explore cutting-edge innovations, collaborate with experts, and shape the future of technology.
          </Text>
        </Box>

        {/* Right Side: Image */}
        <Box flex={1}>
          <Image
            src={about_us}
            alt="Technology Innovation"
            borderRadius="lg"
            boxShadow="lg"
            w="100%"
          />
        </Box>
      </Flex>

      {/* Second Segment: Image on the Left */}
      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        align="center"
        justify="space-between"
        minH="100vh" // Full viewport height
        p={8}
        bg="gray.50" // Set background color explicitly
      >
        {/* Left Side: Text Content */}
        <Box flex={1} ml={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
          <Heading as="h2" size="2xl" mb={6}>
            Our Mission
          </Heading>
          <Text fontSize="xl" color="gray.600">
            IEEE's mission is to foster technological innovation and excellence for the benefit of humanity. We provide a platform for professionals to share knowledge, collaborate on projects, and develop standards that drive the industry forward.
          </Text>
        </Box>

        {/* Right Side: Image */}
        <Box flex={1}>
          <Image
            src={our_mission}
            alt="Collaboration Teamwork"
            borderRadius="lg"
            boxShadow="lg"
            w="100%"
          />
        </Box>
      </Flex>

      {/* Third Segment: Image on the Right */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        minH="100vh" // Full viewport height
        p={8}
      >
        {/* Left Side: Text Content */}
        <Box flex={1} mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
          <Heading as="h2" size="2xl" mb={6}>
            Join Us
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Become a part of the IEEE community and gain access to exclusive resources, networking opportunities, and professional development programs. Together, we can shape the future of technology.
          </Text>
        </Box>

        {/* Right Side: Image */}
        <Box flex={1}>
          <Image
            src={join_us}
            alt="Networking Community"
            borderRadius="lg"
            boxShadow="lg"
            w="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;