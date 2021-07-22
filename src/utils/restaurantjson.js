const setRestaurantJson = (infos) => {
    const restaurantJson = {
        type: "flex",
        altText: "This is a Flex Message",
        contents: {
            type: "carousel",
            contents: [
                {
                    type: "bubble",
                    size: "kilo",
                    hero: {
                        type: "image",
                        url: infos[0].photourl,
                        size: "full",
                        aspectRatio: "20:13",
                        aspectMode: "cover",
                    },
                    body: {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: infos[0].name,
                                weight: "bold",
                                size: "xl"
                            },
                            {
                                type: "box",
                                layout: "baseline",
                                margin: "md",
                                contents: [
                                    {
                                        type: "icon",
                                        size: "sm",
                                        url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                    },
                                    {
                                        type: "text",
                                        text: infos[0].rating,
                                        size: "sm",
                                        color: "#999999",
                                        margin: "md",
                                        flex: 0
                                    }
                                ]
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
                                                text: "Place",
                                                color: "#aaaaaa",
                                                size: "sm",
                                                flex: 1
                                            },
                                            {
                                                type: "text",
                                                text: infos[0].address,
                                                wrap: true,
                                                color: "#666666",
                                                size: "sm",
                                                flex: 4
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
                                                text: "Phone",
                                                color: "#aaaaaa",
                                                size: "sm",
                                                flex: 1
                                            },
                                            {
                                                type: "text",
                                                text: infos[0].phone,
                                                wrap: true,
                                                color: "#666666",
                                                size: "sm",
                                                flex: 4
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
                                    uri: infos[0].url
                                }
                            }
                        ],
                        flex: 0
                    }
                },
                {
                    type: "bubble",
                    size: "kilo",
                    hero: {
                        type: "image",
                        url: infos[1].photourl,
                        size: "full",
                        aspectRatio: "20:13",
                        aspectMode: "cover",
                    },
                    body: {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: infos[1].name,
                                weight: "bold",
                                size: "xl"
                            },
                            {
                                type: "box",
                                layout: "baseline",
                                margin: "md",
                                contents: [
                                    {
                                        type: "icon",
                                        size: "sm",
                                        url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                    },
                                    {
                                        type: "text",
                                        text: infos[1].rating,
                                        size: "sm",
                                        color: "#999999",
                                        margin: "md",
                                        flex: 0
                                    }
                                ]
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
                                                text: "Place",
                                                color: "#aaaaaa",
                                                size: "sm",
                                                flex: 1
                                            },
                                            {
                                                type: "text",
                                                text: infos[1].address,
                                                wrap: true,
                                                color: "#666666",
                                                size: "sm",
                                                flex: 4
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
                                                text: "Phone",
                                                color: "#aaaaaa",
                                                size: "sm",
                                                flex: 1
                                            },
                                            {
                                                type: "text",
                                                text: infos[0].phone,
                                                wrap: true,
                                                color: "#666666",
                                                size: "sm",
                                                flex: 4
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
                                    uri: infos[1].url
                                }
                            }
                        ],
                        flex: 0
                    }
                },
                {
                    type: "bubble",
                    size: "kilo",
                    hero: {
                        type: "image",
                        url: infos[2].photourl,
                        size: "full",
                        aspectRatio: "20:13",
                        aspectMode: "cover",
                    },
                    body: {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: infos[2].name,
                                weight: "bold",
                                size: "xl"
                            },
                            {
                                type: "box",
                                layout: "baseline",
                                margin: "md",
                                contents: [
                                    {
                                        type: "icon",
                                        size: "sm",
                                        url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                    },
                                    {
                                        type: "text",
                                        text: infos[2].rating,
                                        size: "sm",
                                        color: "#999999",
                                        margin: "md",
                                        flex: 0
                                    }
                                ]
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
                                                text: "Place",
                                                color: "#aaaaaa",
                                                size: "sm",
                                                flex: 1
                                            },
                                            {
                                                type: "text",
                                                text: infos[2].address,
                                                wrap: true,
                                                color: "#666666",
                                                size: "sm",
                                                flex: 4
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
                                                text: "Phone",
                                                color: "#aaaaaa",
                                                size: "sm",
                                                flex: 1
                                            },
                                            {
                                                type: "text",
                                                text: infos[2].phone,
                                                wrap: true,
                                                color: "#666666",
                                                size: "sm",
                                                flex: 4
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
                                    uri: infos[2].url
                                }
                            }
                        ],
                        flex: 0
                    }
                },
                {
                    type: "bubble",
                    size: "kilo",
                    hero: {
                        type: "image",
                        url: infos[3].photourl,
                        size: "full",
                        aspectRatio: "20:13",
                        aspectMode: "cover",
                    },
                    body: {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: infos[3].name,
                                weight: "bold",
                                size: "xl"
                            },
                            {
                                type: "box",
                                layout: "baseline",
                                margin: "md",
                                contents: [
                                    {
                                        type: "icon",
                                        size: "sm",
                                        url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                    },
                                    {
                                        type: "text",
                                        text: infos[3].rating,
                                        size: "sm",
                                        color: "#999999",
                                        margin: "md",
                                        flex: 0
                                    }
                                ]
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
                                                text: "Place",
                                                color: "#aaaaaa",
                                                size: "sm",
                                                flex: 1
                                            },
                                            {
                                                type: "text",
                                                text: infos[3].address,
                                                wrap: true,
                                                color: "#666666",
                                                size: "sm",
                                                flex: 4
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
                                                text: "Phone",
                                                color: "#aaaaaa",
                                                size: "sm",
                                                flex: 1
                                            },
                                            {
                                                type: "text",
                                                text: infos[3].phone,
                                                wrap: true,
                                                color: "#666666",
                                                size: "sm",
                                                flex: 4
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
                                    uri: infos[3].url
                                }
                            }
                        ],
                        flex: 0
                    }
                },
                {
                    type: "bubble",
                    size: "kilo",
                    hero: {
                        type: "image",
                        url: infos[4].photourl,
                        size: "full",
                        aspectRatio: "20:13",
                        aspectMode: "cover",
                    },
                    body: {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: infos[4].name,
                                weight: "bold",
                                size: "xl"
                            },
                            {
                                type: "box",
                                layout: "baseline",
                                margin: "md",
                                contents: [
                                    {
                                        type: "icon",
                                        size: "sm",
                                        url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                    },
                                    {
                                        type: "text",
                                        text: infos[4].rating,
                                        size: "sm",
                                        color: "#999999",
                                        margin: "md",
                                        flex: 0
                                    }
                                ]
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
                                                text: "Place",
                                                color: "#aaaaaa",
                                                size: "sm",
                                                flex: 1
                                            },
                                            {
                                                type: "text",
                                                text: infos[4].address,
                                                wrap: true,
                                                color: "#666666",
                                                size: "sm",
                                                flex: 4
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
                                                text: "Phone",
                                                color: "#aaaaaa",
                                                size: "sm",
                                                flex: 1
                                            },
                                            {
                                                type: "text",
                                                text: infos[4].phone,
                                                wrap: true,
                                                color: "#666666",
                                                size: "sm",
                                                flex: 4
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
                                    uri: infos[4].url
                                }
                            }
                        ],
                        flex: 0
                    }
                }
            ]
        }
    }
    return restaurantJson
}
module.exports = setRestaurantJson