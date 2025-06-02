export const colors = {
  // Primary Colors
  primary: {
    main: '#ff8a00',
    light: '#ffa940',
    dark: '#e67a00',
    gradient: 'linear-gradient(45deg, #ff8a00, #ffa940)',
  },
  
  // Background Colors
  background: {
    main: '#ffffff',
    light: '#f8f9fa',
    dark: '#1a1a1a',
  },
  
  // Text Colors
  text: {
    primary: '#2c2c2c',
    secondary: '#4a4a4a',
    light: '#9e9e9e',
  },
  
  // Border Colors
  border: {
    light: '#808080',
    main: '#404040',
    dark: '#2c2c2c',
  },
  
  // Shadow Colors with opacity
  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.3)',
    dark: 'rgba(0, 0, 0, 0.4)',
  },
  
  // Common Colors
  common: {
    white: '#ffffff',
    black: '#000000',
  },
} as const;

// CSS Variables
export const cssVariables = `
  :root {
    --color-primary-main: ${colors.primary.main};
    --color-primary-light: ${colors.primary.light};
    --color-primary-dark: ${colors.primary.dark};
    --color-primary-gradient: ${colors.primary.gradient};
    
    --color-background-main: ${colors.background.main};
    --color-background-light: ${colors.background.light};
    --color-background-dark: ${colors.background.dark};
    
    --color-text-primary: ${colors.text.primary};
    --color-text-secondary: ${colors.text.secondary};
    --color-text-light: ${colors.text.light};
    
    --color-border-light: ${colors.border.light};
    --color-border-main: ${colors.border.main};
    --color-border-dark: ${colors.border.dark};
    
    --color-shadow-light: ${colors.shadow.light};
    --color-shadow-medium: ${colors.shadow.medium};
    --color-shadow-dark: ${colors.shadow.dark};
    
    --color-common-white: ${colors.common.white};
    --color-common-black: ${colors.common.black};
  }
`; 