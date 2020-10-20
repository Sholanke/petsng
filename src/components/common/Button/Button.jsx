import React from "react";

export default function Button({ children, className }) {
  return <button className={`button-default ${className}`}>{children}</button>;
}
