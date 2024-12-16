import React from 'react';

export default function SeedOfLife() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      {/* Center circle */}
      <circle cx="50" cy="50" r="20" />
      
      {/* Surrounding circles */}
      <circle cx="50" cy="30" r="20" />
      <circle cx="67.32" cy="40" r="20" />
      <circle cx="67.32" cy="60" r="20" />
      <circle cx="50" cy="70" r="20" />
      <circle cx="32.68" cy="60" r="20" />
      <circle cx="32.68" cy="40" r="20" />
    </svg>
  );
}