//Getting with fetch in JSON the data from the data.json
const loadData = async (data) => {
  return (await fetch(data)).json();
};

const print = async (data) => {
  let response = [];
  try {
    response = await loadData(data);
  } catch (error) {
    console.log("Error", error);
  }
  response.forEach((res) =>
    document.write(`Html: ${res.data}, number: ${res.number}<br/>` + "")
  );
};
print("./data/data.json");
