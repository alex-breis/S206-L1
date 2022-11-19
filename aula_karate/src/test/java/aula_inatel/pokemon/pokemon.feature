Feature: Testando API Pokemon

Background: Executa antes de cada teste
    * def url_base = "https://pokeapi.co/api/v2/"

Scenario: Testando retorno pikachu e verificando Json
    Given url url_base
    And path "pokemon/pikachu"
    When method get
    Then status 200
    And match response.name == "pikachu"
    And match response.id == 25

Scenario: Testando retorno pokemon Red e verificando Json
    Given url url_base
    And path "version/1"
    When method get
    Then status 200
    And def idioma = $.names[5].language.url
    And url idioma
    When method get
    Then status 200
    And match response.name == "es"
    And match response.id == 7

Scenario: Testando retorno ability e verificando Json
    Given url url_base
    And path "ability/15/"
    When method get
    Then status 200
    And match response.name == "insomnia"
    And match response.id == 15

Scenario: Testando retorno dos tipos e acessando tipo Voador
    Given url url_base
    And path "type/"
    When method get
    Then status 200
    And def tipo = $.results[2].url
    And url tipo
    When method get
    Then status 200
    And match response.name == "flying"
    And match response.id == 3