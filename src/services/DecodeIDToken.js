import JwtDecode from "jwt-decode";

const DecodeIDToken = () => {
  if (!localStorage.getItem("token")) {
    return null;
  }

  try {
    const decoded = JwtDecode(localStorage.getItem("token"));
    const now = new Date().getTime() / 1000;

    if (now > decoded.exp) {
      localStorage.removeItem("token");
      return null;
    }

    return decoded;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data);
    }

    throw new Error(err.message);
  }
};

export default DecodeIDToken;
