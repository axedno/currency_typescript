import React, {FC, useState} from 'react';
import styled from "styled-components";
import {useAction} from "../../hooks/useAction";
import {setPage} from "../../store/action.creator/currency";


const Tr = styled.tr `
     td {
       border: 2px solid #69c;
       width: 200px;
     }
     td:hover{
       cursor: pointer;
     }
`

interface GetCurrenciesProps {
    children: any,
    index: number
}

const Currency: FC<GetCurrenciesProps> = (props) => {



    const [isEdit, setIsEdit] = useState<boolean>(false);


    const [value, setValue] = useState<object>({});

    const {setPage} = useAction();

    const onChangePage = (field:string, value:string) => {
        setValue(prevState => ({...prevState, [field]: value }))
    }



    const returnNorm = () => {
        return (
                <Tr>
                    <td>{props.children[0].props.children}</td>
                    <td onClick={() => setIsEdit(true)}>{props.children[1].props.children}</td>
                    <td onClick={() => setIsEdit(true)}>{props.children[2].props.children}</td>
                </Tr>
        );
    };



    const returnEdit = () => {
        return (
            <tbody>
                <Tr>
                    <td>{props.children[0].props.children}</td>
                    <td><input onChange={(event) => onChangePage('buy', event.target.value )} type="number" defaultValue={props.children[1].props.children} /></td>
                    <td><input onChange={(event) => onChangePage('sale', event.target.value)} type="number" defaultValue={props.children[2].props.children} /></td>
                </Tr>
                <button onClick={ () => {
                    setPage( value, props.index );
                    setIsEdit(false);
                }}>Редактировать</button >
                <button onClick={() => setIsEdit(false)}>Отмена</button>
            </tbody>
        );
    };

    if (isEdit) {
        return returnEdit();
    } else {
        return returnNorm();
    }

};

export default Currency;
