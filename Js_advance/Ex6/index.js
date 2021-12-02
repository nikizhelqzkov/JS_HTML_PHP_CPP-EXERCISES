const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());


let id = 0;
const events = {};
const bookSpot = {};


app.post("/event", (req, res) => {
    const data = req.body;
    console.log(data);
    const {name,capacity} = data;
  if(!name || name===''){
      return res.status(400).send("Empty name");
  }
  if(!capacity || capacity<=0){
      return res.status(400).send("Cappacity must be positive");
  }
  ++id;
  events[id] = { ...data };
  res.json({ id, ...data });
});

app.get("/event/:id", (req, res) => {
  const { id } = req.params;
  res.json(events[id]);
});
app.post("/event/:id/book-spot", (req, res) => {
  const data = req.body;
  const { id } = req.params;
  try {
    if (!events[id]) {
      throw new Error("Not valid id");
    }
    
    if (bookSpot[id] &&  events[id].capacity <= bookSpot[id].length) {
      throw new Error("Not enough places!");
    }
  } catch (e) {
    return res.status(400).send(e.message);
  }
  bookSpot[id] = bookSpot[id] ? [...bookSpot[id], { ...data }] : [{ ...data }];
  res.json({ freeSpaces: events[id].capacity - bookSpot[id].length });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
