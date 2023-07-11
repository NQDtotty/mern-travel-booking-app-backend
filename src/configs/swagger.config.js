export const optionsSwagger = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Tour Booking System",
            version: "0.1.0",
            description:
                "This is an API for Tour Booking System",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "NQDtotty"
            },
        },
        servers: [
            {
                url: "http://localhost:4000",
            },
        ],
    },
    apis: ["./routers/*.js"],
};