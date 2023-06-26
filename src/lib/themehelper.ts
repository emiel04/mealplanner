export function toggleTheme(view: Window): string {
    const isSystemDark = view.window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = isSystemDark ? "dark" : "light";
    const oldTheme = view.document.documentElement.getAttribute("data-theme") || defaultTheme;

    const themeMap: Record<string, string> = {
        "light": "dark",
        "dark": "light"
    }

    const newTheme: string = themeMap[oldTheme];
    fetch(`/preferences/theme?theme=${newTheme}`, {
        method: "POST"
    });
    document.documentElement.setAttribute("data-theme", newTheme);
    return newTheme
}