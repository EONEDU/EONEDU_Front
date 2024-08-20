import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SizeValue from "../ui/SizeValue";
import Layout from "../blocks/Layout";
import HighlightText from "../atoms/HighlightText";
import FontStyle from "../ui/FontStyle";
import CheckboxGrid from "../blocks/CheckBoxGrid";
import { useState } from "react";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const TitleWrapper = styled.div`
  ${FontStyle.display2Bold}
  margin: ${SizeValue.space.xl5} 0;
  display: flex;
  white-space: nowrap;
  align-self: center;
`;

function ApplyPage() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedMathOptions, setSelectedMathOptions] = useState([]);

  const options = [
    'Custom Option 1', 'Custom Option 2', 'Custom Option 3', 
    'Custom Option 4', 'Custom Option 5', 'Custom Option 6'
  ];

  const mathOption = [
    'Custom Option 1', 'Custom Option 2', 'Custom Option 3', 
    'Custom Option 4', 'Custom Option 5', 'Custom Option 6'
  ];

  return (
    <Layout>
      <MainContent>
        <TitleWrapper>
          <HighlightText text="원서 접수" fontStyle={FontStyle.display2Bold} />
        </TitleWrapper>
        <CheckboxGrid
          options={options}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          maxSelection={3}
        />
        <CheckboxGrid
          options={mathOption}
          selectedOptions={selectedMathOptions}
          setSelectedOptions={setSelectedMathOptions}
          maxSelection={3}
        />
      </MainContent>
    </Layout>
  );
}

export default ApplyPage;