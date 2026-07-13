function Button({
  children,
  onClick,
  href,
  type = "button",
}) {
  const classes =
    "px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold shadow-lg hover:scale-105";

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;