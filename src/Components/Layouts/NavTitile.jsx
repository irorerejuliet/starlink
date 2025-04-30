
const NavTitile = ({children, className,}) => {
  return (
    <h2
      className={`font-bold text-[1.75rem] ${className}`}
    >
      {children}
    </h2>
  );
}

export default NavTitile
