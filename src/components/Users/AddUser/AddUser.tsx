import React, { useState } from "react";
import { Button } from "../../UI/Button/Button";
import { Card } from "../../UI/Card/Card";
import { Input } from "../../UI/Input/Input";
import { User } from "../UserList/interfaces";
import { AddUserProps } from "./interfaces";

export const AddUser = ({ onAddUser }: AddUserProps) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const newUser: User = {
            name: userName,
            age: age,
            id: Math.floor(Math.random() * 10) + 1
        }
        onAddUser?.(newUser)
        setUserName('');
        setAge('');
    }

    const disableButtonHandler = () => {
        if (userName.length && age.length) {
            return false;
        }
        return true;
    }

    const onChangeUserNameInput = (value: string) => {
        const reg = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;
        if (value === '' || reg.test(value)) {
            setUserName(value);
        }
    }

    const onChangeAgeInput = (value: string) => {
        const reg = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
        if (value === '' || reg.test(value)) {
            setAge(value)
        }
    }

    return (
        <>
            <Card>
                <form onSubmit={addUserHandler}>
                    <Input
                        htmlFor="username"
                        id="username"
                        label="Имя пользователя"
                        value={userName}
                        onChange={onChangeUserNameInput} />
                    <Input
                        htmlFor="age"
                        id="age"
                        label="Возраст"
                        value={age}
                        onChange={onChangeAgeInput} />
                    <Button
                        name="Добавить пользователя"
                        type="submit"
                        disabled={disableButtonHandler()} />
                </form>
            </Card>
        </>
    )
}