import React from "react";

interface EmptyPageProps {
  title: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default EmptyPage;
