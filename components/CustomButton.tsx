'use client';
import Image from 'next/image';

export interface CustomButtonProps {
  title: string;
  btnType?: 'button' | 'submit';
  containerStyles: string;
  handleClick?: () => void;
}

export function CustomButton({ title, btnType, containerStyles, handleClick }: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType ?? 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}