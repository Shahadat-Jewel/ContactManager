import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DEL_CON':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CON':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Shahadat Jewel',
        email: 'jewel.sebpo@gmail.com',
        phone: '01796426253'
      },
      {
        id: 2,
        name: 'Noshin Saiyara',
        email: 'noshin.rabbi@sebpo.com',
        phone: '01711091334'
      },
      {
        id: 3,
        name: 'Sudip Kumar Saha',
        email: 'sudip.kumar@sebpo.com',
        phone: '01674747782'
      },
      {
        id: 4,
        name: 'Anas Bin Arshad',
        email: 'anas.arshad@sebpo.com',
        phone: '01515291477'
      },
      {
        id: 5,
        name: 'Shuvojit Chakrobarty',
        email: 'shuvojit.sebpo@gmail.com',
        phone: '01723079865'
      },
      {
        id: 6,
        name: 'Raihanul Abedin',
        email: 'raihanul.sebpo@gmail.com',
        phone: '01701011666'
      },
      {
        id: 7,
        name: 'Ahnaf Ayon',
        email: 'ahnaf.ayon@gmail.com',
        phone: '01742199077'
      },
      {
        id: 8,
        name: 'Likhan Shaha',
        email: 'likhanshaha.sebpo@gmail.com',
        phone: '01676678724'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;

// export default class context extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }
