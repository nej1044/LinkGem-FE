import React, { useState, MouseEvent, useEffect } from 'react';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  ImageButton,
  DropDownHeaderText,
  InputText,
} from './SettingDropDown.style';

type settingDropdownProps = {
  dropDownList: any;
};

function SettingDropdown({ dropDownList }: settingDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [inputText, setInputText] = useState('');

  const toggling = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setInputText('');
  };

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const changeJobInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        <DropDownHeaderText>
          {(selectedOption.includes('하시는') && (
            <InputText
              value={inputText}
              onChange={changeJobInputText}
              placeholder="하시는 일을 입력해 주세요"
            />
          )) ||
            selectedOption}
        </DropDownHeaderText>

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
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default SettingDropdown;
