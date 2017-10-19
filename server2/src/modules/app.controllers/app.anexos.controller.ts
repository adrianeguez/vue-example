/**
 * Created by AdrianDsktp on 10/14/2017.
 */
import {Controller, Get, Res, HttpStatus} from '@nestjs/common';

@Controller('anexos')
export class AnexosController {
    @Get()
    todos(@Res() res) {
        res.status(HttpStatus.OK).json([
            {
                nombre: "Nivel 1 - 1",
                urlImagen: 'https://envezdelpsiquiatra.files.wordpress.com/2009/05/1.png'
            },
            {
                nombre: "Nivel 1 - 2",
                urlImagen: 'https://envezdelpsiquiatra.files.wordpress.com/2009/05/1.png'
            },
            {
                nombre: "Nivel 1 - 3",
                urlImagen: 'https://envezdelpsiquiatra.files.wordpress.com/2009/05/1.png'
            },
            {
                nombre: "Nivel 1 - 4",
                urlImagen: 'https://envezdelpsiquiatra.files.wordpress.com/2009/05/1.png'
            },
            {
                nombre: "Nivel 1 - 5",
                urlImagen: 'https://envezdelpsiquiatra.files.wordpress.com/2009/05/1.png'
            },
            {
                nombre: "Nivel 1 - 6",
                urlImagen: 'https://envezdelpsiquiatra.files.wordpress.com/2009/05/1.png'
            },
            {
                nombre: "Nivel 1 - 7",
                urlImagen: 'https://envezdelpsiquiatra.files.wordpress.com/2009/05/1.png'
            },
            {
                nombre: "Nivel 1 - 8",
                urlImagen: 'https://envezdelpsiquiatra.files.wordpress.com/2009/05/1.png'
            },
            {
                nombre: "Nivel 1 - 9",
                urlImagen: 'https://envezdelpsiquiatra.files.wordpress.com/2009/05/1.png'
            },
            {
                nombre: "Nivel 1 - 10",
                urlImagen: 'https://envezdelpsiquiatra.files.wordpress.com/2009/05/1.png'
            },
            {
                nombre: "Nivel 1 - 11",
                urlImagen: 'https://envezdelpsiquiatra.files.wordpress.com/2009/05/1.png'
            }
        ]);
    }
}