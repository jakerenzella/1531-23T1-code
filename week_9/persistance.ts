const fs = require("fs");

type Car = {
  name: string;
  model: string[];
};

type User = {
  name: string;
  age: number;
  cars: Car[];
};

function init_database() {
  // create the datastore.json file in the current directory
  // if it doesn't exist
  let data = fs.readFileSync("datastore.json");
  // if data is empty, or this is an error, then create the file
  if (data.length == 0 || data == undefined) {
    fs.writeFile("datastore.json", "", function (err: any) {
      if (err) throw err;
      console.log("Saved!");
    });
  }
}

function get_data() {
  // read the datastore.json file
  // return the first user
  let data = fs.readFileSync("datastore.json");
  return JSON.parse(data)["data"];
}

function add_user(user: User) {
  let users = get_data();
  users.push(user);
  save_data(users);
}

function save_data(data: User[]) {
  fs.writeFileSync("datastore.json", JSON.stringify({ data: data }));
}

init_database();

add_user({
  name: "FakeOlive",
  age: 24,
  cars: [{ name: "Mazda", model: ["323"] }],
});
