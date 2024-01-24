import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      // Process a POST request


      
      const details = JSON.parse(req.body)
      
      const formBody = [];
      let newFormBody = ""
      for (const property in details) {
          const encodedKey = encodeURIComponent(property);
          const encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        newFormBody = formBody.join("&");
        
        console.log(details)
        console.log(newFormBody)
        
        const response = await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSdom5UoasUsG7u_lMByRvLR6-VSHmiIVLksgkpmgdaAPdRcPA/formResponse' , {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: newFormBody
        })

      console.log(response );
      res.status(response.status);
  }


  // https://docs.google.com/forms/u/0/d/e/1FAIpQLSdom5UoasUsG7u_lMByRvLR6-VSHmiIVLksgkpmgdaAPdRcPA/formResponse