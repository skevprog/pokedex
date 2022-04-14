export interface TitleProps {
  text: string;
  className?: string,
}

function Title({ text, className = '' }: TitleProps): JSX.Element {
  return (
    <h1 className={className}>{text}</h1>
  );
}

export default Title;
