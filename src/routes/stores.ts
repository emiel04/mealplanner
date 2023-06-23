import {browser} from '$app/environment';

import {writable} from 'svelte/store';

export const theme =  writable(<string>(browser ? localStorage.getItem('theme') ?? "light" : <string>{}));