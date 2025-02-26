import React from "react";
import { Box, Heading, Text, VStack, Container, Image, Flex } from "@chakra-ui/react";
import about_us_image from "../assets/logo_pak_austria.jpg"
// Placeholder image URL
const ABOUT_IMAGE_URL = "data:image/jpeg;base64,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";

const About = () => {
  return (
    <Box>
      {/* Header Section */}
      <Box bg="gray.600" py={20} textAlign="center" color="white">
        <Heading as="h1" size="2xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="xl">
          Learn more about IEEE and our rich history of innovation.
        </Text>
      </Box>

      {/* Content Section */}
      <Container maxW="1200px" py={16} >
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          {/* Left Side: Text Content */}
          <Box flex={1} mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
            <Heading as="h2" size="xl" mb={6}>
              Our History
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight="tall">
              Founded in 1963, IEEE has grown to become the world's largest technical professional organization. With over 400,000 members across 160 countries, we have a rich history of pioneering breakthroughs in technology. From the development of modern computing to advancements in renewable energy, IEEE has been at the forefront of innovation for over six decades.
            </Text>
            <Text fontSize="lg" color="gray.600" mt={4} lineHeight="tall">
              Our mission is to empower innovation and technological advancement for the betterment of humanity. We strive to create a global community of engineers, scientists, and professionals who collaborate to solve the world's most pressing challenges.
            </Text>
          </Box>
          
          {/* Right Side: Image */}
          <Box flex={1} >
            <Image
              src={about_us_image}
               borderRadius="lg"
              boxShadow="lg"
              w="60%"
            />
          </Box>
        </Flex>
      </Container>

      {/* Values Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="1200px">
          <VStack spacing={8} align="center" textAlign="center">
            <Heading as="h2" size="xl">
              Our Values
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              At IEEE, we are guided by a set of core values that define who we are and how we work.
            </Text>
            <Flex direction={{ base: "column", md: "row" }} justify="space-between" w="100%">
              <Box flex={1} p={4} textAlign="center">
                <Heading color={'black'} fontWeight={'bold'} as="h3" size="lg" mb={4}>
                  Integrity
                </Heading>
                <Text fontSize="md" color="gray.600">
                  We uphold the highest standards of honesty and ethical behavior.
                </Text>
              </Box>
              <Box flex={1} p={4} textAlign="center">
                <Heading color={'black'} fontWeight={'bold'} as="h3" size="lg" mb={4}>
                  Excellence
                </Heading>
                <Text fontSize="md" color="gray.600">
                  We are committed to delivering quality and innovation in everything we do.
                </Text>
              </Box>
              <Box flex={1} p={4} textAlign="center">
                <Heading color={'black'} fontWeight={'bold'} as="h3" size="lg" mb={4}>
                  Collaboration
                </Heading>
                <Text fontSize="md" color="gray.600">
                  We believe in the power of teamwork and shared knowledge.
                </Text>
              </Box>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default About;