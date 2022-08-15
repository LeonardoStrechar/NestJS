import { Controller, Post } from '@nestjs/common';

@Controller('jogadores')
export class JogadoresController {
    @Post()
    async criar (){
        return JSON.stringify({
            "nome": "leonardo"
        })
    }
}
