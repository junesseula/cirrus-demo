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
} from '@chakra-ui/react'
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
                    leftIcon={<icons.Email />}
                    size="sm"
                    variant="ghost"
                  >
                    Inbox
                  </Button>
                  <Button
                    leftIcon={<icons.Earth />}
                    size="sm"
                    variant="ghost"
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
                  <HStack alignSelf="stretch">
                    <InputGroup>
                      <Input
                        placeholder="Search by first name, last Name, city, state, zip Code and / or license type"
                        bg="cirrusTokens.color.grey[0].value"
                        size="md"
                        type="search"
                        border="0"
                        borderRadius="0"
                        variant="outline"
                      />
                      <InputRightElement margin="4px" children={<icons.Search />} />
                    </InputGroup>
                    <Button>Search</Button>
                  </HStack>
                  <Stack></Stack><Checkbox>Only show licensees with discipline notices.</Checkbox>
                  {SearchTypeRadio()}
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
                      <Input
                        placeholder="Placeholder"
                        
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
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
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
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
                  <chakra.h2 textStyle="h2">
                    Mailing Address
                  </chakra.h2>
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
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
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
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
                        flex="1"
                      />
                    </Stack>
                  </Stack>
                </Stack>
                <chakra.h2 textStyle="h2">
                    Previous Licenses
                </chakra.h2>
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
                  <chakra.h2 textStyle="h2">
                    Billing Address
                  </chakra.h2>
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
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
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
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
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
                  <chakra.h2 textStyle="h2">
                    Summer House Address
                  </chakra.h2>
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
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
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
                        flex="1"
                      />
                      <Input
                        placeholder="Placeholder"
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
