#include <OneWire.h>
#include <DallasTemperature.h>
 
OneWire oneWire(10);  // порт подключения датчика
DallasTemperature ds(&oneWire);

void setup() {
  Serial.begin(9600);   // инициализация монитора порта
  ds.begin();                 // инициализация датчика ds18b20
}

void loop() {

  //СЧИТЫВАНИЕ И ВЫВОД ТЕМПЕРАТУРЫ В ТЕПЛИЦЕ В SERIAL
  ds.requestTemperatures(); // считываем температуру с датчика
  
  Serial.println(ds.getTempCByIndex(0));   // выводим температуру на монитор
  delay(5000);

  
}
