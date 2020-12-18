const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findByUserId,
  insert,
  update,
  remove,
};

function find() {
  return db("plants");
}

function findById(id) {
  return db("plants").where({ id }).first();
}
function findByUserId(user_id) {
  return db("plants").where({ user_id });
}
async function insert(plant) {
  const [newPlant] = await db("plants").insert(plant, "*");
  console.log(newPlant.user_id);
  return findByUserId(newPlant.user_id);
}
async function update(id, plant) {
  const [updated] = await db("plants").where({ id }).update(plant, "*");
  return findByUserId(updated.user_id);
}
function remove(id) {
  return db("plants").where({ id }).del();
}
