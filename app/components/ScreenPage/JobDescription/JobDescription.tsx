"use client";

import { Input, Textarea } from "@mantine/core";
import { useState } from "react";

interface JobDescriptionProps {
  onJobDetailsChange: (jobDetails: any) => void;
}

function JobDescription({ onJobDetailsChange }: JobDescriptionProps) {
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");

  // Call the parent's callback whenever any input changes
  const handleInputChange = () => {
    onJobDetailsChange({
      title,
      skills,
      description,
    });
  };

  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    event.preventDefault(); // Prevent the default paste behavior
    const pastedText = event.clipboardData.getData('text');
    const cursorPosition = event.currentTarget.selectionStart || 0;
    const currentValue = event.currentTarget.value;
    const newValue = currentValue.slice(0, cursorPosition) + pastedText + currentValue.slice(cursorPosition);
    setter(newValue);
    onJobDetailsChange({
      title,
      skills,
      description,
      [event.currentTarget.name]: newValue,
    });
  };

  return (
    <div>
      <div className="">
        <h1 className="text-4xl font-bold">Enter Job Details</h1>
      </div>

      <div className="mt-12 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="w-[48%]">
            <Input.Wrapper label="Job Title" className="space-y-2">
              <Input
                name="title"
                placeholder="Enter the job title"
                value={title}
                onChange={(event) => {
                  setTitle(event.currentTarget.value);
                  handleInputChange();
                }}
                onPaste={(event) => handlePaste(event, setTitle)}
              />
            </Input.Wrapper>
          </div>
          <div className="w-[48%]">
            <Input.Wrapper label="Skills" className="space-y-2">
              <Input
                name="skills"
                placeholder="Enter the skills"
                value={skills}
                onChange={(event) => {
                  setSkills(event.currentTarget.value);
                  handleInputChange();
                }}
                onPaste={(event) => handlePaste(event, setSkills)}
              />
            </Input.Wrapper>
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center">
          <Textarea
            name="description"
            resize="vertical"
            label="Job Description"
            placeholder="Enter the job description"
            className="w-full space-y-2"
            value={description}
            onChange={(event) => {
              setDescription(event.currentTarget.value);
              handleInputChange();
            }}
            onPaste={(event) => handlePaste(event, setDescription)}
          />
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
