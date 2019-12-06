import React, {Component} from "react"
import generate from "nanoid/generate"

const alphabetLowerCase = "abcdefghiklmnopqrstvxyz"
const alphabetUpperCase = alphabetLowerCase.toUpperCase()
const numbers = "1234567890"
const SYMBOLS = '-_'

class Passgen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pass: '',
            length: 6,
            lowercase: false,
            uppercase: false,
            symbols: false
        }
    }

    setPassLength = (length) => {
        this.setState({length})
    }

    useLowercase = (lowercase) => {
        this.setState({lowercase})
    }

    useUppercase = (uppercase) => {
        this.setState({uppercase})
    }

    useSymbols = (symbols) => {
        this.setState({symbols})
    }

    generatePass = () => {
        const {length, lowercase, uppercase, symbols} = this.state;
        let source = numbers + (lowercase ? alphabetLowerCase : "")
        + (uppercase ? alphabetUpperCase : "" )
        + (symbols ? SYMBOLS : "")
        this.setState({
            pass: generate(source, length)
        })
    }


    render() {
        const {pass, length, lowercase, uppercase, symbols} = this.state;

        return <div>
            <h3>Generate a secure password</h3>
            <input type="text" readOnly value={pass}/><br/>
            <p>Length  <input type="range" value={length} min="6" max="12" step="1"
                             onChange={(e) => this.setPassLength(e.target.value)}/> <b>{length}</b></p>
            <p><input type="checkbox" checked readOnly/> Numbers (always enabled)</p>
            <p><input type="checkbox" checked={lowercase} onChange={(e) => this.useLowercase(e.target.checked)}/> Lowercase</p>
            <p><input type="checkbox" checked={uppercase} onChange={(e) => this.useUppercase(e.target.checked)}/> Uppercase</p>
            <p><input type="checkbox" checked={symbols} onChange={(e) => this.useSymbols(e.target.checked)}/> Symbols</p>
            <button onClick={this.generatePass}>Generate</button>
        </div>
    }

}

export default Passgen
