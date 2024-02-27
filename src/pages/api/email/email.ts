import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const details = JSON.parse(req.body);

    const formBody = [];
    let newFormBody = "";
    for (const property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    newFormBody = formBody.join("&");

    const url = process.env.NEXT_PUBLIC_FORM_RESPONSE_URL;
    const response = await fetch(url as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: newFormBody
    });

    res.status(response.status).send({});
  }
}
