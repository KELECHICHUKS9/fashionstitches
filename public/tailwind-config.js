tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "keyframes": {
                        "zoom-subtle": {
                            "0%, 100%": { "transform": "scale(1.05)" },
                            "50%": { "transform": "scale(1.08)" }
                        }
                    },
                    "animation": {
                        "zoom-subtle": "zoom-subtle 20s infinite alternate",
                        "blink": "blink 1.2s infinite step-start"
                    },
                    "keyframes": {
                        "blink": {
                            "0%, 100%": { "opacity": "1" },
                            "50%": { "opacity": "0" }
                        }
                    },
                    "colors": {
                        "ivory": "#F8F4EE",
                        "burgundy": "#6D1023",
                        "champagne": "#C9A86A",
                        "inverse-on-surface": "#f3f0f0",
                        "outline": "#897172",
                        "surface-tint": "#a33a48",
                        "secondary-fixed-dim": "#e5c281",
                        "surface": "#F8F4EE",
                        "inverse-primary": "#ffb2b7",
                        "on-primary-fixed": "#40000e",
                        "on-tertiary-fixed-variant": "#484743",
                        "on-secondary-fixed-variant": "#5b430e",
                        "secondary": "#C9A86A",
                        "on-surface": "#1b1c1c",
                        "on-secondary-fixed": "#261900",
                        "surface-bright": "#F8F4EE",
                        "outline-variant": "#d8c2a5",
                        "tertiary-container": "#373632",
                        "secondary-fixed": "#ffdea4",
                        "on-error-container": "#93000a",
                        "background": "#F8F4EE",
                        "error": "#ba1a1a",
                        "surface-container-highest": "#f2efe9",
                        "inverse-surface": "#303030",
                        "primary-container": "#6D1023",
                        "tertiary": "#22211d",
                        "tertiary-fixed-dim": "#c9c6c0",
                        "surface-variant": "#efe8e2",
                        "surface-container-low": "#f6f3f2",
                        "on-background": "#1b1c1c",
                        "on-secondary-container": "#473711",
                        "on-surface-variant": "#564243",
                        "on-tertiary": "#ffffff",
                        "on-primary-container": "#f8f4ee",
                        "tertiary-fixed": "#e6e2dc",
                        "primary": "#6D1023",
                        "surface-dim": "#dcd9d9",
                        "on-tertiary-container": "#a19f9a",
                        "error-container": "#ffdad6",
                        "on-secondary": "#1b1c1c",
                        "on-primary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "on-error": "#ffffff",
                        "primary-fixed-dim": "#ffb2b7",
                        "on-tertiary-fixed": "#1c1c18",
                        "secondary-container": "#C9A86A",
                        "on-primary-fixed-variant": "#832232",
                        "primary-fixed": "#ffdadb",
                        "surface-container": "#f0eded",
                        "surface-container-high": "#eae7e7"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "margin-mobile": "20px",
                        "unit": "8px",
                        "gutter": "24px",
                        "container-max": "1280px",
                        "margin-desktop": "64px"
                    },
                    "fontFamily": {
                        "heading": ["Playfair Display", "serif"],
                        "body": ["Montserrat", "sans-serif"],
                        "label-lg": ["Montserrat"],
                        "body-md": ["Montserrat"],
                        "headline-lg-mobile": ["Playfair Display"],
                        "headline-lg": ["Playfair Display"],
                        "headline-md": ["Playfair Display"],
                        "label-sm": ["Montserrat"],
                        "display-md": ["Playfair Display"],
                        "display-lg": ["Playfair Display"],
                        "body-lg": ["Montserrat"]
                    },
                    "fontSize": {
                        "label-lg": ["14px", {"lineHeight": "1.0", "letterSpacing": "0.12em", "fontWeight": "600"}],
                        "body-md": ["18px", {"lineHeight": "1.85", "fontWeight": "400"}],
                        "headline-lg-mobile": ["30px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "headline-lg": ["36px", {"lineHeight": "1.2", "fontWeight": "650"}],
                        "headline-md": ["26px", {"lineHeight": "1.45", "fontWeight": "600"}],
                        "label-sm": ["12px", {"lineHeight": "1.1", "letterSpacing": "0.08em", "fontWeight": "500"}],
                        "display-md": ["52px", {"lineHeight": "1.15", "fontWeight": "700"}],
                        "display-lg": ["72px", {"lineHeight": "1.08", "letterSpacing": "-0.03em", "fontWeight": "700"}],
                        "display-xl": ["88px", {"lineHeight": "1.05", "letterSpacing": "-0.04em", "fontWeight": "700"}],
                        "body-lg": ["20px", {"lineHeight": "1.85", "fontWeight": "400"}]
                    }
                },
            },
        }
