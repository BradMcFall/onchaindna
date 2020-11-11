

import express from 'express';
import { rootHandler, helloHandler } from './handlers';
import { RpcService } from "./RpcService";
import { Wallet } from "./Wallet";

const app = express();
const port = process.env.PORT || '8000';
app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);

const blockchainIp = '127.0.0.1';
const RPC = RpcService.create({avalancheNodeUrl:blockchainIp,jsonRPCVersion:"2.0"});

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.listen(port, () => {
  
  console.log(`Server is listening at ${port}`);
});
