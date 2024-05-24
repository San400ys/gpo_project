import {AProps} from "./interfaces";
import {FC} from "react";

type AB = {
    name: string
}
export const A: FC<AProps> = (props) => {
    const {users} = props;

    const calcSomething = (time: string): AB => {
        return {name: 'a'}
    }

    return <>{users.map(({name, age, gender,isEblan /*, children*/}) => (
        <div key={name}>
            <span>{name}</span>
            <span>{age}</span>
            <span>{gender}</span>
            <span>{isEblan}</span>
            {/*{children?.map(child => ...)}*/}
            {/*{children && children.map(child => ...)}*/}
        </div>
        )
    )}</>
}