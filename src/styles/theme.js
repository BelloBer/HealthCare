// src/styles/theme.js
export const theme = {
    primaryColor: '#485461',
    secondaryColor: '#6c757d',
    bodyBackgroundColor: '#fff',
    bodyFontColor: '#212529',
    hoverColor: '#315070;',
    white: '#fff',
    cardColor: '#415161;',
};

export const lightTheme = {
    ...theme,
    bodyBackgroundColor: '#f0f0f0',
    bodyFontColor: '#000',
};

export const darkTheme = {
    ...theme,
    bodyBackgroundColor: '#333',
    bodyFontColor: '#fff',
};