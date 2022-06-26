import React, { useState, MouseEvent, useEffect } from 'react';
import { joinState } from 'store/recoilTestState';
import { useSetRecoilState } from 'recoil';
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
  type: string;
};

function JoinDropdown({ dropDownList, type }: JoinDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    type === 'job' ? '하고 있는일 선택' : '선택'
  );
  const setJoinInfo = useSetRecoilState(joinState);

  console.log('JoinDropdown type', type);

  const toggling = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    if (type === 'job') {
      setJoinInfo((prev) => ({ ...prev, job: value }));
    } else if (type === 'year') {
      setJoinInfo((prev) => ({ ...prev, year: value }));
    }
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
            {dropDownList.map((job: string) => (
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

export default JoinDropdown;
