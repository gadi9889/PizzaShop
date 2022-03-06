import { addCustomer, findCustomer, deleteCustomer } from "../../lib/mongo";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.post(async (req, res) => {
  await addCustomer(req.body);
  res.status(200).json({ message: "Added" });
});

handler.get(async (req, res) => {
  res.json(await findCustomer(req.body));
});

handler.delete(async (req, res) => {
  let result = await deleteCustomer(req.body.tel);
  res.json(result);
});

export default handler;
