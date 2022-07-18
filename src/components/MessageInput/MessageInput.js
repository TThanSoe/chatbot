import SendSvg from "../../assets/send.svg";
import Button from "../Button/Button";
import "./MessageInput.css";

const MessageInput = ({ ...otherProps }) => {
  return (
    <form className="form-container">
      <input className="form-input" {...otherProps} />

      <Button className="form-button" type="submit">
        <img src={SendSvg} alt="send icon" />
      </Button>
    </form>
  );
};

export default MessageInput;
