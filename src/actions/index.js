
// Action creator
export const darkMode = () => {
    // return an action
    return {
        type: 'DARK_MODE',
        payload: true

    };
}

// Action creator
export const lightMode = () => {
    // return an action
    return {
        type: 'LIGHT_MODE',
        payload: false

    };
}

