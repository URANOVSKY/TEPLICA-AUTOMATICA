/*
  Прошивка для обмена данными между Arduino и ESP8266 по UART и передачей параметров по протоколу MQTT
*/

#include <ESP8266WiFi.h>
#include <PubSubClient.h>

// Update these with values suitable for your network.

const char* ssid = "Keenetic-1879";
const char* password = "KxGjPAxt";
const char* mqtt_server = "192.168.1.48";

WiFiClient espClient;
PubSubClient client(espClient);
unsigned long lastMsg = 0;
char msg[50];

char val[50];

void setup_wifi() {

  delay(10);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
}

void callback(const MQTT::Publish& pub)              // Функция получения данных от сервера
{
  String payload = pub.payload_string();

  if (String(pub.topic()) == "/home/charge/amperage")     // Проверяем из нужного ли нам топика пришли данные
  {
    int amperage = payload.toInt();               // Преобразуем полученные данные в тип integer
    Serial.println(amperage);                 // Отправляем данные по COM порту
  }

}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    // Create a random client ID
    String clientId = "ESP8266Client-";
    clientId += String(random(0xffff), HEX);
    // Attempt to connect
    if (client.connect(clientId.c_str())) {
    } else {
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}


void setup() {
  Serial.begin(9600);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
}

void loop() {


  //переподключение в случае неудачи
  if (!client.connected()) {
    reconnect();
  }
  client.loop();


  //ловим данные по шине UART
  String value = "";
  boolean StringReady = false;
  while (Serial.available()) {
    value = Serial.readString();
    Serial.println("MESSAGE: " + value);
    value.toCharArray(val, 50);
    StringReady = true;
  }

  //отправка сообщений на сервер MQTT
  unsigned long now = millis();
  if (now - lastMsg > 2000) {
    lastMsg = now;
    //snprintf (msg, 50, "%ld", val);
    client.publish("teplica/temp", val);
  }




  //конец программы
}
