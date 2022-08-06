import { Fragment } from "react";
import classes from "./MeetUpDetail.module.css";

function MeetUpDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title}></img>
      <h1>{props.address}</h1>
      <h1>{props.title}</h1>
    </section>
  );
}



export default MeetUpDetail;
