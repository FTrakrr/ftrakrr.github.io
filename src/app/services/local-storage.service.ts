import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    /**
     * Loads some data from user's local storage.
     * @param item the name of the key to load
     * @returns the data saved in the local storage.
     * * If no data is found, `null` is returned.
     * * If data is an object, it is parsed using `JSON.parse()` and returned.
     * * If data is a number, it is parsed using `Number()` and returned.
     * * If data is a boolean or a string, it is returned unmodified.
     */
    public loadFromLocalStorage(item: string): null | object | number | boolean | string {
        let data = localStorage.getItem(item);
        if (!data) return null;
        if (data.match(/^[\[\{]/)) return JSON.parse(data);
        if (Number(data)) return Number(data);
        if (data.match(/^(?:true|false)$/)) return data == 'true';
        return data;
    }

    /**
     * Saves some data to user's local storage.
     * @param key the name of the key to save to
     * @param data the data to be saved
     * @returns `true` if the save was succesful, otherwise `false`.
     */
    public saveToLocalStorage(key: string, data: any) {
        try {
            let dataStr!: string;
            if (typeof data == 'string') dataStr = data;
            else dataStr = JSON.stringify(data);

            localStorage.setItem(key, dataStr);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
    /**
     * Exports all data saved in the local storage into a single strigified object.
     *
     * The object consists of key-value pairs, both same as in the local storage.
     * @returns a stringified object containing all user's data.
     */
    public exportAllData() {
        const KEY_LIST = [
            'settings',
            'workouts',
            'plans',
            'information',
        ]
        let obj: any = {};

        for (const key of KEY_LIST) {
            let data = this.loadFromLocalStorage(key);
            if (data == null) continue;
            
            obj[key] = data;
        }

        return JSON.stringify(obj);
    }

    public importDataFromString(data: string) {
        let obj = JSON.parse(data);
        let allOk = true;

        for (const key in obj) {
            const value = obj[key];
            if (!this.saveToLocalStorage(key, value)) allOk = false;
        }
        return allOk;
    }
}
