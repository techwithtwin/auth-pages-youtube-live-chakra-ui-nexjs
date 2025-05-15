"use client";
import { IconButton } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

interface Props {
  open: boolean;
  onToggle: Dispatch<SetStateAction<boolean>>;
}

const ShowPasswordIcon = ({ open, onToggle }: Props) => {
  const handleClick = () => {
    onToggle((prev) => !prev);
  };
  return (
    <IconButton onClick={handleClick} variant="plain">
      {open ? <IoEye /> : <IoEyeOffSharp />}
    </IconButton>
  );
};

export default ShowPasswordIcon;
