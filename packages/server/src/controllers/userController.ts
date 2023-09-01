import { Request, Response } from 'express';

class UserController {
  async getAllUsers(req: Request, res: Response){
    try {
      res.status(200).json({ message: 'Lista de usuários' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  }
}

export default UserController
