import React, {FC, useState} from 'react';
import {useTypesSelector} from "../../hooks/useTypeSelector";
import styled from "styled-components";



const ChangeBlockStyle = styled.div `
     input {
        margin-right: 60px;
     }
`


const ChangeBlock: FC = () => {

    const {currency} = useTypesSelector(state => state.currency)


    const [value, setValue] = useState({count: 0, curr: 'USD'});


    const onChangePage = (field:string, value:string) => {
        setValue(prevState => ({...prevState, [field]: value }))
    }



    const createCurrencyChange = () => {
       return  currency.map((item, index) => <option  key={index}>{item.ccy}</option>)
    }


    const displayCurr = () => {
        return (
            currency.map((item, index) => {
                if(item.ccy === value.curr) {
                    return      <p key={index}>{value.count / item.buy}</p>
                }
            })
        )
    }


    return (
        <ChangeBlockStyle>
            <p>Change:</p>
            <input onChange={(event) => onChangePage('count', event.target.value)} type="number"/>
            <select  onChange={(event) => onChangePage('curr', event.target.value)}  >
                {createCurrencyChange()}
            </select>
            Get: {displayCurr()}
        </ChangeBlockStyle>
    );
};

export default ChangeBlock;
