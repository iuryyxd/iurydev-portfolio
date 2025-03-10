"use client";

import { useState } from "react";

export function useToggle() {
  const [isActive, setIsActive] = useState(false);

  function toggleState(value: boolean) {
    setIsActive(value);
  }

  return { isActive, toggleState };
}
