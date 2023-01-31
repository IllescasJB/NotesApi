import { Model, Table, Column, DataType, AutoIncrement, PrimaryKey} from "sequelize-typescript";
import { User } from "../../api/entities/User";

type UserBD = {
    id: number;
    name: string;
    email: string;
}

@Table({
    timestamps: false,
    tableName: "users"
})
export class UserModel extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column({type: DataType.INTEGER})
    id!: number;

    @Column({type: DataType.STRING})
    name!: string;

    @Column({type: DataType.STRING})
    email!: string;

    public static fromEntity(user: User): UserBD {
        return {
            id: user.id,
            name: user.name,
            email: user.email
        };
    }

    public toEntity(): User {
        return {
            id: this.id,
            name: this.name,
            email: this.email
        }
    }
}