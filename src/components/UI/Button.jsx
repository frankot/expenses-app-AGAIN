import "./Button.css";

export default function Button(props) {
  const classes = "butt " + props.className;
  return <button className={classes}>{props.children}</button>;
}
