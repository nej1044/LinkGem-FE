import React, { useState, memo, MouseEvent, useEffect } from 'react';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  ImageButton,
  DropDownHeaderText,
} from './JoinDropDown.style';

type JoinDropdownProps = {
  dropDownList: any;
  dropDownHeader: string;
};

function JoinDropdown({ dropDownList, dropDownHeader }: JoinDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(dropDownHeader);

  const toggling = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  console.log('selectedOption');
  console.log(selectedOption);
  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        <DropDownHeaderText>{selectedOption}</DropDownHeaderText>

        {!isOpen ? (
          <ImageButton src="/static/image/Arrow-Bottom.svg" alt="close" />
        ) : (
          <ImageButton src="/static/image/Arrow-Top.svg" alt="close" />
        )}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {dropDownList.map((job) => (
              <ListItem onClick={onOptionClicked(job)} key={Math.random()}>
                {job}
              </ListItem>
            ))}
            <input type="text" placeholder="직접 입력" />
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default memo(JoinDropdown);
