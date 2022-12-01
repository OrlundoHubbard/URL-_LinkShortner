const formSubmit = document.getElementById("linkForm");

const getShortenLink = (link) => {
  const shortenLink = document.getElementById("shortenLink");
  shortenLink.innerHTML = link;
};

const sendData = () => {
  const url = document.getElementById("linkInput").value;
  const TOKEN = process.env.linkTOKEN;
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
};
