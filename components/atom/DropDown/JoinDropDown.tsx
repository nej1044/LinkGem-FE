import React, { useState, MouseEvent, useEffect } from 'react';
import { joinState } from 'store/store';
import { useSetRecoilState } from 'recoil';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  ImageButton,
  DropDownHeaderText,
  InputText,
} from './JoinDropDown.style';

type joinDropdownProps = {
  dropDownList: any;
  type: string;
  changeButtonColor: () => void;
};

function JoinDropdown({
  dropDownList,
  type,
  changeButtonColor,
}: joinDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    type === 'job' ? '하고 있는일 선택' : '선택'
  );
  const [inputText, setInputText] = useState('');
  const setJoinInfo = useSetRecoilState(joinState);

  const toggling = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setInputText('');
  };

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    if (type === 'job') {
      if (value === '직접 입력') {
        return;
      }

      setJoinInfo((prev) => ({ ...prev, job: value }));
    } else if (type === 'year') {
      setJoinInfo((prev) => ({ ...prev, year: value }));
    }
    changeButtonColor();
  };

  const changeJobInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setJoinInfo((prev) => ({ ...prev, job: e.target.value }));
    setIsOpen(false);
    changeButtonColor();
  };

  useEffect(() => {
    setSelectedOption(type === 'job' ? '하고 있는일 선택' : '선택');
    setIsOpen(false);
  }, [type]);

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        <DropDownHeaderText>
          {(selectedOption.includes('직접') && (
            <InputText
              value={inputText}
              onChange={changeJobInputText}
              placeholder="하시는 일을 입력해 주세요"
            />
          )) ||
            selectedOption}
        </DropDownHeaderText>

        {!isOpen ? (
          <ImageButton src="/images/icons/Arrow-Bottom.svg" alt="close" />
        ) : (
          <ImageButton src="/images/icons/Arrow-Top.svg" alt="close" />
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
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default JoinDropdown;
