const SetToken = () => {
  const result = {};
  window.location.hash
    .substring(1)
    .split("&")
    .forEach((item) => {
      result[item.split("=")[0]] = decodeURIComponent(item.split("=")[1]);
    });

  if (result.id_token !== undefined) {
    localStorage.setItem("token", result.id_token);
    // eslint-disable-next-line no-restricted-globals
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
};

export default SetToken;
