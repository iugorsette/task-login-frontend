import { ImageButton } from "../App.styled";
import { StyledHeader, StyledIcon } from "./Component.styled";
import signout from "../assets/sign-out.svg";
import signin from "../assets/sign-in.svg";
import postit from "../assets/postit.png";

export function Header({ isLogged }) {
  function logOut() {
    localStorage.removeItem("token");
    window.location.reload();
  }
  function logIn() {
    window.location.href = "/Login";
  }
  return (
    <StyledHeader>
      <div>
        <StyledIcon src={postit} alt="" />
      </div>
      {isLogged ? (
        <ImageButton onClick={logOut} color="red">
          <img src={signout} alt="" />{" "}
        </ImageButton>
      ) : (
        <ImageButton onClick={logIn} color="green">
          <img src={signin} alt="" />
        </ImageButton>
      )}
    </StyledHeader>
  );
}
