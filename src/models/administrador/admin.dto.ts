import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class AdminTDO extends BaseDTO {
    @IsNotEmpty()
    usuario!: string;
	
    @IsNotEmpty()
    estado!: string;
}
