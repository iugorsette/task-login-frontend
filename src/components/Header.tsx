import { ImageButton } from "../App.styled";
import { StyledHeader } from "./Component.styled";
import signout from "../assets/sign-out.svg";
import signin from "../assets/sign-in.svg";

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
      <h1>Post-it</h1>
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
