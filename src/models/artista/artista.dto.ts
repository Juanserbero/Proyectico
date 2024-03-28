import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class ArtistaDTO extends BaseDTO {
    @IsNotEmpty()
    usuario!: string;
	
    @IsNotEmpty()
    estado!: string;
}
