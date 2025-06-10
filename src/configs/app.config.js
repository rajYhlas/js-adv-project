import express from 'express';

export function setExpressConfig(app) {
    app.set('view engine', 'ejs');

    app.use(express.static('public'))

    app.use(express.urlencoded({ extended: true }));
}