const Helpers = require('../utils/helpers');

describe('tests to check isValidSourceObject()', () => {

    test('source has to be an object', () => {
        expect(Helpers.isValidSourceObject([])).toBe(false)
    });

    test('source should have the right propreties', () => {
        expect(Helpers.isValidSourceObject({ hey: 'you', bla: 'good' })).toBe(false)
    });

    test('countryId source country id should exist', () => {
        expect(Helpers.isValidSourceObject({
            name: 'de morgen', country_id: 'LAP', website_url: 'https://demorgen.be'
        })).toBe(false)
    });

    test('should return true when source is an object with right propreties and existing country id', () => {
        expect(Helpers.isValidSourceObject({
            name: 'de morgen', country_id: 'BE', website_url: 'https://demorgen.be'
        })).toBe(true)
    });
})

describe('test to check isValidPublicationNameObject()', () => {
    test('it has to be an object', () => {
        expect(Helpers.isValidPublicationNameObject([])).toBe(false)
    })
    test('it has to have a "name" property', () => {
        expect(Helpers.isValidPublicationNameObject({ bla: 'bla' })).toBe(false)
        expect(Helpers.isValidPublicationNameObject({ name: 'bla' })).toBe(true)
    })
})

describe('test to check isUuid', () => {
    test('has to be an uuid', () => {
        expect(Helpers.isUuid('78204893-2c9e-4fd8-a1bb-8786034ddb2a')).toBe(true)
        expect(Helpers.isUuid('something')).toBe(false)
    })
})