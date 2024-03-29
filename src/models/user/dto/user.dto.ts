import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";

export class Artista_UserDTO extends BaseDTO {
    @IsNotEmpty()
    id_artista_user!: String;

    @IsNotEmpty()
    nombre_Artista_User!: string;

    @IsNotEmpty()
    password!: string;
}