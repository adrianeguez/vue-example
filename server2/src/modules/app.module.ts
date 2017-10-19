import {Module} from '@nestjs/common';
import {AnexosController} from "./app.controllers/app.anexos.controller";
import {FormulariosController} from "./app.controllers/app.formularios.controller";

@Module({
    modules: [],
    controllers: [
        AnexosController,
        FormulariosController
    ]
})
export class ApplicationModule {
}