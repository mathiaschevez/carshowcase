'use client';
import Image from 'next/image';

export interface CustomButtonProps {
  title: string;
  btnType?: 'button' | 'submit';
  containerStyles: string;
  textStyles?: string;
  rightIcon?: string; 
  handleClick?: () => void;
  isDisabled?: boolean;
}

export function CustomButton({ title, btnType, containerStyles, textStyles, rightIcon, isDisabled, handleClick }: CustomButtonProps) {
  return (
    <button
      disabled={isDisabled}
      type={btnType ?? 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image src={rightIcon} alt='right icon' fill className='object-contain' />
        </div>
      )}
    </button>
  )
}