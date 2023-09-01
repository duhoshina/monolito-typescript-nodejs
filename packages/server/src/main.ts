import 'dotenv/config';
import app from './server';
import { openDatabase } from './configDatabase';

async function main(): Promise<void> {

    app.listen(3000, () => {
        console.log('servidor iniciado')
    })
    
    /* app.listen(process.env.PORT, () => {
        console.log(`Servidor iniciado em http://${process.env.URL}:${process.env.PORT}`)
    });

    openDatabase(); // Estabelece conexão com o banco de dados SQLite3 */
};

// iniate app
main();