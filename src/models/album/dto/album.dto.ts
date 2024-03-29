import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";

export class AlbumDTO extends BaseDTO {

    @IsNotEmpty()
    id!: String;

    @IsNotEmpty()
    nombre_album!: string;

    @IsNotEmpty()
    duracion!: String;

    @IsNotEmpty()
    Fecha_Lanzamiento!: Date;

    @IsNotEmpty()
    Cantidad_de_Canciones!: number;

    @IsNotEmpty()
    Tipo!: String;

    @IsNotEmpty()
    descripcion!: String;

    @IsNotEmpty()
    artista_id!: string;

    @IsNotEmpty()
    Discografica_id!: string;
}
