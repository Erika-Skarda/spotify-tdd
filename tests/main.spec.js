import chai, { expect } from 'chai';
import { search, 
         searchAlbums, 
         searchArtists, 
         searchTracks, 
         searchPlaylists } from '../src/main';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');
//Sinon "espia" o codigo
//spy so verifica se a função original foi chamada
//stubs s spies mas tem comportamento pre programado, evita que a função original seja chamada
//sinon e sinon stub promise

describe('Spotify TDD', () => {
    describe('Smoke tests', () => {
        //Search(genérico) -+ de 1 item
        //Search Albums
        //Search Artists
        //Search Tracks
        //Search Playlists

        it('Should exist the search method', () => {
            expect(search).to.exist;
        });

        it('Should exist the searchAlbums method', () => {
            expect(search).to.exist;
        });
        
        it('Should exist the searchArtists method', () => {
            expect(search).to.exist;
        });
        
        it('Should exist the searchTracks method', () => {
            expect(search).to.exist;
        });
        
        it('Should exist the searchPlaylists method', () => {
            expect(search).to.exist;
        });
    });

    describe('Generic Search', () => {
       it('Should call fetch function', () => {
           const fetchedStub = sinon.stub(global, 'fetch');
           const artists = search();

           expect(fetchedStub).to.have.been.calledOnce;

           fetchedStub.restore();
       });

       it('Should receive the corrrect url to fetch', () => {
           const fetchedStub = sinon.stub(global, 'fetch');
           const artists = search('pearl jam', 'artist');

           expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=pearl%20jam")
       })
    })

});
