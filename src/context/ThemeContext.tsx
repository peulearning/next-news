import { createContext, useState, useContext, ReactNode } from 'react';

// Definindo o tipo para o contexto do tema
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Criando o contexto do tema com um valor inicial
const ThemeContext = createContext<ThemeContextType>({ theme: 'light', toggleTheme: () => {} });

// Componente provedor do tema
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para consumir o contexto do tema
export const useTheme = () => useContext(ThemeContext);
