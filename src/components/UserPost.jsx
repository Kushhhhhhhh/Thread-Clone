import { Link } from "react-router-dom";
import { Flex, Box, Text } from "@chakra-ui/layout"
import { Avatar, Image } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
const UserPost = () => {
  return (
    <Link to={"/markzuckerberg/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size={"md"} name="Mark Zuckerberg" src="/zuck-avatar.png"/>  
          <Box w="1px" h={"full"} bg="gary.light" my={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar 
            size={"xs"}
            name="Pavitra Prabhakar"
            src="https://i.pinimg.com/736x/aa/2d/3c/aa2d3c5c7bca1b2287b76570f54720c1.jpg"
            position={"absolute"}
            top={"0px"}
            left={"15px"}
            padding={"2px"}
            />
            <Avatar 
            size={"xs"}
            name="Ryan Gosling"
            src="https://static.independent.co.uk/2023/04/06/11/Ryan%20Goslings%20tan%20barbie%20indybest%20copy.jpg"
            position={"absolute"}
            bottom={"0px"}
            right={"-5px"}
            padding={"2px"}
            />
            <Avatar 
            size={"xs"}
            name="Jacob Elordi"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaY8ezU1E9Bbk-RT4Ptxl2z51rxjUKAYvAuRGjsr_JS8ozGVF6HvOh9KTmydQD9Tge7WE&usqp=CAU"
            position={"absolute"}
            bottom={"0px"}
            left={"4px"}
            padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={"2px"}>
          <Flex justifyContent={"space-between"} w={"full"}>
          <Flex w={"full"} alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
             markzuckerberg
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={1}/>
          </Flex>
          <Flex gap={4} alignItems={"center"}>
            <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
            <BsThreeDots />
          </Flex>
          </Flex>
          <Text fontSize={"sm"}>
            Hey peeps!
          </Text>
          <Box 
          borderRadius={6}
          overflow={"hidden"}
          border={"1px solid"}
          borderColor={"gray.light"}
          >
            <Image src="/post1.png" w={"full"}/>
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
