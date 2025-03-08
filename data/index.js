import { navigation } from "./common/navigation"

export const getPagesContext = (pagePath) => {
    const commonVariables = {
        ...navigation
    }


    let pageVariables = {};
    console.log("la pagina se cargo: ", pagePath);
    switch(pagePath){
        case 'index.html':
            break;
    }
    return {
        ...commonVariables,
        ...pageVariables
    }
}