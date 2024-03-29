import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";

export class ArtistaDTO extends BaseDTO {
    @IsNotEmpty()
	id_artista!: String;

	@IsNotEmpty()
	nombre_artista!: string;

	@IsNotEmpty()
	fecha_Inicio!: Date;

	@IsNotEmpty()
	pais!: String;

	@IsNotEmpty()
	genero!: String;

	@IsNotEmpty()
	biografia!: String;
}
