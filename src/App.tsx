import React from 'react';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  Stack,
  Box,
  Avatar,
  AvatarBadge,
  Text,
  Button,
  Icon,
  Input,
} from '@chakra-ui/react'
// import { FiMail } from 'react-icons/fi'
// import { BsGlobe } from 'react-icons/bs'
import logo from './logo.svg';
import './App.css';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// function App() {
//   // 2. Wrap ChakraProvider at the root of your app
//   return (
//     <ChakraProvider>
//       <header className="App-header">
//       <Tabs>
//         <TabList>
//           <Tab>One</Tab>
//           <Tab>Two</Tab>
//           <Tab>Three</Tab>
//         </TabList>

//         <TabPanels>
//           <TabPanel>
//             <p>one!</p>
//           </TabPanel>
//           <TabPanel>
//             <p>two!</p>
//           </TabPanel>
//           <TabPanel>
//             <p>three!</p>
//           </TabPanel>
//         </TabPanels>
//       </Tabs>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </ChakraProvider>
//   )
// }

function App() {
  return(
    <ChakraProvider>
      <Stack width="1728px" height="1442px" maxWidth="100%" background="#FCFAFA">
        <Stack
          justify="flex-start"
          align="flex-start"
          spacing="0px"
          width="1728px"
          height="1442px"
          maxWidth="100%"
        >
          <Stack
            justify="flex-start"
            align="flex-start"
            spacing="0px"
            alignSelf="stretch"
          >
            <Box height="4px" alignSelf="stretch" background="blue.500" />
            <Stack
              padding="16px"
              borderBottomRadius="16px"
              direction="row"
              justify="space-between"
              align="flex-start"
              spacing="316px"
              borderColor="gray.300"
              borderStartWidth="1px"
              borderEndWidth="1px"
              borderBottomWidth="1px"
              alignSelf="stretch"
              background="white"
            >
              <Stack padding="8px" justify="flex-start" align="flex-start">
                <Box width="119px" height="15.5px" />
              </Stack>
              <Stack
                direction="row"
                justify="flex-start"
                align="flex-start"
                spacing="16px"
              >
                <Stack
                  direction="row"
                  justify="flex-start"
                  align="center"
                  spacing="16px"
                >
                  <Avatar src=" " name="TA" size="sm">
                    <AvatarBadge boxSize="1.25em" background="green.500" />
                  </Avatar>
                  <Text
                    fontFamily="Inter"
                    lineHeight="1.43"
                    fontWeight="medium"
                    fontSize="14px"
                    color="#000000"
                    textAlign="center"
                  >
                    Taylor Campbell (859-U-974)
                  </Text>
                </Stack>
                <Stack direction="row" justify="flex-start" align="flex-start">
                  <Button
                    // leftIcon={<Icon as={FiMail} />}
                    size="sm"
                    variant="outline"
                    colorScheme="blue"
                  >
                    Inbox
                  </Button>
                  <Button
                    // leftIcon={<Icon as={BsGlobe} />}
                    size="sm"
                    variant="outline"
                    colorScheme="blue"
                  >
                    EN
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="0px"
            flex="1"
            alignSelf="stretch"
          >
            <Stack
              direction="row"
              justify="flex-start"
              align="flex-start"
              alignSelf="stretch"
            >
              <Stack
                padding="16px"
                justify="space-between"
                align="center"
                width="158px"
                alignSelf="stretch"
                background="gray.100"
              >
                <Text
                  fontFamily="Inter"
                  lineHeight="1.43"
                  fontWeight="medium"
                  fontSize="14px"
                  color="#000000"
                  alignSelf="stretch"
                  textAlign="center"
                >
                  left pane placeholder
                </Text>
                <Text
                  fontFamily="Inter"
                  lineHeight="1.43"
                  fontWeight="medium"
                  fontSize="14px"
                  color="#000000"
                  alignSelf="stretch"
                  textAlign="center"
                >
                  left pane placeholder
                </Text>
                <Text
                  fontFamily="Inter"
                  lineHeight="1.43"
                  fontWeight="medium"
                  fontSize="14px"
                  color="#000000"
                  alignSelf="stretch"
                  textAlign="center"
                >
                  left pane placeholder
                </Text>
                <Box width="158px" height="16px" background="gray.100" />
              </Stack>
            </Stack>
            <Stack
              padding="24px"
              direction="row"
              justify="flex-start"
              align="flex-start"
              flex="1"
              alignSelf="stretch"
            >
              <Stack
                padding="32px"
                borderRadius="16px"
                justify="flex-start"
                align="flex-start"
                spacing="24px"
                overflow="hidden"
                flex="1"
                background="white"
                boxShadow="xl"
              >
                <Text
                  fontFamily="Inter"
                  lineHeight="1.33"
                  fontWeight="bold"
                  fontSize="24px"
                  color="#000000"
                >
                  Application Detail
                </Text>
                <Stack justify="flex-start" align="flex-start" alignSelf="stretch">
                  <Text
                    fontFamily="Inter"
                    lineHeight="1.2"
                    fontWeight="bold"
                    fontSize="20px"
                    color="#000000"
                  >
                    Personal Information
                  </Text>
                  <Stack
                    justify="flex-start"
                    align="flex-start"
                    spacing="24px"
                    alignSelf="stretch"
                  >
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="First Name"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Last Name"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  justify="flex-start"
                  align="flex-start"
                  spacing="16px"
                  alignSelf="stretch"
                >
                  <Text
                    fontFamily="Inter"
                    lineHeight="1.2"
                    fontWeight="bold"
                    fontSize="20px"
                    color="#000000"
                  >
                    Mailing Address
                  </Text>
                  <Stack
                    justify="flex-start"
                    align="flex-start"
                    spacing="24px"
                    alignSelf="stretch"
                  >
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Address Line 1"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Address Line 2"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                  </Stack>
                </Stack>
                <Text
                  fontFamily="Inter"
                  lineHeight="1.2"
                  fontWeight="bold"
                  fontSize="20px"
                  color="#000000"
                >
                  Previous Licenses
                </Text>
                <Stack
                  padding="12px"
                  // variant="Unstyled"
                  alignSelf="stretch"
                  direction="row"
                  justify="flex-start"
                  align="flex-start"
                  spacing="0px"
                  borderColor="gray.200"
                  borderStartWidth="1px"
                  borderEndWidth="1px"
                  borderTopWidth="1px"
                  borderBottomWidth="1px"
                >
                  <Stack
                    justify="flex-start"
                    align="flex-start"
                    spacing="0px"
                    flex="1"
                  >
                    <Stack height="40px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.33"
                        fontWeight="bold"
                        fontSize="12px"
                        letterSpacing="0.05em"
                        color="gray.700"
                        width="200px"
                      >
                        NAME
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="medium"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        Segun Adebayo
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="medium"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        Mark Chandler
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="medium"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        Lazar Nikolov
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="medium"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        Javier Alaves
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack
                    justify="flex-start"
                    align="flex-start"
                    spacing="0px"
                    flex="1"
                  >
                    <Stack height="40px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.33"
                        fontWeight="bold"
                        fontSize="12px"
                        letterSpacing="0.05em"
                        color="gray.700"
                        width="200px"
                      >
                        TITLE
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        Founder of Chakra UI
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        Developer
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        DevRel
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        Designer
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack
                    justify="flex-start"
                    align="flex-start"
                    spacing="0px"
                    flex="1"
                  >
                    <Stack height="40px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.33"
                        fontWeight="bold"
                        fontSize="12px"
                        letterSpacing="0.05em"
                        color="gray.700"
                        width="200px"
                      >
                        EMAIL
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        sage@chakra-ui.com
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        mark@chakra-ui.com
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        lazar@chakra-ui.com
                      </Text>
                    </Stack>
                    <Stack height="52px" alignSelf="stretch" background="white">
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="gray.700"
                        width="200px"
                      >
                        javi@chakra-ui.com
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  justify="flex-start"
                  align="flex-start"
                  spacing="16px"
                  alignSelf="stretch"
                >
                  <Text
                    fontFamily="Inter"
                    lineHeight="1.2"
                    fontWeight="bold"
                    fontSize="20px"
                    color="#000000"
                  >
                    Billing Address
                  </Text>
                  <Stack
                    justify="flex-start"
                    align="flex-start"
                    spacing="24px"
                    alignSelf="stretch"
                  >
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Address Line 1"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Address Line 2"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Box height="431px" alignSelf="stretch" />
                  </Stack>
                </Stack>
                <Stack
                  justify="flex-start"
                  align="flex-start"
                  spacing="16px"
                  alignSelf="stretch"
                >
                  <Text
                    fontFamily="Inter"
                    lineHeight="1.2"
                    fontWeight="bold"
                    fontSize="20px"
                    color="#000000"
                  >
                    Summer House Address
                  </Text>
                  <Stack
                    justify="flex-start"
                    align="flex-start"
                    spacing="24px"
                    alignSelf="stretch"
                  >
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Address Line 1"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Address Line 2"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        size="xs"
                        height="24px"
                        flex="1"
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ChakraProvider>
  )
}

export default App;
