const Index = require('../index.js');
const assert = require('assert');

describe('Teste da Classe Index', function() {
    it('Returns Hello World!', function(){

        //Arrange
        const testThis = new Index();

        //Act
        output = testThis.HelloWorld();

        //Assert
        assert.equal(output, 'Hello World!');
    })
});

