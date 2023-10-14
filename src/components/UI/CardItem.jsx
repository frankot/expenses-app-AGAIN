import "./CardItem.css";

export default function CardItem(props) {
  const classes = "cardItem " + props.className;
  return <div className={classes}>{props.children}</div>;
}
