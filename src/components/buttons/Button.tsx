interface ButtonProps {
  title: string;
}
const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <>
      <button className="text-sm text-font-dark bg-white hover:bg-white/80 px-10 py-3 transition-all duration-300">
        {title}
      </button>
    </>
  );
};

export default Button;
