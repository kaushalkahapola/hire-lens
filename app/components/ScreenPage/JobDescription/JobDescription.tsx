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
                placeholder="Enter the job title"
                value={title}
                onChange={(event) => {
                  setTitle(event.currentTarget.value);
                  handleInputChange();
                }}
              />
            </Input.Wrapper>
          </div>
          <div className="w-[48%]">
            <Input.Wrapper label="Skills" className="space-y-2">
              <Input
                placeholder="Enter the skills"
                value={skills}
                onChange={(event) => {
                  setSkills(event.currentTarget.value);
                  handleInputChange();
                }}
              />
            </Input.Wrapper>
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center">
          <Textarea
            resize="vertical"
            label="Job Description"
            placeholder="Enter the job description"
            className="w-full space-y-2"
            value={description}
            onChange={(event) => {
              setDescription(event.currentTarget.value);
              handleInputChange();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
