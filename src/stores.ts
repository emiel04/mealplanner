import { browser } from '$app/environment';
import { writable } from 'svelte/store';
 
const defaultValue = 'dark';
const initialValue = browser ? localStorage.getItem('theme') ?? defaultValue : defaultValue;
 
const theme = writable<string>(initialValue);
 
theme.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('theme', value);
  }
});
 
export default theme;