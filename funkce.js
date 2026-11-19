const text = document.getElementById("pocasi");
const button = document.getElementById("obnovit");

function nactiPocasi()
{
    text.textContent = "Načítám data...";
    const url = "https://api.open-meteo.com/v1/forecast?latitude=49.82&longitude=18.26&current_weather=true";
    fetch(url)
    .then(odpoved => odpoved.json())
    .then(data =>
    {
        const teplota = data.current_weather.temperature;
        const vitr = data.current_weather.windspeed;
        text.innerHTML = `<strong>Teplota:</strong> ${teplota} °C <br> <strong>Rychlost větru:</strong> ${vitr} km/h`;
    })
    .catch(() =>
    {
        text.textContent = "Nepodařilo se načíst počasí.";
    });
}
nactiPocasi();
button.addEventListener("click", nactiPocasi);