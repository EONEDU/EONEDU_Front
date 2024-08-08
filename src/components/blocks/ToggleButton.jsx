import React from 'react';
import Button from '../atoms/Button';
import styled from 'styled-components';
import SizeValue from '../ui/SizeValue';
import ColorPalette from '../ui/ColorPalette';
import FontStyle from '../ui/FontStyle';

const ToggleButtonGroup = styled.div`
  display: flex;
  width: ${SizeValue.width.pageSmContent};
  gap: ${SizeValue.space.md};
  margin-top: ${SizeValue.space.xl3};
  margin-bottom: ${SizeValue.space.xl5};
`;

function ToggleButton({ toggleButtons, selected, setSelected }) {
  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <ToggleButtonGroup>
      {toggleButtons.map((button, index) => (
        <Button
          fontStyle={FontStyle.body2Regular}
          key={index}
          onClick={() => handleClick(index)}
          buttonText={button.text}
          height={SizeValue.height.toggleButtonLg}
          backgroundColor={selected === index ? ColorPalette.gray900 : ColorPalette.white}
          textColor={selected === index ? ColorPalette.white : ColorPalette.gray400}
          boxShadow={selected === index ? "none" : `0 0 0 1px ${ColorPalette.gray300} inset`}
          available
        />
      ))}
    </ToggleButtonGroup>
  );
}

export default ToggleButton;