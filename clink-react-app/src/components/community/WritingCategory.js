import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function WritingCategory() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "정보", value: "1" },
    { name: "자유", value: "2" },
  ];
  return (
    <div>
      <p style={{fontWeight:"bold", display:"block"}}>카테고리 선택 &nbsp;</p>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-primary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}
