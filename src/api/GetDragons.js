const GetDragons = async () => {
  // Get presigned URL
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}dragons`, {
      method: "GET",
    });

    const content = await response.json();
    return content.Items;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data);
    }

    throw new Error(err.message);
  }
};

export default GetDragons;
