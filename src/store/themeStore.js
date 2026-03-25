import { create, createStore } from "zustand";
import { persist } from "zustand/middleware";

// export const useTheme = create((set) => ({
//     theme: "light",
//     toggleTheme: () => {
//         const htmlEl = document.documentElement;

//         htmlEl.classList.toggle("dark");

//         set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }));
//     },
// }));

export const useTheme = create(
    persist(
        (set) => ({
            theme: "light",
            toggleTheme: () => {
                const htmlEl = document.documentElement;

                htmlEl.classList.toggle("dark");

                set((state) => ({
                    theme: state.theme === "light" ? "dark" : "light",
                }));
            },
        }),
        { name: "theme-storage" },
    ),
);
