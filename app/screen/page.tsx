"use client";

import { useState } from "react";
import { FileWithPath } from "@mantine/dropzone";
import { DropzoneButton } from "../components/ScreenPage/DropZone/DropzoneButton";
import JobDescription from "../components/ScreenPage/JobDescription/JobDescription";
import { CVResults } from "../components/ScreenPage/CVResuts/CVResults";
import { Button, LoadingOverlay } from "@mantine/core";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ScreenPage() {
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPath[]>([]);
  const [jobDetails, setJobDetails] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{ [key: string]: number } | null>(null);

  // Function to update files when dropped/uploaded
  const handleFilesChange = (files: FileWithPath[]) => {
    setUploadedFiles(files);
    console.log("Files ready for upload:", files);
  };

  // Function to update job details when inputs change
  const handleJobDetailsChange = (details: any) => {
    setJobDetails(details);
    console.log("Job Details updated:", details);
  };

  // Updated handleSubmit function
  const handleSubmit = async () => {
    setIsLoading(true);
    setResults(null);
    const formData = new FormData();

    // Add files to formData
    uploadedFiles.forEach((file) => {
      formData.append("files", file); // Assuming you accept multiple files
    });

    // Append job details
    formData.append("title", jobDetails.title);
    formData.append("skills", jobDetails.skills);
    formData.append("description", jobDetails.description);

    // Make the API call
    try {
      const response = await fetch("/api/screen", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Form submitted with files and job details:", result);
      setResults(result.similarity_scores);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-32 space-y-10 relative">
      <LoadingOverlay visible={isLoading} overlayProps={{ blur: 2 }} />
      {/* Job description form */}
      <JobDescription onJobDetailsChange={handleJobDetailsChange} />

      {/* Dropzone for file uploads */}
      <DropzoneButton onFilesChange={handleFilesChange} />

      {/* Submit button */}
      <Button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </Button>
      {results && <CVResults data={results} />}
    </div>
  );
}
