import React from 'react';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

type CustomButtonProps = AnchorProps | ButtonProps;

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  if (props.as === 'a') {
    const { as, href, children, className, style, ...rest } = props;
    return (
      <a href={href} className={className} style={style} {...rest}>
        {children}
      </a>
    );
  }
  const { as, children, className, style, ...rest } = props as ButtonProps;
  return (
    <button className={className} style={style} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton; 