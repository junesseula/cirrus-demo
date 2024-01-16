import React, { ReactElement } from 'react';

import { Button, HStack, Input, InputGroup, InputRightElement, chakra } from '@chakra-ui/react'
import * as icons from '@carbon/icons-react';
import '../App.css';

interface SearchBarProps {
  bg: "none" | "grey"
}

function getSearchBar(bg:string){
  var searchBar: ReactElement;
  if(bg === "grey"){
    searchBar =
    <>
      <HStack layerStyle="greyContainer" alignSelf="stretch">
        <InputGroup>
          <Input
            placeholder="Search by first name, last name, city, state, zip code and / or license type"
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
    </>;
  }
  else searchBar = <></>;
  return searchBar;
}
export const CiSearchBar = ({ bg }: SearchBarProps) => (
  <>
  {getSearchBar(bg)}
  </>
);
