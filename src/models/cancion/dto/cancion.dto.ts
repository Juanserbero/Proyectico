import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";

export class CancionDTO extends BaseDTO {
    @IsNotEmpty()

    id!: String;

    @IsNotEmpty() 
    nombre_album!: string;

    @IsNotEmpty()
    duracion!: String;

    @IsNotEmpty()
    genero!: String;

    @IsNotEmpty()
    tono!: String;

    @IsNotEmpty()
    letra!: String;

    @IsNotEmpty()
    descripcion!: String;

    @IsNotEmpty()
    durAlbum_idacion!: String;
}
