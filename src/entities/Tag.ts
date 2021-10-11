import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid } from "uuid"

@Entity("tags")
class Tag {
    // quem vai ser responsável por inserir o nosso id é o construtor
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    //Verifico se o id não está preenchido , se verdadeiro preencho com o uuid v4 
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
export { Tag };