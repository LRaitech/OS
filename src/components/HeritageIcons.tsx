import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const IconDwennimmen = ({ size = 24, ...props }: IconProps) => (
  // Ram's horns - Strength and Humility
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 18C12 18 10 12 5 12C2.5 12 2 15 4 17C6 19 9 17 9 14C9 12 7 10 5 10" />
    <path d="M12 18C12 18 14 12 19 12C21.5 12 22 15 20 17C18 19 15 17 15 14C15 12 17 10 19 10" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);

export const IconSankofa = ({ size = 24, ...props }: IconProps) => (
  // Sankofa - Learn from the past (Heart/Bird stylized)
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 21C12 21 5 14 5 9C5 5.5 7.5 3 10.5 3C11.5 3 12 4 12 4C12 4 12.5 3 13.5 3C16.5 3 19 5.5 19 9C19 14 12 21 12 21Z" />
    <path d="M12 8C12 8 10 6 8 6C6.5 6 6 7 6 8C6 9.5 8 10 10 10" />
    <path d="M12 8C12 8 14 6 16 6C17.5 6 18 7 18 8C18 9.5 16 10 14 10" />
  </svg>
);

export const IconNkyinkyim = ({ size = 24, ...props }: IconProps) => (
  // Nkyinkyim - Dynamism and Initiative
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4L9 9L4 14L9 19" />
    <path d="M15 4L20 9L15 14L20 19" />
    <path d="M9 9L15 14" />
    <path d="M4 14L15 4" opacity="0.3" />
    <path d="M9 19L20 9" opacity="0.3" />
  </svg>
);

export const IconSun = ({ size = 24, ...props }: IconProps) => (
  // Minimal Sun / Origin
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="8" strokeDasharray="2 4" />
    <path d="M12 2V4M12 20V22M2 12H4M20 12H22" />
  </svg>
);
