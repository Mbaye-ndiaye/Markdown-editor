
// declarer des props

class Textarea extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        
        return(
            <div className='text'>
                <textarea value={this.props.value} onChange={this.props.onChange}></textarea>
            </div>
        )
    }
}
// declarer des props
class Card extends React.Component{
    constructor(props) {
        super(props) 
    }
    render() {
        return(
            <div className='card'>{this.props.value}</div>
        )
    }
}
// Bouton de telechagement

class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='text-center'>
                <button onClick={this.props.onClick} backgroun={this.props.background} className={this.props.className} >{this.props.children}</button>

            </div>
        )
    }
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
        
    }

    handlTelechager = () => {
        const blob = new Blob([this.state.value], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a')
        a.href = url
        a.download = 'blob-to-dowload.text';
         a.click()
        URL.revokeObjectURL(url)
    
    }
    render() {
        return (
            <div >
                <div className='col-12 container row '>
                <h1 className='text-center text-light'>helloe</h1>
                <p className='text-center text-light'>You can type in html tags as well</p>
                <div className='col-7' >
                <Textarea  value={this.state.value} onChange={this.handleChange}/>
                </div>
                <div className='col-6 '>
                    <Card value={this.state.value}/>
                </div>
                </div>
                <Button className='bg-dark text-light mt-3'  onClick={this.handlTelechager}>Download Text</Button>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById("root"))