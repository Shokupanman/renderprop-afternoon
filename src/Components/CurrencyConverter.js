import react, { Component } from 'react'


export default class Currency extends Component {
    constructor() {
        super()
        this.state = {
            currencyChose: false,
            slectedCurrency: 'Select Currency',
            amount: 0
        }
    }

    handleAmountIncrease = () => {
        this.setState((prevState) => {
            return {
                amount: (prevState.amount += 1)
            }
        })
    }
    handleAmountDecrease = () => {
        this.setState((prevState) => {
            return {
                amount: (prevState.amount -= 1)
            }
        })
    }
    handleOptionSelect = (evt) => {
        const userValue = evt.target.value
        this.setState(() => {
            return {
                selectedCurrency: userValue,
                currencyChose: userValue === 'Select Currency' ? false : true
            }
        })
    }


    render() {

        const currencyData = [
            { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
            { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
            { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
            { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
            { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
        ]

        const currencyOptions = currencyData.map((currency, index) => (
            <option key={index} value={index}>
                {currency.name}
            </option>
        ))
        return (
            <div>
                <select value={this.state.selectedCurrency}>
                    <option value='Select Currency' onChnage={this.handleOptionSelect}>Select Currency</option>
                    {currencyOptions}
                </select>
                <div>
                    <button className='add' onClick={this.handleAmountIncrease}>++++</button>
                    <button className='minus' onClick={this.handleAmountDecrease}>-----</button>
                </div>
                {this.state.currencyChosen ? (
                    this.props.render(
                        currencyData[this.state.selectedCurrency],
                        this.state.amount
                    )
                ) : (
                        <p>Please Select Currency</p>
                    )}
            </div>
        )
    }
}