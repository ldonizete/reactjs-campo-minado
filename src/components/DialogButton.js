import React from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import 
import '../styles/DialogCustom.css'

export default class DialogButton extends React.Component {
  submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Como Jogar</h1>
            <p>
              <span style={{ fontSize: 14 }}>
                Click: Para abrir o conteúdo.
              </span><br />
              <span style={{ fontSize: 14 }}>
                Click Direito: Marca a bandeira.
              </span><br />
              <span style={{ fontSize: 14 }}>
                Click Duplo: Abre os campos em torno do campo aberto,<br/>
                exceto que estão com bandeira. Ativa apena um campo aberto.
              </span>
            </p>
            <button onClick={onClose}>Fechar</button>
          </div>
        );
      }
    });
  }
 
  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>{this.props.title}</button>
      </div>
    );
  }
}