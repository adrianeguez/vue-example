/**
 * Created by AdrianDsktp on 10/14/2017.
 */
import {Controller, Get, Res, HttpStatus} from '@nestjs/common';

@Controller('formulario')
export class FormulariosController {
    @Get()
    todos(@Res() res) {
        res.status(HttpStatus.OK).json([
            {
                nombre: "Nivel 1 - 1",
                items: [
                    {
                        nombre: 'Nivel 1:2 - 1',
                        items: [
                            {
                                nombre: 'Nivel 1:3 - 1'
                            },
                            {
                                nombre: 'Nivel 1:3 - 2',
                                items: [
                                    {
                                        nombre: 'Nivel 1:4 - 1'
                                    },
                                    {
                                        nombre: 'Nivel 1:4 - 2'
                                    },
                                    {
                                        nombre: 'Nivel 1:4 - 3'
                                    },
                                    {
                                        nombre: 'Nivel 1:4 - 4'
                                    },
                                    {
                                        nombre: 'Nivel 1:4 - 5'
                                    }
                                ]
                            },
                            {
                                nombre: 'Nivel 1:3 - 3'
                            },
                            {
                                nombre: 'Nivel 1:3 - 4'
                            },
                            {
                                nombre: 'Nivel 1:3 - 5'
                            }
                        ]
                    },
                    {
                        nombre: 'Nivel 1:2 - 2'
                    },
                    {
                        nombre: 'Nivel 1:2 - 3'
                    },
                    {
                        nombre: 'Nivel 1:2 - 4'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 2",
                items: [
                    {
                        nombre: 'Nivel 2:2 - 1'
                    },
                    {
                        nombre: 'Nivel 2:2 - 2'
                    },
                    {
                        nombre: 'Nivel 2:2 - 3'
                    },
                    {
                        nombre: 'Nivel 2:2 - 4'
                    },
                    {
                        nombre: 'Nivel 2:2 - 5'
                    },
                    {
                        nombre: 'Nivel 2:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 3",
                items: [
                    {
                        nombre: 'Nivel 3:2 - 1'
                    },
                    {
                        nombre: 'Nivel 3:2 - 2'
                    },
                    {
                        nombre: 'Nivel 3:2 - 3'
                    },
                    {
                        nombre: 'Nivel 3:2 - 4'
                    },
                    {
                        nombre: 'Nivel 3:2 - 5'
                    },
                    {
                        nombre: 'Nivel 3:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 4",
                items: [
                    {
                        nombre: 'Nivel 4:2 - 1'
                    },
                    {
                        nombre: 'Nivel 4:2 - 2'
                    },
                    {
                        nombre: 'Nivel 4:2 - 3'
                    },
                    {
                        nombre: 'Nivel 4:2 - 4'
                    },
                    {
                        nombre: 'Nivel 4:2 - 5'
                    },
                    {
                        nombre: 'Nivel 4:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 5",
                items: [
                    {
                        nombre: 'Nivel 5:2 - 1'
                    },
                    {
                        nombre: 'Nivel 5:2 - 2'
                    },
                    {
                        nombre: 'Nivel 5:2 - 3'
                    },
                    {
                        nombre: 'Nivel 5:2 - 4'
                    },
                    {
                        nombre: 'Nivel 5:2 - 5'
                    },
                    {
                        nombre: 'Nivel 5:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 6",
                items: [
                    {
                        nombre: 'Nivel 6:2 - 1'
                    },
                    {
                        nombre: 'Nivel 6:2 - 2'
                    },
                    {
                        nombre: 'Nivel 6:2 - 3'
                    },
                    {
                        nombre: 'Nivel 6:2 - 4'
                    },
                    {
                        nombre: 'Nivel 6:2 - 5'
                    },
                    {
                        nombre: 'Nivel 6:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 7",
                items: [
                    {
                        nombre: 'Nivel 7:2 - 1',
                        items: [
                            {
                                nombre: 'Nivel 7:3 - 1'
                            },
                            {
                                nombre: 'Nivel 7:3 - 2'
                            },
                            {
                                nombre: 'Nivel 7:3 - 3'
                            },
                            {
                                nombre: 'Nivel 7:3 - 4'
                            },
                            {
                                nombre: 'Nivel 7:3 - 5'
                            }
                        ]
                    },
                    {
                        nombre: 'Nivel 7:2 - 2'
                    },
                    {
                        nombre: 'Nivel 7:2 - 3'
                    },
                    {
                        nombre: 'Nivel 7:2 - 4'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 8",
                items: [
                    {
                        nombre: 'Nivel 8:2 - 1'
                    },
                    {
                        nombre: 'Nivel 8:2 - 2'
                    },
                    {
                        nombre: 'Nivel 8:2 - 3'
                    },
                    {
                        nombre: 'Nivel 8:2 - 4'
                    },
                    {
                        nombre: 'Nivel 8:2 - 5'
                    },
                    {
                        nombre: 'Nivel 8:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 9",
                items: [
                    {
                        nombre: 'Nivel 9:2 - 1'
                    },
                    {
                        nombre: 'Nivel 9:2 - 2'
                    },
                    {
                        nombre: 'Nivel 9:2 - 3'
                    },
                    {
                        nombre: 'Nivel 9:2 - 4'
                    },
                    {
                        nombre: 'Nivel 9:2 - 5'
                    },
                    {
                        nombre: 'Nivel 9:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 10",
                items: [
                    {
                        nombre: 'Nivel 10:2 - 1'
                    },
                    {
                        nombre: 'Nivel 10:2 - 2'
                    },
                    {
                        nombre: 'Nivel 10:2 - 3'
                    },
                    {
                        nombre: 'Nivel 10:2 - 4'
                    },
                    {
                        nombre: 'Nivel 10:2 - 5'
                    },
                    {
                        nombre: 'Nivel 10:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 11",
                items: [
                    {
                        nombre: 'Nivel 11:2 - 1'
                    },
                    {
                        nombre: 'Nivel 11:2 - 2'
                    },
                    {
                        nombre: 'Nivel 11:2 - 3'
                    },
                    {
                        nombre: 'Nivel 11:2 - 4'
                    },
                    {
                        nombre: 'Nivel 11:2 - 5'
                    },
                    {
                        nombre: 'Nivel 11:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 12",
                items: [
                    {
                        nombre: 'Nivel 12:2 - 1'
                    },
                    {
                        nombre: 'Nivel 12:2 - 2'
                    },
                    {
                        nombre: 'Nivel 12:2 - 3'
                    },
                    {
                        nombre: 'Nivel 12:2 - 4'
                    },
                    {
                        nombre: 'Nivel 12:2 - 5'
                    },
                    {
                        nombre: 'Nivel 12:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 13",
                items: [
                    {
                        nombre: 'Nivel 13:2 - 1'
                    },
                    {
                        nombre: 'Nivel 13:2 - 2'
                    },
                    {
                        nombre: 'Nivel 13:2 - 3'
                    },
                    {
                        nombre: 'Nivel 13:2 - 4'
                    },
                    {
                        nombre: 'Nivel 13:2 - 5'
                    },
                    {
                        nombre: 'Nivel 13:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 14",
                items: [
                    {
                        nombre: 'Nivel 14:2 - 1'
                    },
                    {
                        nombre: 'Nivel 14:2 - 2'
                    },
                    {
                        nombre: 'Nivel 14:2 - 3'
                    },
                    {
                        nombre: 'Nivel 14:2 - 4'
                    },
                    {
                        nombre: 'Nivel 14:2 - 5'
                    },
                    {
                        nombre: 'Nivel 14:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 15",
                items: [
                    {
                        nombre: 'Nivel 15:2 - 1'
                    },
                    {
                        nombre: 'Nivel 15:2 - 2'
                    },
                    {
                        nombre: 'Nivel 15:2 - 3'
                    },
                    {
                        nombre: 'Nivel 15:2 - 4'
                    },
                    {
                        nombre: 'Nivel 15:2 - 5'
                    },
                    {
                        nombre: 'Nivel 15:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 16",
                items: [
                    {
                        nombre: 'Nivel 16:2 - 1'
                    },
                    {
                        nombre: 'Nivel 16:2 - 2'
                    },
                    {
                        nombre: 'Nivel 16:2 - 3'
                    },
                    {
                        nombre: 'Nivel 16:2 - 4'
                    },
                    {
                        nombre: 'Nivel 16:2 - 5'
                    },
                    {
                        nombre: 'Nivel 16:2 - 6'
                    }
                ]
            },
            {
                nombre: "Nivel 1 - 17",
                items: [
                    {
                        nombre: 'Nivel 17:2 - 1'
                    },
                    {
                        nombre: 'Nivel 17:2 - 2'
                    },
                    {
                        nombre: 'Nivel 17:2 - 3'
                    },
                    {
                        nombre: 'Nivel 17:2 - 4'
                    },
                    {
                        nombre: 'Nivel 17:2 - 5'
                    },
                    {
                        nombre: 'Nivel 17:2 - 6'
                    }
                ]
            }
        ]);
    }
}