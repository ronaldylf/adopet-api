import PetEntity from "../../entities/PetEntity";
import EnumPorte from "../../enum/EnumPorte";

export default interface InterfacePetRepository {
    criaPet(pet: PetEntity): void;
    listaPet(): Array<PetEntity> | Promise<PetEntity[]>;

    atualizaPet(
        id: number, 
        newData: PetEntity
    ): Promise<{ success: boolean; message?: string }>;

    deletaPet(id:number, pet: PetEntity): void;

    adotaPet(
        idPet: number,
        idAdotante: number
    ): Promise<{ success: boolean; message?: string }>;

    buscaPetPorCampoGenerico<Tipo extends keyof PetEntity>(
        campo: Tipo, 
        valor:PetEntity[Tipo]
    ): Promise<PetEntity[]> | PetEntity[];
}