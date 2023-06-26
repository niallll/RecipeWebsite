import React, { useState, useContext } from "react";
import {
  AccordionItem,
  Accordion,
  AccordionBody,
  AccordionHeader,
  Label,
  Input,
} from "reactstrap";
import { RecipeFilterContext } from "../contexts/RecipeFilterContext";

const RecipiesFilter = () => {
  const { maxCals, HandleCalorieFilterChange } =
    useContext(RecipeFilterContext);

  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Accordion open={open} toggle={toggle} className="accordian my-4">
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
            onChange={HandleCalorieFilterChange}
          />
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};
export default RecipiesFilter;
