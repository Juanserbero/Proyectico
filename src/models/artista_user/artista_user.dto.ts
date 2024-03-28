import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class Artista_UserDTO extends BaseDTO {
    @IsNotEmpty()
    usuario!: string;
	
    @IsNotEmpty()
    estado!: string;
}
