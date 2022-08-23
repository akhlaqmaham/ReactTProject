const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}
));

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
})
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "maham123",
  database: "LoginSystem",
});

db.connect(function (err) {
  if (err) throw err;
  app.get('/register', (req, res) => {
    db.query(
      "SELECT * FROM signup",
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "no users find" });
        }
      }

    );
  })
})

app.get('/dispatch', (req, res) => {
  db.query(
    "SELECT * FROM dispatchdata",
    (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log(err)
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "no data found" });
      }
    }
  )
})

app.get('/product', (req, res) => {
  db.query(
    "SELECT * FROM product",
    (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log(err)
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "no data found" });
      }
    }
  )
})

app.get('/performance', (req, res) => {
  db.query(
    "SELECT * FROM performance",
    (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log(err)
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "no data found" });
      }
    }
  )
})

app.get('/customerdash', (req, res) => {
  db.query(
    "SELECT * FROM customer",
    (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log(err)
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "no data found" });
      }
    }
  )
});

app.get('/transporter', (req, res) => {
  db.query(
    "SELECT * FROM transporter",
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "no data found" });
      }
    }
  )
});


app.post('/register', (req, res) => {

  const username = req.body.username;
  console.log(username);
  const password = req.body.password;
  console.log(password);

  db.query(
    "INSERT INTO signup (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.get("/signup", (req, res) => {
    db.query("SELECT * FROM signup", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});


app.put("/update", (req, res) => {
  const id = req.body.s_id;
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "UPDATE signup SET username = ? , password= ? WHERE s_id = ?",
    [username, password, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


app.delete("/delete/:s_id", (req, res) => {
  const id = req.params.s_id;
  db.query("DELETE FROM signup WHERE s_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.post('/guard', (req, res) => {

  const drivername = req.body.drivername;
  console.log(drivername);
  const cnic = req.body.cnic;
  console.log(cnic);
  const phoneno = req.body.phoneno;
  console.log(phoneno);
  const vehicleno = req.body.vehicleno;
  console.log(vehicleno);
  const no_of_persons = req.body.no_of_persons;
  console.log(no_of_persons);
  const transporter_type = req.body.transporter_type;
  console.log(transporter_type);
  const company_code = req.body.company_code;
  console.log(company_code);
  const created_by = req.body.created_by;
  console.log(created_by);


  db.query(
    "INSERT INTO guard (drivername, cnic, phoneno, vehicleno, no_of_persons, transporter_type, company_code, created_by) VALUES (?,?,?,?,?,?,?,?)",
    [drivername, cnic, phoneno, vehicleno, no_of_persons, transporter_type, company_code, created_by],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post('/customer', (req, res) => {

  const customername = req.body.customername;
  console.log(customername);
  const email = req.body.email;
  console.log(email);
  const delivered_on_time = req.body.delivered_on_time;
  console.log(delivered_on_time);
  const quantity_per_req = req.body.quantity_per_req;
  console.log(quantity_per_req);
  const suggestion = req.body.suggestion;
  console.log(suggestion);


  db.query(
    "INSERT INTO customer (customername, email, delivered_on_time, quantity_per_req,  suggestion) VALUES (?,?,?,?,?)",
    [customername, email, delivered_on_time, quantity_per_req, suggestion],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post('/login', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM signup WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password!" });
      }
    }

  );
});


app.listen(3001, () => {
  console.log("running server");
});


