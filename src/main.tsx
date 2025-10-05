import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@/components/ui/theme-provider";

// Принудительно устанавливаем темную тему для всех устройств
const setDarkTheme = () => {
  // Устанавливаем класс dark на html элемент
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
  
  // Сохраняем в localStorage
  localStorage.setItem('theme', 'dark');
  
  // Устанавливаем data-theme атрибут для дополнительной совместимости
  document.documentElement.setAttribute('data-theme', 'dark');
  
  // Устанавливаем CSS переменную для мгновенного применения
  document.documentElement.style.colorScheme = 'dark';
};

// Применяем темную тему немедленно
setDarkTheme();

// Переопределяем системные предпочтения, если они есть
if (window.matchMedia) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  mediaQuery.addEventListener('change', () => {
    // Всегда возвращаемся к темной теме, игнорируя системные настройки
    setDarkTheme();
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="theme"
    >
      <App />
    </ThemeProvider>
  </StrictMode>
);
