"use client";

import { useEffect, useState } from "react";

/** Prints the build year, then the visitor's current year once hydrated. */
export function Year({ initial }: { initial: number }) {
  const [year, setYear] = useState(initial);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
