import React from 'react';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  Stack,
  Box,
  Avatar,
  AvatarBadge,
  Text,
  Button,
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  chakra,
  Flex,
  HStack,
  flexbox,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Checkbox,
  RadioGroup,
  Radio,
  InputRightElement,
  InputGroup,
  Spacer,
} from '@chakra-ui/react'
import { CiSearchBar } from './stories/Searchbar';
// import { FiMail } from 'react-icons/fi'
// import { BsGlobe } from 'react-icons/bs'
import './App.css';
import { myTheme } from './theme';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import * as icons from '@carbon/icons-react';
import { ChevronDownIcon } from '@chakra-ui/icons';

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

// 2. Call `extendTheme` and pass your custom values
// const myTheme = extendTheme({
//   colors: {
//     brand: {
//       100: "#f7fafc",
//       // ...
//       900: "#1a202c",
//     },
//   },
// })

function SearchTypeRadio() {
  const [value, setValue] = React.useState("1")
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">Search Individual</Radio>
        <Radio value="2">Search Business</Radio>
        <Radio value="3">Search Facility</Radio>
      </Stack>
    </RadioGroup>
  )
}

function App() {
  console.log({myTheme});
  return(
    <ChakraProvider theme={myTheme}>
      <Stack background="#FCFAFA">
        <Stack
          justify="flex-start"
          align="flex-start"
          spacing="0px"
          minHeight="100vh"
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
                    leftIcon={<icons.Email />}
                    size="sm"
                    variant="ghost-unstyled"
                  >
                    Inbox
                  </Button>
                  <Button
                    leftIcon={<icons.Earth />}
                    size="sm"
                    variant="ghost-unstyled"
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
            {/* <Stack
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
            </Stack> */}
            <Stack
              padding="24px"
              direction="row"
              justify="center"
              align="center"
              flex="1"
            >
              <Stack
                padding="32px"
                borderRadius="16px"
                justify="flex-start"
                align="flex-start"
                spacing="24px"
                overflow="hidden"
                background="white"
                boxShadow="xl"
              >
                <Stack maxWidth="848px" justify="flex-start" align="flex-start" alignSelf="stretch">
                  <chakra.h1 className="sectionTitle" textStyle="h2">
                    Licensee Search
                  </chakra.h1>
                  <p>The Thentia Cloud maintains an online Public Registry of Professional Counselors in the state of Thentia. This public registry allows you to search and verify the registration by first name, last name, city, state, zip code, and license type.</p>
                  <HStack>
                    <Menu>
                      <MenuButton as={Button} variant="ghost" rightIcon={<icons.ChevronDown />}>
                        License Type
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Registered Nurse (RN)</MenuItem>
                        <MenuItem>Licensed Practitioner Nurse (LPN)</MenuItem>
                        <MenuItem>Regestered Psychiatric Nurse (RPN)</MenuItem>
                        <MenuItem>Doctor of Medicine (MD)</MenuItem>
                        <MenuItem>Master of Surgery (CM)</MenuItem>
                      </MenuList>
                    </Menu>
                    <Menu>
                      <MenuButton as={Button} variant="ghost" rightIcon={<icons.ChevronDown />}>
                        License Status
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Active</MenuItem>
                        <MenuItem>Expired</MenuItem>
                        <MenuItem>Suspended</MenuItem>
                      </MenuList>
                    </Menu>
                  </HStack>
                  <CiSearchBar bg="grey" />
                  <Stack></Stack><Checkbox>Only show licensees with discipline notices.</Checkbox>
                  {SearchTypeRadio()}
                  <Spacer marginBottom="32px"/>
                  <chakra.h2 className="sectionTitle" textStyle="h2">
                    Register your profile
                  </chakra.h2>
                  <Stack
                    justify="flex-start"
                    align="flex-start"
                    spacing="24px"
                    alignSelf="stretch"
                  >
                    <HStack
                      alignSelf="stretch"
                      spacing="24px"
                      flexWrap="wrap"
                    >
                      <FormControl flex="1" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input />
                      </FormControl>
                      <FormControl flex="1" isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input />
                      </FormControl>
                      <FormControl flex="1">
                        <FormLabel>Middle Name</FormLabel>
                        <Input />
                      </FormControl>
                    </HStack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <FormControl flex="1" isRequired>
                        <FormLabel>Birth Date</FormLabel>
                        <Input
                          placeholder="MM/DD/YYYY"
                          flex="1"
                          type="date"
                        />
                      </FormControl>
                      <FormControl flex="1" isRequired>
                        <FormLabel>Social Security Number</FormLabel>
                        <Input
                          flex="1"
                        />
                      </FormControl>
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <FormControl flex="1" isRequired>
                        <FormLabel>Primary Email Address</FormLabel>
                        <Input
                          flex="1"
                          type="email"
                        />
                      </FormControl>
                      <FormControl flex="1">
                        <FormLabel>Secondary Email Address</FormLabel>
                        <Input
                          flex="1"
                          type="email"
                        />
                      </FormControl>
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="16px"
                      alignSelf="stretch"
                    >
                      <FormControl flex="1" isRequired>
                        <FormLabel>Primary Phone Number</FormLabel>
                        <Input
                          flex="1"
                          type="phone"
                        />
                      </FormControl>
                      <FormControl flex="1">
                        <FormLabel>Secondary Phone Number</FormLabel>
                        <Input
                          flex="1"
                          type="phone"
                        />
                      </FormControl>
                    </Stack>
                  </Stack>
                  <HStack margin="16px 0" alignSelf="stretch" justify="flex-start">
                    <Button>Register</Button>
                  </HStack>
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
