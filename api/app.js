import express from "express";
import cors from 'cors';
import rotaLed from "./routes/rotaLed.js";
import rotaBoia from "./routes/rotaBoia.js";
import rotaSensor from "./routes/rotaSensorDht.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.json('API no ar');
})

//rota para leitura do status
app.get('/api/status', rotaLed.lerStatus);
app.post('/api/comando', rotaLed.enviaComando);

//rota boia
app.get('/api/statusBoia', rotaBoia.lerStatusBoia);

app.get('/api/sensorDht', rotaSensor.lerDadosSensor);

const porta = 3000;
app.listen(porta, () =>{
    console.log(`Servidor iniciado http://localhost:${porta}`);
})