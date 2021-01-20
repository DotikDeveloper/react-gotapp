export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
              `, received ${res.status}`);
          }

        return await res.json();
    };
    async getAllCharacters() {
        const resChar = await this.getResourse('/characters?page=5&pageSize=10');
        return resChar.map(this._transformCharacter)
    }
    async getCharacter(id) {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    async getAllHouses() {
        const resHouses = await this.getResourse('/houses/');
        return resHouses.map(this._transformHouse)
    }
    async getHouse(id) {
        const house = await this.getResourse(`/houses/${id}/`);
        return this._transformHouse(house);
    }
    async getAllBooks() {
        const resBooks = await  this.getResourse('/books/');
        return resBooks.map(this._transformBook)
    }
    async getBook(id) {
        const book = await this.getResourse(`/books/${id}/`);
        return this._transformBook(book);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.gender,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released

        }
    }

}

