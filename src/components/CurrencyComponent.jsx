import { useEffect, useState } from "react"

export default function CurrencyComponent() {
    const [currencyData, setCurrencyData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const data = await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=6f9cbd3328fd4c1498f87c0d75b46449")
            const result = await data.json()
            const filteredRates = {
                CAD: result.rates.CAD,
                JPY: result.rates.JPY,
                IDR: result.rates.IDR,
                CHF: result.rates.CHF,
                EUR: result.rates.EUR,
                GBP: result.rates.GBP
            }
            setCurrencyData(filteredRates)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div style={{ margin: 'auto' }}>
                <table>
                    <tr className="text-center">
                        <th></th>
                        <th>We Buy</th>
                        <th>Exchange Rate</th>
                        <th>We Sell</th>
                    </tr>
                    {
                        Object.keys(currencyData).map((currency) => (
                            <tr>
                                <td className="text-center">{currency}</td>
                                <td className="text-end">{Number(currencyData[currency]) + (Number(currencyData[currency]) * 0.05)}</td>
                                <td className="text-end">{Number(currencyData[currency])}</td>
                                <td className="text-end">{Number(currencyData[currency]) - (Number(currencyData[currency]) * 0.05)}</td>
                            </tr>
                        ))
                    }
                </table>
                <div> <small style={{ color: 'white' }}>*base currency is <b>USD</b> <br />
                    *As for the API, <a href="https://currencyfreaks.com/" style={{ color: 'white' }}>https://currencyfreaks.com/</a> is used.
                </small></div>
            </div>
        </>
    )
}