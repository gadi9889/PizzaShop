import { orderDetails } from "../../lib/mongo";

export default async function handler(req, res) {
  let result = await orderDetails(req.body.tel);
  if (result == null) {
    res.status(404).send();
  } else {
    res.status(200).json(result);
  }
}
