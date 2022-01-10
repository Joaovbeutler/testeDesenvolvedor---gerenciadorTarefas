import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import {FormInterface} from '../interfaces'

import Dashboard from '../pages/Dashboard'
import Hystoric from '../pages/Hystoric'

const App: React.FC = () => {

    const getData = localStorage.getItem('@teste-nuvoni:info') !== null ? JSON.parse(localStorage.getItem('@teste-nuvoni:info') as string).activitys : [{name: '', initialDate: '', finalDate: ''}]
    const [activitys, setActivitys] = useState<FormInterface[]>(getData)

    return (
        <Switch>
            <Route exact path="/" render={()=> <Dashboard setActivitys={(dados: FormInterface[]) => setActivitys(dados)} activitys={activitys} />} />
            <Route path="/historico" render={()=> <Hystoric activitys={activitys} />} />
        </Switch>
        )
}

export default App
