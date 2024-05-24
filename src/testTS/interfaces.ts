enum GENDER {
    M = 'M',
    J = 'J'
}

// type Child = {
//     ...
// }


type User = {
    /** Имя человека */
    name: string;
    /** Возраст */
    age: number;
    gender: GENDER
    isEblan: boolean;
    onCancel: (isOpen: boolean) => GENDER
    // children?: Child[] | undefined | null
    // children?: Child[] | null
}

// if (user.gender === GENDER.M ) {
//     ...
// }


export type AProps = {
    users: User[]
}

const users = [
    {name: '1', age: 5, gender: GENDER.M, isEblan: true},
    {name: '1', age: 4, gender: GENDER.J, isEblan: true}
]

// const onCalcel = (isOpen: boolean) => {
//     ...
//
//     return GENDER
// }


// interface
// type


// string
// boolean
// number
// null
// undefined


// object
// any
// unknown

// https://www.typescriptlang.org/docs/handbook/2/generics.html
// https://www.typescriptlang.org/docs/handbook/utility-types.html Partial Required Readonly Record(+) Pick(+) Omit(+) Exclude
