import React, { useState, useEffect } from "react";
import {
  AccordionItem,
  Accordion,
  AccordionBody,
  AccordionHeader,
  Label,
  Input,
} from "reactstrap";

const RecipiesFilter = () => {
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const [maxCals, setMaxCals] = useState(2000);

  function change(event) {
    const { value } = event.target;
    console.log(value);
    setMaxCals(value);
  }

  return (
    <Accordion open={open} toggle={toggle} className="accordian my-2">
      <AccordionItem>
        <AccordionHeader targetId="1">Filters</AccordionHeader>
        <AccordionBody accordionId="1">
          <Label for="exampleRange">Max Calories: {maxCals}</Label>
          <Input
            id="exampleRange"
            name="range"
            type="range"
            value={maxCals}
            min={0}
            max={2000}
            step={10}
            onChange={change}
          />
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};
export default RecipiesFilter;
