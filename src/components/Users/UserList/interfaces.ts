export interface UserListProps {
    users: User[];
    onRemoveUser: (id: number) => void;
}

export interface User {
    name: string;
    age: string;
    id: number
}