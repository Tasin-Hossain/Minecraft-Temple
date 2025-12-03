import '../ShinyText/ShinyText.css';
const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;
  const color = '';

  return (
    <div className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} style={{ animationDuration , color}}>
      {text}
    </div>
  );
};

export default ShinyText;