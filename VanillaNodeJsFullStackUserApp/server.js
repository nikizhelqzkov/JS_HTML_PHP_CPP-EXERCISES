const http = require("http");
const mysql = require("mysql");
const url = require("url");
const bcrypt = require("bcrypt");

const hostname = "127.0.0.1";
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "userdb",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err.stack);
    return;
  }
  console.log("Connected to database.");
});

const getRequestData = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      resolve(body);
    });
    req.on("error", (err) => {
      reject(err);
    });
  });
};

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  if (req.method === "POST" && pathname === "/users") {
    let requestBody;
    try {
      requestBody = await getRequestData(req);
      const { username, email, password } = JSON.parse(requestBody);

      if (!username || !email || !password) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Missing required fields" }));
        return;
      }

      if (!validateEmail(email)) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Invalid email" }));
        return;
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = { username, email, password: hashedPassword };
      const query = "INSERT INTO users SET ?";

      db.query(query, user, (err, result) => {
        if (err) {
          console.error("Error inserting user: ", err.stack);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Database error" }));
          return;
        }

        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            id: result.insertId,
            username,
            email,
          })
        );
      });
    } catch (err) {
      console.error("Error parsing request: ", err.stack);
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Invalid JSON" }));
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
