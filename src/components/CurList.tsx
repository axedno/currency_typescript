import React, {useEffect} from 'react';
import {useTypesSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useAction";
import styled from 'styled-components';
import Currency from "./Currency/Currency";
import ChangeBlock from "./ChangeBlock/ChangeBlock";

const Wrapper = styled.div `
    height: 700px;
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Thead = styled.thead `
    table {
       border: 1px solid #69c;
       border-collapse: separate;
       empty-cells: hide;
    }
    th, td {
       border: 2px solid #69c;
       width: 200px;
    }
`

const CurList: React.FC = () => {

    const { error, loading,  currency} = useTypesSelector(state => state.currency)


    const {fetch} = useAction()

    useEffect(() => {
        fetch()
    }, [])

    if(loading){
        return <h1>Идет загрузка...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }


    const  displayCurrency = () => {
        return (
            currency.map((item, index) =>{
                return (
                    <Currency index={index} key={index}>
                        <td>{item.ccy} / {item.base_ccy}</td>
                        <td>{item.buy}</td>
                        <td>{item.sale}</td>
                    </Currency>
                )
        }
        ))
    }


    return (
        <Wrapper>
            <table>
                <Thead>
                     <tr>
                         <th>Currency/Current Date</th>
                         <th>Buy</th>
                         <th>Sell</th>
                     </tr>
                </Thead>
                    <tbody>
                         {displayCurrency()}
                    </tbody>
                </table>
            <ChangeBlock/>
        </Wrapper>
    );
};

export default CurList;
