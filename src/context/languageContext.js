import React, {Component, createContext} from 'react';

export const languageProvider = createContext();

export class LanguageContext extends Component{
    constructor(props){
        super(props);
        this.state = {
            language: 'french'
        }
    }
    render(){
        return(
            <languageProvider.Provider value={{...this.state}}>
             {this.props.children}
            </languageProvider.Provider>
        )
    }
}