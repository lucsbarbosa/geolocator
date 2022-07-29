import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  countries: country[] = [
    {
      iso: 'AED',
      country: 'Emirados Árabes Unidos',
    },
    {
      iso: 'AFN',
      country: 'Afeganistão',
    },
    {
      iso: 'ALL',
      country: 'Albânia',
    },
    {
      iso: 'AMD',
      country: 'Arménia',
    },
    {
      iso: 'AOA',
      country: 'Angola',
    },
    {
      iso: 'ARS',
      country: 'Argentina',
    },
    {
      iso: 'AUD',
      country: 'Austrália',
    },
    {
      iso: 'AUD',
      country: 'Nauru',
    },
    {
      iso: 'AUD',
      country: 'Quiribáti',
    },
    {
      iso: 'AUD',
      country: 'Tuvalu',
    },
    {
      iso: 'AZN',
      country: 'Azerbaijão',
    },
    {
      iso: 'BAM',
      country: 'Bósnia e Herzegovina',
    },
    {
      iso: 'BBD',
      country: 'Barbados',
    },
    {
      iso: 'BDT',
      country: 'Bangladexe',
    },
    {
      iso: 'BGN',
      country: 'Bulgária',
    },
    {
      iso: 'BHD',
      country: 'Barém',
    },
    {
      iso: 'BIF',
      country: 'Burúndi',
    },
    {
      iso: 'BND',
      country: 'Brunei',
    },
    {
      iso: 'BOB',
      country: 'Bolívia',
    },
    {
      iso: 'BRL',
      country: 'Brasil',
    },
    {
      iso: 'BSD',
      country: 'Bahamas',
    },
    {
      iso: 'BTN',
      country: 'Butão',
    },
    {
      iso: 'BWP',
      country: 'Botsuana',
    },
    {
      iso: 'BYN',
      country: 'Bielorrússia',
    },
    {
      iso: 'BZD',
      country: 'Belize',
    },
    {
      iso: 'CAD',
      country: 'Canadá',
    },
    {
      iso: 'CDF',
      country: 'República Democrática do Congo',
    },
    {
      iso: 'CHF',
      country: 'Listenstaine',
    },
    {
      iso: 'CHF',
      country: 'Suíça',
    },
    {
      iso: 'CLP',
      country: 'Chile',
    },
    {
      iso: 'CNY',
      country: 'China',
    },
    {
      iso: 'COP',
      country: 'Colômbia',
    },
    {
      iso: 'CRC',
      country: 'Costa Rica',
    },
    {
      iso: 'CUP',
      country: 'Cuba',
    },
    {
      iso: 'CVE',
      country: 'Cabo Verde',
    },
    {
      iso: 'CZK',
      country: 'República Checa',
    },
    {
      iso: 'DJF',
      country: 'Jibuti',
    },
    {
      iso: 'DKK',
      country: 'Dinamarca',
    },
    {
      iso: 'DOP',
      country: 'República Dominicana',
    },
    {
      iso: 'DZD',
      country: 'Argélia',
    },
    {
      iso: 'EGP',
      country: 'Egito',
    },
    {
      iso: 'ERN',
      country: 'Eritreia',
    },
    {
      iso: 'ETB',
      country: 'Etiópia',
    },
    {
      iso: 'EUR',
      country: 'Alemanha',
    },
    {
      iso: 'EUR',
      country: 'Andorra',
    },
    {
      iso: 'EUR',
      country: 'Áustria',
    },
    {
      iso: 'EUR',
      country: 'Bélgica',
    },
    {
      iso: 'EUR',
      country: 'Chipre',
    },
    {
      iso: 'EUR',
      country: 'Cosovo',
    },
    {
      iso: 'EUR',
      country: 'Eslováquia',
    },
    {
      iso: 'EUR',
      country: 'Eslovénia',
    },
    {
      iso: 'EUR',
      country: 'Espanha',
    },
    {
      iso: 'EUR',
      country: 'Estónia',
    },
    {
      iso: 'EUR',
      country: 'Finlândia',
    },
    {
      iso: 'EUR',
      country: 'França',
    },
    {
      iso: 'EUR',
      country: 'Grécia',
    },
    {
      iso: 'EUR',
      country: 'Irlanda',
    },
    {
      iso: 'EUR',
      country: 'Itália',
    },
    {
      iso: 'EUR',
      country: 'Letónia',
    },
    {
      iso: 'EUR',
      country: 'Lituânia',
    },
    {
      iso: 'EUR',
      country: 'Luxemburgo',
    },
    {
      iso: 'EUR',
      country: 'Malta',
    },
    {
      iso: 'EUR',
      country: 'Mónaco',
    },
    {
      iso: 'EUR',
      country: 'Montenegro',
    },
    {
      iso: 'EUR',
      country: 'Países Baixos',
    },
    {
      iso: 'EUR',
      country: 'Portugal',
    },
    {
      iso: 'EUR',
      country: 'São Marinho',
    },
    {
      iso: 'EUR',
      country: 'Vaticano',
    },
    {
      iso: 'FJD',
      country: 'Fiji',
    },
    {
      iso: 'GBP',
      country: 'Reino Unido',
    },
    {
      iso: 'GEL',
      country: 'Geórgia',
    },
    {
      iso: 'GHS',
      country: 'Gana',
    },
    {
      iso: 'GMD',
      country: 'Gâmbia',
    },
    {
      iso: 'GNF',
      country: 'Guiné',
    },
    {
      iso: 'GTQ',
      country: 'Guatemala',
    },
    {
      iso: 'GYD',
      country: 'Guiana',
    },
    {
      iso: 'HNL',
      country: 'Honduras',
    },
    {
      iso: 'HRK',
      country: 'Croácia',
    },
    {
      iso: 'HTG',
      country: 'Haiti',
    },
    {
      iso: 'HUF',
      country: 'Hungria',
    },
    {
      iso: 'IDR',
      country: 'Indonésia',
    },
    {
      iso: 'ILS',
      country: 'Estado da Palestina',
    },
    {
      iso: 'ILS',
      country: 'Israel',
    },
    {
      iso: 'INR',
      country: 'Índia',
    },
    {
      iso: 'IQD',
      country: 'Iraque',
    },
    {
      iso: 'IRR',
      country: 'Irão',
    },
    {
      iso: 'ISK',
      country: 'Islândia',
    },
    {
      iso: 'JMD',
      country: 'Jamaica',
    },
    {
      iso: 'JOD',
      country: 'Jordânia',
    },
    {
      iso: 'JPY',
      country: 'Japão',
    },
    {
      iso: 'KES',
      country: 'Quénia',
    },
    {
      iso: 'KGS',
      country: 'Quirguistão',
    },
    {
      iso: 'KHR',
      country: 'Camboja',
    },
    {
      iso: 'KMF',
      country: 'Comores',
    },
    {
      iso: 'KPW',
      country: 'Coreia do Norte',
    },
    {
      iso: 'KRW',
      country: 'Coreia do Sul',
    },
    {
      iso: 'KWD',
      country: 'Cuaite',
    },
    {
      iso: 'KZT',
      country: 'Cazaquistão',
    },
    {
      iso: 'LAK',
      country: 'Laus',
    },
    {
      iso: 'LBP',
      country: 'Líbano',
    },
    {
      iso: 'LKR',
      country: 'Sri Lanca',
    },
    {
      iso: 'LRD',
      country: 'Libéria',
    },
    {
      iso: 'LSL',
      country: 'Lesoto',
    },
    {
      iso: 'LYD',
      country: 'Líbia',
    },
    {
      iso: 'MAD',
      country: 'Marrocos',
    },
    {
      iso: 'MDL',
      country: 'Moldávia',
    },
    {
      iso: 'MGA',
      country: 'Madagáscar',
    },
    {
      iso: 'MKD',
      country: 'Macedónia do Norte',
    },
    {
      iso: 'MMK',
      country: 'Mianmar',
    },
    {
      iso: 'MNT',
      country: 'Mongólia',
    },
    {
      iso: 'MRO',
      country: 'Mauritânia',
    },
    {
      iso: 'MUR',
      country: 'Maurícia',
    },
    {
      iso: 'MVR',
      country: 'Maldivas',
    },
    {
      iso: 'MWK',
      country: 'Maláui',
    },
    {
      iso: 'MXN',
      country: 'México',
    },
    {
      iso: 'MYR',
      country: 'Malásia',
    },
    {
      iso: 'MZN',
      country: 'Moçambique',
    },
    {
      iso: 'NAD',
      country: 'Namíbia',
    },
    {
      iso: 'NGN',
      country: 'Nigéria',
    },
    {
      iso: 'NIO',
      country: 'Nicarágua',
    },
    {
      iso: 'NOK',
      country: 'Noruega',
    },
    {
      iso: 'NPR',
      country: 'Nepal',
    },
    {
      iso: 'NZD',
      country: 'Nova Zelândia',
    },
    {
      iso: 'OMR',
      country: 'Omã',
    },
    {
      iso: 'PAB',
      country: 'Panamá',
    },
    {
      iso: 'PEN',
      country: 'Peru',
    },
    {
      iso: 'PGK',
      country: 'Papua Nova Guiné',
    },
    {
      iso: 'PHP',
      country: 'Filipinas',
    },
    {
      iso: 'PKR',
      country: 'Paquistão',
    },
    {
      iso: 'PLN',
      country: 'Polónia',
    },
    {
      iso: 'PYG',
      country: 'Paraguai',
    },
    {
      iso: 'QAR',
      country: 'Catar',
    },
    {
      iso: 'RON',
      country: 'Roménia',
    },
    {
      iso: 'RSD',
      country: 'Sérvia',
    },
    {
      iso: 'RUB',
      country: 'Rússia',
    },
    {
      iso: 'RWF',
      country: 'Ruanda',
    },
    {
      iso: 'SAR',
      country: 'Arábia Saudita',
    },
    {
      iso: 'SBD',
      country: 'Salomão',
    },
    {
      iso: 'SCR',
      country: 'Seicheles',
    },
    {
      iso: 'SDG',
      country: 'Sudão',
    },
    {
      iso: 'SEK',
      country: 'Suécia',
    },
    {
      iso: 'SGD',
      country: 'Singapura',
    },
    {
      iso: 'SLL',
      country: 'Serra Leoa',
    },
    {
      iso: 'SOS',
      country: 'Somália',
    },
    {
      iso: 'SRD',
      country: 'Suriname',
    },
    {
      iso: 'SSP',
      country: 'Sudão do Sul',
    },
    {
      iso: 'STD',
      country: 'São Tomé e Príncipe',
    },
    {
      iso: 'SYP',
      country: 'Síria',
    },
    {
      iso: 'SZL',
      country: 'Essuatíni',
    },
    {
      iso: 'THB',
      country: 'Tailândia',
    },
    {
      iso: 'TJS',
      country: 'Tajiquistão',
    },
    {
      iso: 'TMT',
      country: 'Turcomenistão',
    },
    {
      iso: 'TND',
      country: 'Tunísia',
    },
    {
      iso: 'TOP',
      country: 'Tonga',
    },
    {
      iso: 'TRY',
      country: 'Turquia',
    },
    {
      iso: 'TTD',
      country: 'Trindade e Tobago',
    },
    {
      iso: 'TWD',
      country: 'Taiuã',
    },
    {
      iso: 'TZS',
      country: 'Tanzânia',
    },
    {
      iso: 'UAH',
      country: 'Ucrânia',
    },
    {
      iso: 'UGX',
      country: 'Uganda',
    },
    {
      iso: 'USD',
      country: 'Equador',
    },
    {
      iso: 'USD',
      country: 'Estados Unidos',
    },
    {
      iso: 'USD',
      country: 'Ilhas Marechal',
    },
    {
      iso: 'USD',
      country: 'Micronésia',
    },
    {
      iso: 'USD',
      country: 'Palau',
    },
    {
      iso: 'USD',
      country: 'Salvador',
    },
    {
      iso: 'USD',
      country: 'Timor-Leste',
    },
    {
      iso: 'USD',
      country: 'Zimbábue',
    },
    {
      iso: 'UYU',
      country: 'Uruguai',
    },
    {
      iso: 'UZS',
      country: 'Usbequistão',
    },
    {
      iso: 'VEF',
      country: 'Venezuela',
    },
    {
      iso: 'VND',
      country: 'Vietname',
    },
    {
      iso: 'VUV',
      country: 'Vanuatu',
    },
    {
      iso: 'WST',
      country: 'Samoa',
    },
    {
      iso: 'XAF',
      country: 'Camarões',
    },
    {
      iso: 'XAF',
      country: 'Chade',
    },
    {
      iso: 'XAF',
      country: 'Congo-Brazzaville',
    },
    {
      iso: 'XAF',
      country: 'Gabão',
    },
    {
      iso: 'XAF',
      country: 'Guiné Equatorial',
    },
    {
      iso: 'XAF',
      country: 'República Centro-Africana',
    },
    {
      iso: 'XCD',
      country: 'Antiga e Barbuda',
    },
    {
      iso: 'XCD',
      country: 'Dominica',
    },
    {
      iso: 'XCD',
      country: 'Granada',
    },
    {
      iso: 'XCD',
      country: 'Santa Lúcia',
    },
    {
      iso: 'XCD',
      country: 'São Cristóvão e Neves',
    },
    {
      iso: 'XCD',
      country: 'São Vicente e Granadinas',
    },
    {
      iso: 'XOF',
      country: 'Benim',
    },
    {
      iso: 'XOF',
      country: 'Burquina Faso',
    },
    {
      iso: 'XOF',
      country: 'Costa do Marfim',
    },
    {
      iso: 'XOF',
      country: 'Guiné-Bissau',
    },
    {
      iso: 'XOF',
      country: 'Mali',
    },
    {
      iso: 'XOF',
      country: 'Níger',
    },
    {
      iso: 'XOF',
      country: 'Senegal',
    },
    {
      iso: 'XOF',
      country: 'Togo',
    },
    {
      iso: 'YER',
      country: 'Iémen',
    },
    {
      iso: 'ZAR',
      country: 'África do Sul',
    },
    {
      iso: 'ZMW',
      country: 'Zâmbia',
    },
  ];

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0e2ae8b9f5287162d956234861c76e32`
    );
  }

  getCountry(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&result_type=country&key=AIzaSyDmA3nVFNIxKjxaRT21Ac8gCq556VOaBp4`
    );
  }

  getCurrency(country: string): Observable<any> | undefined {
    for (let i = 0; i < this.countries.length; i++) {
      if (this.countries[i].country == country) {
        return this.http.get<any>(`https://economia.awesomeapi.com.br/${this.countries[i].iso}-BRL/`);
      }
    }
    return undefined
  }
}
