'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/mediaStore.sqlite');

const getAllShows = () => {
        // console.log("getting shows", getAll);
        return new Promise( (resolve, reject) => {
            db.all(`SELECT * FROM shows`, (err, shows) => {
                if (err) return reject(err);
                console.log("shows", shows);
                resolve(shows);
            });
        });
    };

const getSingle = (id) => {
        return new Promise( (resolve, reject) => {
            db.get(`SELECT shows.*, directors.name 
                    AS director 
                    FROM shows 
                    JOIN directors ON director_id = directors.dir_id                    
                    WHERE show_id = ${id}`, (err, single) => {
                  // prop on db item ^^^
                if (err) return reject(err);
                resolve(single);
            });
        });
    };

module.exports = { getAllShows, getSingle };
