/* eslint-disable react/require-default-props */
interface LoaderProps {
  customContainerStyles?: string;
  customTextStyles: string;
  customLoaderContent: string;
}

function Loader({ customContainerStyles = '', customTextStyles = '', customLoaderContent }: LoaderProps): JSX.Element {
  return (
    <div className={customContainerStyles}>
      <span className={customTextStyles}>{customLoaderContent}</span>
    </div>
  );
}

export default Loader;
