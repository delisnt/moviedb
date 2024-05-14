import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import ImgCarousel from "../components/ImgCarousel";
import { useEffect, useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUser((prevUser) => ({
          ...prevUser,
          username: username,
          password: password,
        }));
        console.log(user);
        setUsername("");
        setPassword("");
      }}
    >
      <MDBContainer fluid className="mt-5">
        <MDBRow>
          <MDBCol sm="6">
            <div className="d-flex flex-row ps-5 pt-5 mt-5">
              <MDBIcon
                fas
                icon="crow fa-3x me-3"
                style={{ color: "#709085" }}
              />
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3
                className="fw-normal mb-3 ps-5 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Log in
              </h3>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-white"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                className="text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBBtn
                className="mb-4 px-5 mx-5 w-100"
                color="info"
                size="lg"
                disabled={!password}
              >
                Login
              </MDBBtn>
              <p className="small mb-5 pb-lg-3 ms-5">
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </p>
              <p className="ms-5">
                Dont have an account?
                <a href="#!" className="link-info">
                  Register here
                </a>
              </p>
            </div>
          </MDBCol>

          <MDBCol sm="6" className="d-none d-sm-block px-0">
            <ImgCarousel />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
}

export default Login;
