import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";

export class AdminTDO extends BaseDTO {
    @IsNotEmpty()
	id!: String;
    
    @IsNotEmpty()
	nombre_Admin!: string;

    @IsNotEmpty()
	password!: string;

}
