import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class CancionDTO extends BaseDTO {
    @IsNotEmpty()
    usuario!: string;
	
    @IsNotEmpty()
    estado!: string;
}
