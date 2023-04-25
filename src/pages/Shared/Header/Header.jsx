import logo from "../../../assets/logo.png";
import moment from "moment";

export default function Header() {
  return (
    <div className="text-center my-4">
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
}
