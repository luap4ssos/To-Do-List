export default function Botao({ onClick, children, className, ...rest }) {
  const classes = ["botao", className].filter(Boolean).join(" ");

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
