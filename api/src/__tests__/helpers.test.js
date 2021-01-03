const Helpers = require('../utils/helpers');

describe('tests to check checkIfValidSourceObject()', () => {

    test('source has to be an object', () => {
        expect(Helpers.checkIfValidSourceObject([])).toBe(false)
    });

    test('source should have the right propreties', () => {
        expect(Helpers.checkIfValidSourceObject({ hey: 'you', bla: 'good' })).toBe(false)
    });

    test('countryId source country id should exist', () => {
        expect(Helpers.checkIfValidSourceObject({
            name: 'de morgen', country_id: 'LAP', website_url: 'https://demorgen.be'
        })).toBe(false)
    });

    test('should return true when source is an object with right propreties and existing country id', () => {
        expect(Helpers.checkIfValidSourceObject({
            name: 'de morgen', country_id: 'BE', website_url: 'https://demorgen.be'
        })).toBe(true)
    });
})

describe('test to check checkIfValidPublicationNameObject()', () => {
    test('it has to be an object', () => {
        expect(Helpers.checkIfValidPublicationNameObject([])).toBe(false)
    })
    test('it has to have a "name" property', () => {
        expect(Helpers.checkIfValidPublicationNameObject({ bla: 'bla' })).toBe(false)
        expect(Helpers.checkIfValidPublicationNameObject({ name: 'bla' })).toBe(true)
    })
})