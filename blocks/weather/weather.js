export default async function decorate(block) {

    async function getWeather(city) {
        const apiKey = 'de1224183e194c1fb7601811241311'; // Replace with your WeatherAPI key
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            console.log(`Weather in ${city}:`);
            console.log(`Temperature: ${data.current.temp_c} °C`);
            console.log(`Conditions: ${data.current.condition.text}`);
            return data;
        } catch (error) {
            console.error("Failed to fetch weather data:", error);
        }
    }
    
    // Example usage:
    getWeather('London'); // Replace 'London' with any city name
    
}