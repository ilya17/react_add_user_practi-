import React from "react";
import { Button } from "../../UI/Button/Button";
import { Card } from "../../UI/Card/Card";
import { User, UserListProps } from "./interfaces";
import { UserListStyled } from "./styled";

export const UserList = ({ users, onRemoveUser }: UserListProps) => {

    const removeUserHandler = (id: number) => {
        onRemoveUser?.(id)
    }

    return (
        <>
            {users.map(({ name, age, id }: User) =>
                <Card key={id}>
                    <UserListStyled>
                        <span>Имя пользователя: {name}</span>
                        <span>Возраст: {age}</span>
                        <Button onClick={() => removeUserHandler(id)} name="x" />
                    </UserListStyled>
                </Card>
            )}
        </>
    )
}