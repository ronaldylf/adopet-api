import PetEntity from "../../entities/PetEntity";

export default interface InterfacePetRepository {
    criaPet(pet: PetEntity): void;
    listaPet(): Array<PetEntity> | Promise<PetEntity[]>;

    atualizaPet(
        id: number, 
        newData: PetEntity
    ): Promise<{ success: boolean; message?: string }>;

    deletaPet(id:number, pet: PetEntity): void;
}