const {builder, By, Key, Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

// Configurando as variaveis .env
require('dotenv').config(); 
const emailDot = process.env.EMAIL;
const passwordDot = process.env.PASSWORD;


const service = () => chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

async function run(){

    //Criar um novo objeto webdriver
    let driver = await new Builder().forBrowser('chrome').build();

    //Abre a página
    await driver.get('https://www.linkedin.com/');

    //Encontrar o campo de email e preenche-lo
    const email = await driver.findElement(By.name('session_key'));
    await email.sendKeys(emailDot);

    //Entrar no campo de senha e preenche-lo
    const senha = await driver.findElement(By.name('session_password'));
    await senha.sendKeys(passwordDot);

    //Entrando
    await senha.sendKeys(Key.ENTER);
}

run();