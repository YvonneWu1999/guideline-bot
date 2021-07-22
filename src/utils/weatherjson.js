const setWeatherJson = (location, weather, temperature, feelslike, humidity) => {
    const weatherJson = {
        type: "flex",
        altText: "This is a Flex Message",
        contents: {
            type: "bubble",
            size: "kilo",
            hero: {
                type: "image",
                url: "https://cdn.icon-icons.com/icons2/2746/PNG/512/rainbow_icon_175988.png",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
                action: {
                    type: "uri",
                    uri: "http://linecorp.com/"
                }
            },
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "text",
                        text: location + "Weather",
                        weight: "bold",
                        size: "xl"
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        margin: "lg",
                        spacing: "sm",
                        contents: [
                            {
                                type: "box",
                                layout: "baseline",
                                spacing: "sm",
                                contents: [
                                    {
                                        type: "text",
                                        text: "Weather",
                                        color: "#0099FF",
                                        size: "sm",
                                        weight: "bold",
                                        offsetEnd: "none"
                                    },
                                    {
                                        type: "text",
                                        text: weather,
                                        wrap: true,
                                        color: "#666666",
                                        size: "sm"
                                    }
                                ]
                            },
                            {
                                type: "box",
                                layout: "baseline",
                                spacing: "sm",
                                contents: [
                                    {
                                        type: "text",
                                        text: "temperature",
                                        color: "#0099FF",
                                        weight: "bold",
                                        size: "sm"
                                    },
                                    {
                                        type: "text",
                                        text: temperature,
                                        wrap: true,
                                        color: "#666666",
                                        size: "sm"
                                    }
                                ]
                            },
                            {
                                type: "box",
                                layout: "baseline",
                                spacing: "sm",
                                contents: [
                                    {
                                        type: "text",
                                        text: "feels-like",
                                        color: "#0099FF",
                                        weight: "bold",
                                        size: "sm"
                                    },
                                    {
                                        type: "text",
                                        text: feelslike,
                                        wrap: true,
                                        color: "#666666",
                                        size: "sm"
                                    }
                                ]
                            },
                            {
                                type: "box",
                                layout: "baseline",
                                spacing: "sm",
                                contents: [
                                    {
                                        type: "text",
                                        text: "humidity",
                                        color: "#0099FF",
                                        weight: "bold",
                                        size: "sm"
                                    },
                                    {
                                        type: "text",
                                        text: humidity,
                                        wrap: true,
                                        color: "#666666",
                                        size: "sm"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            footer: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                    {
                        type: "button",
                        style: "link",
                        height: "sm",
                        action: {
                            type: "uri",
                            label: "WEBSITE",
                            uri: "https://weatherstack.com/"
                        }
                    }
                ],
                flex: 0
            }
        }
    }
    return weatherJson
}

module.exports = setWeatherJson