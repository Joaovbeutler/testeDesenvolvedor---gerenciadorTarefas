import React from 'react'
import { useHistory } from "react-router-dom";

import Input from '../../components/Input'
import Button from '../../components/Button'

import {FormInterface} from '../../interfaces'

import { Content } from './styles'

const Hystoric = ({activitys}: any): JSX.Element => {
    let history = useHistory();
    const handleGoBack = () => {
        history.goBack()
    }

    return (
        <>
        {activitys.map((e:FormInterface) => (
            <Content>
                <h3>Nome da Atividade</h3>
                <Input
                    required
                    type="text"
                    placeholder="Nome da Atividade"
                    id="activityName"
                    value={e.name}
                />
            <h3>Horas Utilizadas</h3>
                <Input
                    required
                    type="text"
                    placeholder="Horas Gastas"
                    id="initialDateHour"
                    value={parseFloat(e.finalHour) - parseFloat(e.initialHour)}
                />
            </Content>
       ))}
       <Button style={{'marginLeft': '10px'}} onClick={handleGoBack}> Voltar </Button>
       </>
        )
}

export default Hystoric;