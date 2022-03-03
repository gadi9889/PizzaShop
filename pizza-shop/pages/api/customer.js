import { addCustomer } from "../../lib/mongo";

export default async function handler(req, res) {
  await addCustomer(req.body);
  res.status(200).json({ message: "Added" });
}
