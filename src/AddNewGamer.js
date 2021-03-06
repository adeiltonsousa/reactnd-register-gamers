import React from 'react';

class AddNewGamer extends React.Component {
    state = {
        nome:'',
        sobrenome:'',
        username:'',
        ngames:0,
    }

    handleChangeField = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        })
    }

    addGamer = event => {
        event.preventDefault();
        const { nome, sobrenome, username, ngames } = this.state;
        const { onAddGamer } = this.props;
        onAddGamer(nome, sobrenome, username, ngames);
    }

    inputIsEmpty = () => {
        return this.state.value === '';
    }

    render() {
        return (
            <div>
            <form onSubmit={this.addGamer}>
                <input
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleChangeField}
                />
                <input
                    type="text"
                    placeholder="Sobrenome"
                    name="sobrenome"
                    value={this.state.sobrenome}
                    onChange={this.handleChangeField}
                />
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChangeField}
                />
                <br />
                <label>Nº de Games</label>
                <input                
                type="number"
                name="ngames"
                value={this.state.ngames}
                onChange={this.handleChangeField}
                /><br />
                <button disabled={this.inputIsEmpty()}>Registrar</button>
                <hr />
            </form>
            </div>
        );
    }
}

export default AddNewGamer;