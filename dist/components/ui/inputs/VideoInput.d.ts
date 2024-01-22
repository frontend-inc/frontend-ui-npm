import React from "react";
type VideoInputProps = {
  name: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBrowse: (name: string) => void;
  placeholder?: string;
  errors?: string;
};
declare const VideoInput: React.FC<VideoInputProps>;
export default VideoInput;
