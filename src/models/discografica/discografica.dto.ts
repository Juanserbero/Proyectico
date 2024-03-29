import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class DiscograficaDTO extends BaseDTO {
    @IsNotEmpty()
	id!: String;

	@IsNotEmpty()
	nombre_album!: string;

	@IsNotEmpty()
	duracioFecha_Creacion!: Date;
}
