import React, {useContext, useState, useEffect} from 'react';

const AmazonContext = React.createContext();

export function useAmazonContext() {
    return useContext(AmazonContext);
}

export function AmazonContextProvider(props) {


    //Responsible for opening and closing the sub container
    const [subContainer, setSubContainer] = useState(false);
    //Responsible for storing the subContainers entries
    const [subContainerEntries, setSubContainerEntries] = useState(null);
    const [subsubContainerEntries, setSubSubContainerEntries] = useState(null);
    //Responsible for holding all of the data that goes into the navbar
    const [entryStore, setEntryStore] = useState(null);

    useEffect(() => {
        let url = './data.json'
        fetch(url)
        .then(data => data.json())
        .then(response => {
            setEntryStore(response);
        })
    }, []);

    const value = {
        subContainer,
        setSubContainer,
        subContainerEntries,
        setSubContainerEntries,
        subsubContainerEntries, 
        setSubSubContainerEntries,
        entryStore,
        setEntryStore
    }

    return (
        <AmazonContext.Provider value={value}>
            {props.children}
        </AmazonContext.Provider>
    );
}