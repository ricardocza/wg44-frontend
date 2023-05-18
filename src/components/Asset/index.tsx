import { GraphContext } from "../../context/GraphContext"
import { useContext, useEffect, useState } from "react"

export const AssetSelected = () => {
    const {selectedAsset} = useContext(GraphContext)

    return <div>
        {selectedAsset === "WINFUT"
            ?
            <>
                <h3>WINFUT</h3>
                <p>Mini contratos Ibovespa Futuro</p>
            </>
            :
            selectedAsset === "WDOFUT"
            ?
            <>
                <h3>WDOFUT</h3>
                <p>Mini contratos Dólar Futuro</p>
            </>
            :
            selectedAsset === "PETR3"
            ?
            <>
                <h3>PETR3</h3>
                <p>Petrobras SA</p>
            </>
            :
            selectedAsset === "VALE3"
            ?
            <>
                <h3>VALE3</h3>
                <p>Vale SA</p>
            </>
            :
            <p>Erro</p>
        }
    </div>
}