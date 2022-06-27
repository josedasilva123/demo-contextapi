import { createContext, useState, useEffect } from "react";

// Criando o contexto Counter por meio da função createContext
export const CounterContext = createContext({});

//Criando o provider para o CounterContext
export const CounterProvider = ({ children }) => {
    //Estado convencional para o contador
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const localCount = localStorage.getItem("@COUNTER");
        if(localCount){
            const currentCount = +JSON.parse(localCount);
            setCounter(currentCount);
        }
    }, [])

    //Função de incrementar
    function incrementar(){
        const newCount = counter + 1
        localStorage.setItem("@COUNTER", JSON.stringify(newCount));
        setCounter(newCount);
    }

    //Função de decrementar
    function decrementar(){
        const newCount = counter - 1
        localStorage.setItem("@COUNTER", JSON.stringify(newCount));
        setCounter(newCount);
    }

    //Retorno de um JSX com o Provider do respectivo contexto

    //Provider tem como padrão a props value: um objeto que recebe as "exportações"
    //desejadas (neste caso o estado counter e as funções incrementar e decrementar)
    
    return(
        <CounterContext.Provider value={{ counter, incrementar, decrementar }}>
            {children}
        </CounterContext.Provider>
    )
}