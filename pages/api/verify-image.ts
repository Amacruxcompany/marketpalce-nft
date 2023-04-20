import { v4 as uuidv4 } from "uuid";
import { FileReq } from "@_types/nft";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-iron-session";
import { addressCheckMiddleware, pinataApiKey, pinataSecretApiKey, withSession } from "./utils";
import FormData from "form-data";
import axios from "axios";

export default withSession(async (
  req: NextApiRequest & {session: Session}, 
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const {
      bytes,
      fileName,
      contentType
    } = req.body as FileReq;

    if (!bytes || !fileName || !contentType) {
      return res.status(422).send({message: "Image data are missing"});
    }

    await addressCheckMiddleware(req, res);

    const buffer = Buffer.from(Object.values(bytes));
    const formData = new FormData();

    formData.append(
      "file",
      buffer, {
        contentType,
        filename: fileName + "-" + uuidv4()
      }
    );
    //PINATA
      const fileRes = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      maxBodyLength: Infinity,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`,
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey
      }
    });

    //NFTSTORAGE
    // const fileRes = await axios.post("https://api.nft.storage/upload", formData, {
    //   maxBodyLength: Infinity,
    //   headers: {
    //     "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`,
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA4ZjdjMjBlQjI4MTE1RjM3MzM3ODkyMjA2M0RlN0JCODgyQ0I0MDAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MTQ4NjgxMTgyNywibmFtZSI6InRlc3QtYW1heCJ9.YuHNAOO_3Dmj16fIIJFUb8KYpvjrwsPoaSobkOhP1nw'
    //   }
    // });

    return res.status(200).send(fileRes.data);
  } else {
    return res.status(422).send({message: "Invalid endpoint"});
  }
})